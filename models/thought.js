const mongoose = require('mongoose');
const ReactionSchema = require('./reaction');
const formatDate = require('../utils/date');

const thoughtSchema = new mongoose.Schema({
  thoughtText: {
    type: String,
    required: true,
    minlength: 1,
    maxlength: 280
  },
  createdAt: {
    type: Date,
    default: Date.now,
    get: (createdAtVal) => formatDate(createdAtVal),
  },
  username: {
    type: String,
    required: true
  },
  reactions: [ReactionSchema]
},
  {
    toJSON: { virtuals: true, getters: true },
    id: false,
  });

thoughtSchema.virtual('reactionCount').get(function () {
  return this.reactions.length;
});

const Thought = mongoose.model('Thought', thoughtSchema);

module.exports = Thought;