const { Schema, model } = require('mongoose');

const UserSchema = new Schema(
   {
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

   friends: [],

   thoughts: [
      {
         type: Schema.Types.ObjectId,
         ref: 'Thought'
      }
   ]
},
   {
      toJSON: {
         virtuals: true,
         getters: true
      },
      // prevents virtuals from creating duplicate of _id as `id`
      id: false
   }
);

// get total count of thoughts on retrieval
UserSchema.virtual('thoughtCount').get(function() {
   // return this.thoughts.length;
   return this.thoughts.reduce((total, thought) => total + thought.reactions.length + 1, 0);
});

// get total count of friends on retrieval
UserSchema.virtual('friendCount').get(function() {
   // return this.friends.length;
   return this.friends.length;
});

const User = model('User', UserSchema);

module.exports = User;