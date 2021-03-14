const mongoose = require('mongoose');
const {Schema} = mongoose;

const UsersPost = function () {
    // create users schema
    this.schema = new mongoose.Schema({
        img: {type: String},
        email: {type: String},
        desc: {type: String}, //description ==> hashtag
        like: {type: Number, default: 0},
        date: {type: Date, default: Date.now},
        //imageUrl: "/images/my/path/to/image/imagename-id.jpg"
    });
    // bind schema with database
    this.postDB = mongoose.model('UsersPost', this.schema);
};

UsersPost.prototype.addPost = function (img, email, desc, callback) {
    const self = this;
    const post = new self.postDB({img: img, email: email, desc : desc});
    post.save().then(function () {
        callback({
            state: true,
            data: []
        })
    }).catch(function () {
        callback({
            state: false,
            data: []
        })
    });
};

UsersPost.prototype.getAllPost = function (email, callback) {
    const self = this;
    self.postDB.find({email: email}, function (err, docs) {
        if (err) {
            callback({
                state: false,
                data: err
            })
        } else {
            if (docs.length > 0) {
                callback({
                    state: true,
                    data: docs
                })
            } else {
                callback({
                    state: false,
                    data: []
                })
            }
        }
    })
};

UsersPost.prototype.likePost = function (postid, callback) {
    const self = this;

    self.postDB.findOneAndUpdate({id: postid}, {$inc: {like: 1}}, {new: true},
        function (err, response) {
            if (err) {
                callback({
                    state: false,
                    data: []
                })
            } else {
                callback({
                    state: true,
                    data: response
                })
            }
        });

};

UsersPost.prototype.deletePost = function (postid, email, callback) {
    const self = this;
    self.postDB.find({email: email,id: postid}, function (err, docs) {
        if(docs.length){
            self.postDB.deleteOne({email: email,id: postid}, function(err, resp){
                callback({
                    state: true,
                    data: resp
                })
            })
        }
        else {
            callback({
                state: false,
                data: []
            })
        }
    })
}

module.exports = UsersPost;




