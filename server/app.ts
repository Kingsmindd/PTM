import dotenv from "dotenv";

import express from "express"; //step-1 : Import expreess framwork after installation

import mongoose from "mongoose"; // step-9 import mongoose after installation to  be able to connect to mongoDB

import dns from "dns";

import cors from "cors";

const app = express(); //step-2: activate express and put in a container called app
dns.setServers(["8.8.8.8", "8.8.4.4"]);

dotenv.config();

const port = 2100; // step-3: Define the port number for the server. note: you cant give the same number on your laptop to another website

app.use(cors());

import taskRouter from "./routes/taskRoutes";

app.use(express.json());

app.use("/api/task", taskRouter);

//step-4: go to package.json under script and put "dev" : nodemon app.ts to allow npm run dev work

//step-6: connect to mongoDB
// step-7: to connect to mongoDB first intall mongoose
//step-8 : list to both the database and server together.
const start = async () => {
  await mongoose.connect(process.env.MONGO_URI!);

  console.log("Database connect successful");

  app.listen(port, () => {
    console.log(`server is runing on PORT: ${port}`);
  }); // step-5: listen to the server after runing the npm run dev
};

start();
//umehjnr041_db_user
//password: vxasy6I1l6iEnR96
//mongodb+srv://umehjnr041_db_user:<db_password>@cluster0.3nlc24e.mongodb.net/?appName=Cluster0

// Server files: this is where you run your server and connnect to your database ====> from app.js ====> the model file
// Model files : this is used to define our data structure that will enter our database =====> from the model file we go to the ====> controller file
// Controller files(Business Logic): this file is used to define what happens between request and response. ===> from the controller files we go to the Routes files
// Routes files: this defines the request type and the route for that particular request type. from here back to the father ===> server file (app.js)

// Other files includes : middleware files, utility files etc .

// CORS
// AXIOS
