

// const express = require('express')


// const app = express()

// //app is also a valid request handler

// //App.use is executed for every incoming request
// app.use((req, res, next) => {
//     console.log("In the middleware!")
//     next() //Allows the request to move to the next mmiddleware (the next app.use())
// })


// app.use((req, res, next) => {
//     console.log("In another middleware!")
//     res.send(`<h1>Hello from Express!</h1>`) 
//     //When you have no other middlewares after this you can do res.send() and this will send stuff to the web page
// })



// //The method that goes into createServer is called a requestListener. I explicitly named the method i put into this a requestListener, You can name it anything
// //To use this you have to save it to a variable. I called mine server explicitly. Again you can name it anything

// app.listen(3000)

// //app.listen()
// // can substitute: 
// //const server = http.createServer(app);
// // server.listen(3000);

//***************** */
//Gonna work with Routes and middleware now 

const express = require('express');

const app = express();

app.use('/add-product',(req, res, next) => {
    console.log('object')
    res.send('I love RasulAllah (s)')
})

app.use('/',(req, res, next) => {
    console.log('object')
    res.send('Hello from express :D')
})

app.listen(3000)