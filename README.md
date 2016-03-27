# CSCI3800Homework3

This project was built using Apigee a127. So both the resource proxy and OAuth proxy can be launched from the command line with "a127 project start". 

You can get an access token after authenticating at this url: 	http://mattlamont-test.apigee.net/hello-world/authorize
The client id and secret are saved in the Postman project.

After authenticating, the resource proxy only has one endpoint 	http://mattlamont-test.apigee.net/hello-world/github_user_email 
This URI takes one argument as a query parameter: a github username. It can be tacked on to the url like this:
  	http://mattlamont-test.apigee.net/hello-world/github_user_email?username=mattlamont
  	
This will return a response with the user's primary email address and some additional meta information. 


All of this can be automatically tested with the postman collection. Just open the collection, set the environment to "hw3_test" and then run the "HW3" collection of tests to automatically authenticate and send through some good/bad requests. 
