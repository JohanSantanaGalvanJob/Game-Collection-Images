# Game Collection App

This is my own personal project on which I have developed a full-stack page using Express, Sequelize, Multer for the images and IONIC technologies.

## Pre-requisites

It is necesary to instal MySQL workbench and the server itself and also create a database, put a table and introduce some information. https://www.mysql.com/downloads/

It is completely necesary to install Node.js for the dependencies and the packages you will need in the frontend and backend part. https://nodejs.org/en/download/

Visual Studio Code can be useful for your frontend part. https://code.visualstudio.com

## Backend Part



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


