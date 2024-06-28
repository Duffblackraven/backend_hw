const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const bookRouter = require('./routes/books');
const userRouter = require('./routes/users');

const app = express();
dotenv.config();
const { PORT, API_URL, DB_URL } = process.env;
console.log(DB_URL);
mongoose.connect(DB_URL).then(() => console.log('connected mongodb')).catch((error) => console.log(error));
app.use(cors());
app.use(bodyParser.json());
app.use(bookRouter);
app.use(userRouter);
app.listen(PORT, () => {
  console.log(`Сервер запущен по адресу ${API_URL}:${PORT}`);
})
