const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

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
  reactions: [

  ],
});

const Thought = model('Thought', ThoughtSchema);

module.exports = Thought;

