const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const ThoughtSchema = new Schema({
  username: {
    type: String
  },
  thoughtText: {
    type: String
  },
  createdAt: {
    type: Date,
    default: Date.now,
    get: createdAtVal => dateFormat(createdAtVal)
  },
  reactions: [

  ],
});

const Thought = model('Thought', ThoughtSchema);

module.exports = Thought;

