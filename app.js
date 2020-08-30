//Created server 

const http = require('http')

//RequestListener takes in request and response arguments
const requestListener = (req, res) => {
    const url = req.url;
    if(url === '/'){
        res.setHeader('Content-Type', 'text/html')
        res.write('<html>')
        res.write('<head><title>Enter Message</title></head>')
        res.write('<body><form action= "/message" method= "POST"><input type="text" name= "message"><button type="submit">Send</button></input></form></body>')
        res.write('</html>')
        return res.end();
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
