
const http = require('http');

const express = require('express')


const app = express()

//The method that goes into createServer is called a requestListener. I explicitly named the method i put into this a requestListener, You can name it anything
//To use this you have to save it to a variable. I called mine server explicitly. Again you can name it anything

const server = http.createServer(routes.handler);

server.listen(3000);



