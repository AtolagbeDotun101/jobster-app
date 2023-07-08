const express = require('express')
const router = express.Router()
const testUser = require('../middleware/testUser')
const rateLimit = require('express-rate-limit')
const { register, login , updateUser} = require('../controllers/auth')
const auth = require('../middleware/authentication')


const ratelimiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 10,
     message: {
    msg: 'Too many requests from this IP, please try again after 15 minutes',
  },
})

router.post('/register',ratelimiter ,register)
router.post('/login',ratelimiter ,login)
router.patch('/updateUser',auth,testUser, updateUser )

module.exports = router
