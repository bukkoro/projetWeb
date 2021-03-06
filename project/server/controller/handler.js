const db = require('../model/db')

exports.HgetUserByEmail_Fname = (req, res) => {
    db.getUserByEmail_Fname(req.body.family_name,req.body.email, function(resp){
        res.send(resp)
        })
}
exports.HcreateUser = (req,res) => {
    db.createUser(req.body.family_name, req.body.name, req.body.email, req.body.password, function(resp){
        res.status(200).send(resp)
        })
}
exports.HdeleteUser = (req,res) => {
    db.deleteUser(req.body.family_name,req.body.email, function(resp){
        res.send(resp)
        })
}
exports.HupdateUser = (req,res) => {
    db.updateUser(req.body.FnameA,req.body.FnameN,req.body.UemailA,req.body.UemailN, req.body.pswd, req.body.grades, req.body.nameN, function(resp){
        res.send(resp)
        })
}
exports.HupdateUserProfileDescription = (req,res) => {
    db.updateUserProfileDescription(req.body.description, req.body.Uemail, function(resp){
        res.send(resp)
        })
}
exports.HgetUserProfileDescription = (req,res) => {
    db.getUserProfileDescription(req.body.Uemail, function(resp){
        res.send(resp)
    })
}
exports.HdeletetUserProfileDescription = (req,res) => {
    db.HdeletetUserProfileDescription(req.body.Uemail, function(resp){
        res.send(resp)
    })
}