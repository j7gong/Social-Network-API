const { Schema, model, Types } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const ReactionSchema = new Schema({
  // set custom id to avoid confusion with parent thought_id
  reactionId: {
    type: Schema.Types.ObjectId,
    default: () => new Types.ObjectId()
  },

  reactionText: {
    type: String
  }, 

  writtenBy: {
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
}
);

const ThoughtSchema = new Schema({
  username: {
    type: String,
    required: true
  },
  thoughtText: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now,
    get: createdAtVal => dateFormat(createdAtVal)
  },
  reactions: [ReactionSchema],
},
{
  toJSON: {
    virtuals: true,
    getters: true
  },
  id: false
});

ThoughtSchema.virtual('reactionCount').get(function() {
  return this.reactions.length;
});

const Thought = model('Thought', ThoughtSchema);

module.exports = Thought;

