const { request, response } = require('express')
const express = require('express')
const router = express.Router()

router.post('/isLoggedIn' , (request, response) => {
    response.send('send')
})

module.exports = router