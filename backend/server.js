import dotenv from 'dotenv';
dotenv.config();

import mongoose from 'mongoose';
import app from "./app.js";

// Ensure MONGO_URI is loaded from .env
const MONGO_URI = process.env.MONGO_URI;

if (!MONGO_URI) {
    console.error('MONGO_URI is not defined in the environment variables');
    process.exit(1);
}

mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => {
        console.error('Could not connect to MongoDB', err);
        process.exit(1);
    });

app.listen(process.env.PORT, () => {
    console.log(`SERVER HAS STARTED AT PORT ${process.env.PORT}`);
});