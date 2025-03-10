const Users = require('../model/Users')
const UsersPost = require('../model/UsersPost')
const UsersFollow = require('../model/UsersFollow')
const user = new Users();
const userPost = new UsersPost();
const usersFollow = new UsersFollow();

exports.HaddUser = (req, res) => {
    user.addUser(req.body.family_name, req.body.name, req.body.email, req.body.password, req.body.description, function (resp) {
        res.send(resp)
    })
}

exports.HloginUser = (req, res) => {
    user.login(req.body.email, req.body.password, function (resp) {
        res.send(resp)
    })
}

exports.HdeleteUser = (req, res) => {
    user.delete(req.body.family_name, req.body.email, function (resp) {
        res.send(resp)
    })
}

exports.HaddPost = (req, res) => {
    userPost.addPost(req.body.img, req.body.email, req.body.desc, function (resp) {
        console.log(req.body)
        res.send(resp)
        
    })
}

exports.HgetAllPost = (req, res) => {
    userPost.getAllPost(req.body.email, function (resp) {
        res.send(resp)
    })
}

exports.HlikePost = (req, res) => {
    userPost.likePost(req.body.postid, function (resp) {
        res.send(resp)
    })
}

exports.HaddFollower = (req, res) => {
    usersFollow.addFollower(req.body.emailUser, req.body.emailFollower, function (resp) {
        res.send(resp)
    })
}

exports.HgetAllFollower = (req, res) => {
    usersFollow.getAllFollower(req.body.emailUser, function (resp) {
        res.send(resp)
    })
}

exports.Hdeletepost = (req, res) => {
    userPost.deletePost(req.body.postid,req.body.email, function (resp) {
        res.send(resp)
    })
}

exports.HchangeGrade = (req, res) => {
    user.changeGrade(req.body.email,req.body.grade, function (resp){
        res.send(resp)
    })
}

exports.HgetbyHashtag = (req, res) => {
    userPost.getbyHashtag(req.body.hashtag, function (resp){
        res.send(resp)
    })
}

