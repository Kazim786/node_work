const express = require('express')

const router = express.Router()

router.get('/',(req, res, next) => {
    console.log('object')
    res.send('Hello from express :D')
})

module.exports = router