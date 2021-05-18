const express = require("express");
const app = express();
const bodyParser = require("body-parser");

const parser = bodyParser.urlencoded({
    extended: true
});

app.get('/index', (request, response) => {
    response.sendFile("c:/Client-Server/client/index.html");
});

app.post("/helloWorld", parser, (request, response) => {  
    response.send(`You entered ${request.body.type}.`);
});

app.listen(5000, () => {
    console.log("Runnin' on 5000.");
});