const express = require("express");
const todoRouter = require("./router/todoRouter");
const taskRouter = require("./router/taskRouter");

const app = express();
const PORT = 3500;

app.use(express.urlencoded());
app.use(express.json());

app.use('/todo', todoRouter);
app.use('/task', taskRouter);
app.listen(PORT, () => console.log(`server listening to ${PORT}`));
