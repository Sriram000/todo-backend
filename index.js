const express = require("express");
const todoRouter = require("./router/todoRouter");
const taskRouter = require("./router/taskRouter");

const app = express();
const PORT = 5000;

app.use(express.urlencoded());
app.use(express.json());
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'GET,PUT, POST,DELETE');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use('/todo', todoRouter);
app.use('/task', taskRouter);
app.listen(PORT, () => console.log(`server listening to ${PORT}`));
