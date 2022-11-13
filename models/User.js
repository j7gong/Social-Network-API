const { Schema, model, Types } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const FriendSchema = new Schema({
   // set custom id to avoid confusion with parent user_id
   friendId: {
      type: Schema.Types.ObjectId,
      default: () => new Types.ObjectId()
    },
  
    friendName: {
      type: String
    },

    createdAt: {
      type: Date,
      default: Date.now,
      get: createdAtVal => dateFormat(createdAtVal)
    }
}, 
{
  toJSON: {
    getters: true
  }
});

const UserSchema = new Schema(
   {
   username: {
    type: String
   }, 

   email: {
    type: String,
    trim: true,
    required: 'Email address is required', 
    match: /.+\@.+\..+/
   }, 

   friends: [FriendSchema],

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

// get total count of friends on retrieval
UserSchema.virtual('friendCount').get(function() {
   // return this.friends.length;
   return this.friends.length;
});

const User = model('User', UserSchema);

module.exports = User;