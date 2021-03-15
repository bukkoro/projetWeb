// Import all dependencies & middleware here
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const {Schema} = mongoose;
const multer = require('multer');
const Router = require('./routes/routes')

mongoose.set('useCreateIndex', true)

//BDD SUR LE CLOUD 1
//mongodb://u8f2zcxqiyi0abryburm:cL4NCI4H3Y6Ij0ucIM02@bn6ixksojju0rpu-mongodb.services.clever-cloud.com:27017/bn6ixksojju0rpu


//BDD SUR LE CLOUD 2
mongoose.connect('mongodb://u8f2zcxqiyi0abryburm:cL4NCI4H3Y6Ij0ucIM02@bn6ixksojju0rpu-mongodb.services.clever-cloud.com:27017/bn6ixksojju0rpu', {useNewUrlParser: true, useUnifiedTopology: true });

//BDD LOCALE
//mongoose.connect('mongodb://localhost:27017/DeliverHome', {useNewUrlParser: true, useUnifiedTopology: true })


// Init an Exconspress App.
const app = express();
const PORT = 8080;


// use all controllers(APIs) here && // Use your dependencies here
app.get('/', (req, res) => {
   res.status(200).json({
      status: 'Server Run successfully'
   });
});
// Start Server here
app.listen(PORT, () => {
   console.log('Server is running on port 8080!');
});
//base de donnée mongoDB

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/back',Router);
const upload = multer();
app.use(upload.array());


   