const mongoose = require('mongoose');
const formatDate = require('../utils/date');

const reactionSchema = new mongoose.Schema({
  reactionId: {
    type: mongoose.Schema.Types.ObjectId,
    default: () => new mongoose.Types.ObjectId()
  },
  reactionBody: {
    type: String,
    required: true,
    maxlength: 280
  },
  username: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now,
    get: (createdAtVal) => formatDate(createdAtVal),
  }
},{ _id: false },

{toJSON: {getters: true}});

module.exports = reactionSchema;
