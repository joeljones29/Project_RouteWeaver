import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

// Load environment variables from .env file first
dotenv.config();

import { router } from './src/routes/login.js';
import { saver } from './src/routes/savedroutes.js';
import creationRouter from './src/routes/creation.js';
import {homr} from './src/routes/home.js';
import travelRouter from './src/routes/@traveloptions.js';
<<<<<<< HEAD
<<<<<<< HEAD
import suggestRouter from './src/routes/@suggest.js';
import smartVacayRouter from './src/routes/@smartvacay.js';
=======
=======
>>>>>>> d95ddac7679eb0b1a4f37803f37e82dcef16ac3f

// Load environment variables from .env file
dotenv.config();
>>>>>>> d95ddac7679eb0b1a4f37803f37e82dcef16ac3f

const app = express();
const PORT = process.env.PORT || 5000;
app.use(cors());
app.use(express.json());

app.use("/user",router); //handles all routes starting with /user
app.use("/saved",saver); //handles all routes starting with /saved
app.use('/api', creationRouter);
app.use("/home",homr);
app.use('/travel', travelRouter); // handles all routes starting with /travel
<<<<<<< HEAD
<<<<<<< HEAD
app.use('/suggest', suggestRouter); // handles all routes starting with /suggest
app.use('/smartvacay', smartVacayRouter); // handles all routes starting with /smartvacay
=======
>>>>>>> d95ddac7679eb0b1a4f37803f37e82dcef16ac3f
=======
>>>>>>> d95ddac7679eb0b1a4f37803f37e82dcef16ac3f
app.listen(PORT, () => {
  console.log(`Backend server running on http://localhost:${PORT}`);
});
