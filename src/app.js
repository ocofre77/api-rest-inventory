import express from "express";
import morgan from "morgan";

import {createRoles} from "./libs/initialSetup"

// Routes
//import languageRoutes from "./routes/languages.routes";
//import productsRoutes from "./routes/products.routes";
import authRoutes from "./routes/auth.routes";

import './database/database'

const app = express();

createRoles();


// Settings
app.set("port", 4000);

// Middlewares
app.use(morgan("dev"));
app.use(express.json());



// Routes
//app.use("/api/languages", languageRoutes);
//app.use("/api/products",productsRoutes) 
app.use("/api/auth",authRoutes) 

export default app;