1.This assignment is graded.
2.please follow the instructions file posted on canvas
3.Upload your work to canvas and push all your files to your repository.
4.clone this repository and start working on the Assignmnet-3

This is what I did to complete this last phase of the assignment.

After installing the node, express, and cors, I created a node file called server.mjs that performs a calculation of 
the users order on the backend and then posts the users total price on the order confirmation screen. This will also redirect
the user to the order confirmation screen where they will see their total cost displayed. They can also navigate to the rest of the web page from the order confirmation page.

I created a new html file called orderConfirmation.html. This is the page the user is redirected to after their order calculation is done on the backend.

I also modified my order page and streamlined it with the server.mjs file and orderConfirmation.html file. The previous order.html file had done the calculations of the users order, but I removed that to make sure that the calculation is only done in the backend.

In order to properly turn the server on and submit orders, you must follow the steps below:

1) 
Open a new terminal and enter - cd "C:\Users\zjame\OneDrive\CIS 2336\Assignment 4&5\cis2336-assignment4-zjamesdandrea\cis2336-assignment3-zjamesdandrea\HTML"

2) 
You then want to enter - node server.mjs

You should then get confirmation that the server is up and running.

3) 
Then open the webpage files, navigate to the order page and submit your order. Select your meal, side, drink, and the quantities of each. Click the calculate total button.

You will then be redirected to the orderconfirmation page in which you will see your total cost.