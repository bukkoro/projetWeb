const express = require('express');
const Router = express.Router()
const handler = require('../controller/handler')
const app = require('../app.js')

Router.get('/get/user', handler.HgetUserByEmail_Fname)
Router.post('/add/user', handler.HcreateUser)
Router.delete('/delete/user', handler.HdeleteUser)
Router.post('/update/user', handler.HupdateUser)
Router.post('/update/profiledesc', handler.HupdateUserProfileDescription)
Router.get('/get/profiledesc', handler.HgetUserProfileDescription)
Router.delete('/delete/profiledesc', handler.HdeletetUserProfileDescription)
// A tester 
Router.get('/get/image', handler.HgetImagebyEmail)
Router.post('/create/image', handler.HcreateImage)

module.exports = Router