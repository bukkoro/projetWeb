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
mongoose.connect('mongodb+srv://deliverHome:test@cluster0.ddyzt.mongodb.net/test',{useNewUrlParser: true, useUnifiedTopology: true });

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

//createUser("doro2", "enguerrand2", "test2", "2test@gmail.com")


const getUserByEmail = function( callback){
    User.find({ }, function (err, docs) { 
        if (err){ 
            console.log(err); 
        } 
        else{ 
            console.log("Trouvé : ", docs); 
        }
        callback(docs)
    });
}



getUserByEmail()

app.get('/user', (req, res) => { 
    console.log(req)
    getUserByEmail(req.body.email,function(resp){
      res.send(resp)
      })
  })


  



