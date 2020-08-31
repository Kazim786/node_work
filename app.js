//Created server 

const http = require('http')
const fileSystem = require('fs')

//RequestListener takes in request and response arguments
const requestListener = (req, res) => {
    const url = req.url;
    const method = req.method;
    if(url === '/'){
        res.setHeader('Content-Type', 'text/html')
        res.write('<html>')
        res.write('<head><title>Enter Message</title></head>')
        res.write('<body><form action= "/message" method= "POST"><input type="text" name= "message"><button type="submit">Send</button></input></form></body>')
        res.write('</html>')
        return res.end();
    }

    if(url === '/message' && method === 'POST'){
        const body = [];
        req.on('data', (chunk) => {
            console.log(chunk)
            body.push(chunk);
        }) //have to define a function for every data that is coming in. Just like we did with server. You can do anonymous function or write the function separately.
        return req.on('end', () => {
            //This will have the input of whatever you put in the form
            const parsedBody = Buffer.concat(body).toString()
            const message = parsedBody.split('=')[1];
            fileSystem.writeFileSync('message.txt', message)
            //This will create a new file called message.txt which as within it whatever we submit from the form
            res.statusCode = 302;
            res.setHeader('Location', '/');
            return res.end()
        })
    }

    //Content type is the key. 'text/html' is the value. 
    //In simple english the 
    //content type you will be setting is text/html
    res.setHeader('Content-Type', 'text/html')
    res.write('<html>')
    res.write('<head><title>My First Page</title></head>')
    res.write('<body><h1>Hello from my node.js server!</h1></body>')
    res.write('</html>')
    res.end(); //This is the part where the res.write is being sent to client
    //Now you cant do res.write() because you have ended it
}


//The method that goes into createServer is called a requestListener. I explicitly named the method i put into this a requestListener, You can name it anything
//To use this you have to save it to a variable. I called mine server explicitly. Again you can name it anything
const server = http.createServer(requestListener)

//server comes with many methods one of them is listen.
server.listen(3000);

//saved to git

// The HTML | action Attribute is used to specify where the formdata is to be sent to the server after submission of the form. It can be used in the <form> element.

// Syntax:

// <form action="URL">
// Attribute Values:

// URL: It is used to specify the URL of the document where the data to be sent after the submission of the form.
// The possible values of the URL are:

// absolute URL: It points to another website link. For Example: www.gfg.org
// relative URL: It is used to point to a file within a webpage. For Example: www.geeksforgeeks.org
