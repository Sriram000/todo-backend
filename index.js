const express = require("express");
const todoRouter = require("./router/todoRouter");

const app = express();
const PORT = 3000;

app.use(express.urlencoded());
app.use(express.json());

app.use('/', todoRouter);
app.listen(PORT, () => console.log(`server listening to ${PORT}`));
