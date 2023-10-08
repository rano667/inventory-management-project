# React + Vite - Inventory Management Project

## Try the app

- https://inventory-management-localstorage.vercel.app/

**Note:** Ensure that you have an active internet connection.

## Instructions to Run the App Locally

### Prerequisites:

- Git
- Node.js and npm should be installed.

### Summary:

1. Clone the repository.
2. Install project dependencies.
3. Start the app locally.

open command prompt then run the following commands.


- git clone https://github.com/rano667/inventory-management-project.git
- cd inventory-management-project
- npm i
- cd ./backend
- npm i
- cd..
- npm run both


in your browser visit the url http://localhost:5173/

### Step 1: Clone the Project

If you have Git installed, follow these steps:

1. Create a new folder on your desktop.
2. Open the folder.
3. Open a terminal (Git Bash, Command Prompt, or Terminal) inside the folder.
4. Run the following command:

```bash
git clone https://github.com/rano667/inventory-management-project.git

### Step 2: Install Dependencies and Run the App

1. Navigate to the project folder (inventory-management-project):

```cmd
cd inventory-management-project

2. Install project dependencies:

```cmd
- npm install
- cd ./backend
- npm install
- cd ..

3. Start the application:

```cmd
npm run both

in your browser visit the url http://localhost:5173/


# Database 
The application uses a MongoDB Atlas cluster, which is hosted in the cloud, so no additional configuration is needed.

However, if you want to run the database locally, you can download MongoDB Compass and update the MongoDB URI in the backend/connectDB.js file. Modify the databaseURI variable like this:

const databaseURI = 'mongodb://localhost:27017/your_database_name_here';



