const express = require("express");
const app = express();
const port = 5000;

const parser = express.urlencoded({
    extended: true
});

app.get('/index', (request, response) => {
    response.sendFile("c:/Client-Server-Communication-Web/client/index.html");
});

app.post("/helloWorld", parser, (request, response) => {  
    response.send(`You entered ${request.body.type}.`);
});

app.listen(port, () => {
    console.log(`Runnin' @ ${port}`);
});
// This is cool!
