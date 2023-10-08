# React + Vite

Make sure internet is on

# Instruction to run the app locally

# Summary: 
prerequisite: git and node should be installed.

open command prompt then run the following code. you can copy the below commands and paste or right click on the cmd. It will automatically executes the commands one after the other.

/***/

git clone https://github.com/rano667/inventory-management-project.git
cd inventory-management-project
npm i
cd ./backend
npm i
cd..
npm run both 

/***/
(press enter)

this will run the app on http://localhost:5173/

# Step 1: create a new folder on the desktop and downloading the project

prerequisite: git should be installed on system or else download the code zip and follow the next steps

-> go inside the folder 
-> open git bash or terminal or cmd 
-> run the below command 
-> git clone https://github.com/rano667/inventory-management-project.git


This will clone the project to your inside the local folder

go inside project folder(inventory-management-project)

# Step 2: Install the packages required to run the project

prequisite: 1. Node installation is required with npm. 
            2. Vscode required (optionally)

now you can open this project in vscode or any other editor or open cmd here

lets say you have opened cmd successfully into the folder
now run the below commands

npm i
cd ./backend
npm i
cd..
npm run both

# app is running successfully

in your browser visit the url http://localhost:5173/
or which is visible on cmd

# database 
I am using a mongoAtlas cluster so it is running on cloud. so no configuration needed.

But, if you want to run the datbase locally. you cn download MongoDBCompass.

and change the mongo uri (mongodb://localhost:27017) in 

backend/connectDB.js file

here, const databaseURI = 'mongodb+srv://*****:*****@cluster0.gcryh.mongodb.net/test'



