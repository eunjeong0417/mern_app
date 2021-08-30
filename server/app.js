import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import postsRouter from './routes/posts.js';

const app = express();

app.use('/posts', postsRouter);

app.use(express.urlencoded({limit:"30mb", extended: true}));
app.use(express.json({ limit: "30mb", extended: true }));
app.use(cors());


//몽고디비연결과 PORT 설정
const mongodbURL = 'mongodb+srv://jeong:jeong1234567@cluster0.urjey.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
const PORT = process.env.PORT || 5000;

//데이터베이스에 연결
//mongoose연결시 발생하는 오류 막기위한 설정
mongoose
    .connect(mongodbURL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(PORT, () => console.log(`server running on port ${PORT}`)))
    .catch((error) => console.log(error.message));


