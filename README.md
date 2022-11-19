# Lab 8 - Starter

Done individually.

Question:  
1.) Where would you fit your automated tests in your Recipe project development pipeline? Select one of the following and explain why.  
1. Within a Github action that runs whenever code is pushed 
2. Manually run them locally before pushing code
3. Run them all after all development is completed  

The automated tests would fit within a Github action that runs whenever code is pushed because we want to consistently run the tests for every step we build. There are four testing mantras mentioned in class, which are TETO (Test Early Test Often), ABT (Always Be Testing), TFS (Test the Full Stack), and use your own software.  

2.) Would you use an end to end test to check if a function is returning the correct output? (yes/no)  

No, I would not use an end to end test to check if a function is returning the correct output. End to end test (E2E test) is used to emulate user actions from start to finish, so it is not a good idea to test if the returned output of a function. To check if a function is returning the correct output, unit testing would be a better option.  

3.) Would you use a unit test to test the “message” feature of a messaging application? Why or why not? For this question, assume the “message” feature allows a user to write and send a message to another user.  
   
No, I would not use a unit test to test the message feature of a messaging application. A unit test cannot test how the individual components interact with each other on an feature level, so in this case, we cannot check if a message is sent and recieved correctly.

4.) Would you use a unit test to test the “max message length” feature of a messaging application? Why or why not? For this question, assume the “max message length” feature prevents the user from typing more than 80 characters.  
   
Yes, I would use a unit test to test the max message length feature of a messaging application because the length of a message is an encapsulated unit and it is a small scale without many moving parts. 
