import  express  from "express";
import mysql from "mysql2";
import dotenv from "dotenv";
import userRouter from "./routes/userRouter";

dotenv.config();

const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
});

db.connect((err) => {
    if (err) {
        console.error(err);
    } else {
        console.log("Connected to database");
    }
});

const app = express();
app.use(express.json());

app.use("/api/users", userRouter);

const  port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
 