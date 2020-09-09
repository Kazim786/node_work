
//Created server 
const fs = require('fs');
//RequestListener takes in request and response arguments
const requestHandler = (req, res) => {
  const url = req.url;
  const method = req.method;
  if (url === '/') {
    res.write('<html>');
    res.write('<head><title>Enter Message</title></head>');
    res.write(
      '<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>'
    );
    res.write('</html>');
    return res.end();
  }
  if (url === '/message' && method === 'POST') {
    const body = [];
    req.on('data', chunk => {
      console.log(chunk);
      body.push(chunk); //have to define a function for every data that is coming in. Just like we did with server. You can do anonymous function or write the function separately.
    });
    return req.on('end', () => {
                    //This will have the input of whatever you put in the form

      const parsedBody = Buffer.concat(body).toString();
      const message = parsedBody.split('=')[1];
      fs.writeFile('message.txt', message, err => {
                      //This will create a new file called message.txt which as within it whatever we submit from the form

        res.statusCode = 302;
        res.setHeader('Location', '/');
        return res.end();
      });
    });
  }



    //Content type is the key. 'text/html' is the value. 
    //In simple english the 
    //content type you will be setting is text/html
  res.setHeader('Content-Type', 'text/html');
  res.write('<html>');
  res.write('<head><title>My First Page</title><head>');
  res.write('<body><h1>Hello from my Node.js Server!</h1></body>');
  res.write('</html>');
  res.end();
  //This is the part where the res.write is being sent to client
    //Now you cant do res.write() because you have ended it
};

// module.exports = requestHandler;

// module.exports = {
//     handler: requestHandler,
//     someText: 'Some hard coded text'
// };

// module.exports.handler = requestHandler;
// module.exports.someText = 'Some text';

exports.handler = requestHandler;
exports.someText = 'Some hard coded text';