const mongoose = require('mongoose');

const commentList = new mongoose.Schema({
    commentId: Number,
    commentData: String,
    createdAt: String,
    score: Number,
    replies: Array,
    user_id: [{type: mongoose.Schema.Types.ObjectId, ref: 'UserModel'}]
}, { collection : 'comment' });

const userList = new mongoose.Schema({
    user_id : String,
    user_name: String,
    image: Array
}, { collection: 'users' })

const CommentModel = mongoose.model("comment", commentList);
const UserModel = mongoose.model("user", userList);

CommentModel.find().populate("user_id")
module.exports = { CommentModel, UserModel };