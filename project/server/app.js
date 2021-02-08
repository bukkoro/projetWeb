// Import all dependencies & middleware here
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');


// Init an Exconspress App. 
const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// Use your dependencies here
const {Schema} = mongoose; 
// use all controllers(APIs) here
app.get('/', (req, res) => {
   res.status(200).json({
      status: 'Server Run successfully'
   });
});

// Start Server here
app.listen(8080, () => {
   console.log('Server is running on port 8080!');
});

//base de donnée mongoDB 
//mongoose.connect('mongodb+srv://deliverHome:test@cluster0.ddyzt.mongodb.net/test',{useNewUrlParser: true, useUnifiedTopology: true });

mongoose.connect('mongodb://localhost:27017/DeliverHome', {useNewUrlParser: true, useUnifiedTopology: true });

const User_schema = new Schema({
    family_name: String,
    name : String, 
    email : String, 
    password:String,
    grade : {type : Number, default: 0},  
    date : {type : Date, default : Date.now}, 

});


const User = mongoose.model("User", User_schema);

createUser = function(family_nameM,nameM, emailM, passwordM, gradeM, dateM){
    const user = new User({family_name:family_nameM,name:nameM, email:emailM, password:passwordM, grade:gradeM, date:dateM});
    user.save().then(function(){
        console.log("User créée : ",user);
    });
};

/*
createUser("doro4", "enguerrand4", "4test@gmail.com", "test4")
createUser("doro3", "enguerrand3", "3test@gmail.com", "test3")
createUser("doro2", "enguerrand2", "2test@gmail.com", "test2")

createUser("doro12", "enguerrand12", "12test@gmail.com", "test12")
*/


const getUserByEmail_Fname = function(Fname,Uemail,callback){
    User.find({family_name : Fname, email : Uemail  }, function (err, docs) { 
        if (err){ 
            console.log(err); 
        }
        else{ 
            console.log("Trouvé : ", docs); 
        }
        callback(docs)
    });
}

//En guise de test 
//getUserByEmail_Fname("doro12","12test@gmail.com",function(res){
//    console.log(res)
//})

//Se servir de ce model pour créer toutes les routes GET - PUT - UPDATE - DELETE
app.get('/user', (req, res) => { 
    console.log(req)
    getUserByEmail_Fname(req.body.family_name,req.body.email,function(resp){
      res.send(resp)
      })
  })
