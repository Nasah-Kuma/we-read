import express from "express";
import dotenv from "dotenv";
import connectDB from "./connection.js";
import authRouter  from "./routes/authRouter.js";
import clubRouter from "./routes/clubRouter.js";


dotenv.config();

const app = express();

app.use(express.json());

connectDB().then(() => {
  app.listen(process.env.PORT || 3000, () => {
    console.log(`Server running on ${process.env.PORT || 3000}`);
  });
});

app.use('/auth', authRouter);

app.use('/club', clubRouter);