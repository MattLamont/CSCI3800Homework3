'use strict';
/*
 'use strict' is not required but helpful for turning syntactical errors into true errors in the program flow
 http://www.w3schools.com/js/js_strict.asp
*/

/*
 Modules make it possible to import JavaScript files into your application.  Modules are imported
 using 'require' statements that give you a reference to the module.

  It is a good idea to list the modules that your application depends on in the package.json in the project root
 */
var util = require('util');

/*
 Once you 'require' a module you can reference the things that it exports.  These are defined in module.exports.

 For a controller in a127 (which this is) you should export the functions referenced in your Swagger document by name.

 Either:
  - The HTTP Verb of the corresponding operation (get, put, post, delete, etc)
  - Or the operationId associated with the operation in your Swagger document

  In the starter/skeleton project the 'get' operation on the '/hello' path has an operationId named 'hello'.  Here,
  we specify that in the exports of this module that 'hello' maps to the function named 'hello'
 */
module.exports = {
  hello: hello
};

/*
  Functions in a127 controllers used for operations should take two parameters:

  Param 1: a handle to the request object
  Param 2: a handle to the response object
 */





function hello(request, response)
{

	var GitHubApi = require("github");
	var github = new GitHubApi(
	{
    	version: "3.0.0"
	});

    response.set( 'Content-Type' , 'text/plain' );

	//This is a dummy token that doesn't actually work, because Github would disable it otherwise
	var token = "28c10ac060bb9c8c5c1b623742e97f7cf626c049"

    var username = request.swagger.params.username.value;
    //var password = request.swagger.params.password.value;

	github.authenticate(
	{
		type: "oauth",
		token: token
        //type: "basic",
        //username: username,
        //password: password
	});

	var data = "";

	github.user.getEmails( {} , function(err, res)
	{
        console.log( "Github Error: ", err);
        console.log( "Github Response: " , res );


        response.send( JSON.stringify( res ) );


	});

}
