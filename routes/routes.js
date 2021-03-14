const express = require('express');
const Router = express.Router()
const handler = require('../controller/handler')
const app = require('../app.js')

//family_name, name, email, password, description
Router.post('/addUser', handler.HaddUser)
//email, password
Router.post('/login', handler.HloginUser)
//family_name, email
Router.delete('/deleteUser', handler.HdeleteUser)
//img, email
Router.post('/addPost', handler.HaddPost)
//email
Router.get('/getAllPost', handler.HgetAllPost)
//postid
Router.post('/likePost', handler.HlikePost)
//emailUser, emailFollower
Router.post('/addFollower', handler.HaddFollower)
//emailUser
Router.get('/getAllFollower', handler.HgetAllFollower)
//delatePoste
Router.post('/deletepost',handler.Hdeletepost)
//changeGrades
Router.post('/changegrade',handler.HchangeGrade)
// get posts of all users which matched the hashtag 
Router.get('/hashtag',handler.HgetbyHashtag)

module.exports = Router
