# Game Collection App

This is my own personal project on which I have developed a full-stack page using Spring and IONIC technologies.

## Pre-requisites

You may install Eclipse because it has a well preparated structure in order to perform your backend part. https://www.eclipse.org/downloads/

It is also neccesary to instal MySQL workbench and the server itself and also create a database, put a table and introduce some information. https://www.mysql.com/downloads/

It is completely necesary to install Node.js for the dependencies and the packages you will need in the frontend and backend part. https://nodejs.org/en/download/

Visual Studio Code can be useful for your frontend part. https://code.visualstudio.com

## Backend Part

Now that you have Eclipse IDE you may also install Spring in the eclipse marketplace. Once you have done it, you should make a project and separate the java classes in packages for a better controlling. The Java classes are the controller, some interfaces, DAO, and the skeleton where all the variables are going to be introduced, and the services. You have also to take in count the application.properties because we will need it in order to connect to the database (model).

As for the java classes itself. First of all in the GameCollectionApp.java you need to create the constructor and the getters and setters of all the variables you are going to add in your app. It is also important to create an empty constructor.

The service part has an interface with all the CRUD methods and the service itself which is only the fully implementation of those methods.

DAO part is only an extension for a class called CrudRepository which is implemented in the project.

Finally, the controller is the part where a the link connects to the methods made in the service part.

## DATA API Used

For the database part I used the data API of Metacritic of this website: https://rapidapi.com/Prastiwar/api/metacriticapi/
Bad news is that it is free some transactions, but then you will ned to pay for more transactions. 

Then, I made a little Java project to transform the JSON data into SQL by using Http libraries and the connection to MySQL.

We have the GameSchema which is only getters, setters and the constructor of all the variables.

The Main does the connection to the database and inserts all the information into MySQL. 

Finally, the Api does the conection to the Data Api and gets all of the data and put it into a JSON file.

## POSTMAN 

This is the link for the Postman CRUD: https://documenter.getpostman.com/view/23479991/2s83tGoBNC

## FrontendPart

For the frontend Part, we are going to use Angular with IONIC.

We will install it by using Nodejs and the command npm install -g @ionic/cli. Then, we are going to start our project putting ionic start and then selecting Angular, a blank project and call it as you want.

In the project, you will see a list part where is the get part of the app and the delete. Then, there is another page for creating a new game by doing a formulary, and finally we have the update page for changing anything in every game.

As an extra we have a search filter that works mostly well and for that we need to install the package called ng2-search-filter.


