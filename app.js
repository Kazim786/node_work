

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

const path = require('path')

const express = require('express');

const bodyParser = require('body-parser') //now requests body object will get parsed as soon as body parser is put into app.use middleware. It parses JSON requests

const app = express();

const adminRoutes = require('./routes/admin') //Order doesnt matter when importing. Have to put this on top otherwise youll never reach it.

const shopRoutes = require('./routes/shop')

app.use(bodyParser.urlencoded({extended: false}))

app.use("/admin", adminRoutes); 

app.use(shopRoutes);

//404 page
// app.use((req, res, next) => {
//     res.status(404).send('<h1>Page not Found</h1>')
// })

//serving 404 html page

app.use((req, res, next) => {
    //
    res.status(404).sendFile(path.join(__dirname, './', 'views', 'notfound.html'))
})



app.listen(3000) // acts as server 

//**********NOTES */


//config option extended false. To comply with message in terminal

// app.use('/add-product',(req, res, next) => { 
//     console.log('object')
//     res.send('<form action= "/product" method="POST"> <input type="text" name="title"><button type="submit">Add Product</button></form>')
    
// }) //Gonna Put this into admin.js

//****** */
// app.use('/product', (req, res, next) => {
    //app.use always executes. Not just for POST but for GET as well
//     console.log(req.body) //This outputs undefined because request doesnt parse the body.
//     //You have to add body parser. So npm install --save body-parser then save it to variable bodyParser. Put variable into middleware above with urlencoded() function
//     res.redirect('/')
// })
//******* */

// app.post('/product', (req, res, next) => {
//     //But if we use app.get it'll work for only get requests. 
//     //If we use app.post it will work for only post requests.
//     //This is same as app.use just more specific
//     console.log(req.body) //This outputs undefined because request doesnt parse the body.
//     //You have to add body parser. So npm install --save body-parser then save it to variable bodyParser. Put variable into middleware above with urlencoded() function
//     res.redirect('/')
// }) //Gonna put this into admin.js file

// app.use('/',(req, res, next) => {
//     console.log('object')
//     res.send('Hello from express :D')
// })