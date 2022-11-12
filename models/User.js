const { Schema, model, default: mongoose } = require('mongoose');

const UserSchema = new Schema({
   username: {
    type: String
   }, 

   email: {
    type: String,
    trim: true,
    required: 'Email address is required', 
    match: /.+\@.+\..+/,
    unique: 'This email address already exist!'
   }, 

   friends: []
});

const User = model('User', UserSchema);

module.exports = User;