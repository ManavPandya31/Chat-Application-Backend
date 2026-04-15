import express from 'express';
import cors from 'cors';
import compression from 'compression';
import authRoute from "./Routers/Auth.route.js";

const app = express();

app.use(cors());
app.use(compression());
app.use(express.json());    
app.use(express.urlencoded({ extended: true }));

app.use("/api/auth",authRoute);

export default app;