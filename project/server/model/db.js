const mongoose = require('mongoose');
const {Schema} = mongoose;


const User_schema = new Schema({
    family_name: String,
    name : String, 
    email : {type : String, unique : true}, 
    password:String,
    grade : {type : Number, default: 0},  
    date : {type : Date, default : Date.now}, 

});
const UserProfileDescription_schema = new Schema({
    description : String,
    Uemail : String, 
    ifollow : [{
        type: String
    }],
    followers: [{
        type: String
    }],
    date : {type : Date, default : Date.now}, 
})
const Publication_schema = new Schema({
    type : String,
    description : String,
    Uemail : String,
    data : Buffer,
    //like : {type : Array, default : 0},
    like: [{
        type: String
    }],
    date : {type : Date, default : Date.now}, 
})

const User = mongoose.model("User", User_schema);
const UserProfileDescription = mongoose.model("UserProfileDescription", UserProfileDescription_schema);
const Publication = mongoose.model("Publication", Publication_schema);

exports.createUser = function(family_nameM,nameM, emailM, passwordM){
    const user = new User({family_name:family_nameM,name:nameM, email:emailM, password:passwordM});
    user.save().then(function(){
        console.log("User créée : ",user);
    });
};
exports.createUserProfileDescription = function(descriptionM,UemailM){
    const UPdescription = new UserProfileDescription({description : descriptionM,Uemail : UemailM});
    UPdescription.save().then(function(){
        console.log("Description de profil créé : ",UPdescription);
    });
};
exports.createPublication = function(typeM, descriptionM, UemailM, dataM){
    const publication = new Publication({type : typeM, description : descriptionM, Uemail : UemailM, data : dataM});
    Publication.save().then(function(){
        console.log("Publication créée : ",Publication);
    });
};
//Get
exports.getUserByEmail_Fname = function(Fname,Uemail,callback){
    User.find({ family_name : Fname, email : Uemail }, function (err, docs) { 
        if (err){ 
            console.log(err); 
        }
        else{ 
            console.log("Trouvé : ", docs); 
        }
        callback(docs)
    });
};
exports.getUserProfileDescription = function(UemailM,callback){
    UserProfileDescription.find({ email : UemailM }, function (err, docs) { 
        if (err){ 
            console.log(err); 
        }
        else{ 
            console.log("Trouvé : ", docs); 
        }
        callback(docs)
    });
};
//Delete
exports.deleteUserProfileDescrition = function(UemailM,callback){
    UserProfileDescription.deleteOne({ email : UemailM }, function (err, docs) { 
        if (err){ 
            console.log(err);
        }
        else{ 
            console.log("Trouvé : ", docs); 
        }
        callback(docs)
    });
};
exports.deleteUser = function(Fname,Uemail,callback){
    User.deleteOne({family_name : Fname, email : Uemail }, function(err,docs) {
    if (err){ 
            console.log(err); 
        }
        else{ 
            console.log("Trouvé : ", docs); 
        }
        callback(docs)
    });
};
//Update
exports.updateUserProfileDescription = function(descriptionM,UemailM){
    UserProfileDescription.updateOne({email : UemailM},{description : descriptionM},function(err,docs) {
        if (err){ 
            console.log(err); 
        }
        else{ 
            console.log("Description de profil : ", docs); 
        }
        callback(docs)
    });
};
exports.updateUser = function(FnameA,FnameN,UemailA,UemailN, pswd, grades, nameN, callback){
    User.updateOne({family_name : FnameA, email : UemailA },{family_name:FnameN,name:nameN, email:UemailN, password:pswd, grade:grades, date:dateM} ,function(err,docs) {
    if (err){ 
            console.log(err); 
        }
        else{ 
            console.log("MaJ : ", docs); 
        }
        callback(docs)
    });
};