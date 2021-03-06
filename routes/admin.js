const path = require('path')

const express = require('express')

const router = express.Router()

//router functions work the same way app functions work. It also has .get .post .us

//turned .use to .get. You dont have to but its better if you do.
// /admin/add-product => GET
router.get('/add-product',(req, res, next) => { 
    console.log('object')
    res.sendFile(path.join(__dirname, '../', 'views', 'add-product.html'))
    
})
// /admin/add-product => POST
router.post('/add-product', (req, res, next) => {
    //But if we use app.get it'll work for only get requests. 
    //If we use app.post it will work for only post requests.
    //This is same as app.use just more specific
    console.log(req.body) //This outputs undefined because request doesnt parse the body.
    //You have to add body parser. So npm install --save body-parser then save it to variable bodyParser. Put variable into middleware above with urlencoded() function
    res.redirect('/')
})

module.exports = router;