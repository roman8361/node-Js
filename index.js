const express = require("express");
const mongoose = require("mongoose"); // подключение БД
const bodyParser = require("body-parser"); 

const app = express();

mongoose.connect("mongodb://localhost/users-db", { useNewUrlParser: true });

app.use(bodyParser.json());
app.use("/api", require("./api")); // чтобы получить запросы (get, post... надо сначала написать api)


app.listen(4000, ()=> {
    console.log("server is work")
});