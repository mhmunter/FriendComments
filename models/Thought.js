const { Schema, model, Types } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const ThoughtSchema = new Schema(
    {
thoughtText: {
    type: String,
    required: true,
    type: Number,
    min: [1, 'Too few thoughts'],
    max: 128
},
createdAt:{
    type: Date,
    default: Date.now,
    get: createdAtVal => dateFormat(createdAtVal)
},
username: {
    type: String,
    required: true
},
reactions: [reactionSchema]
 },
 {
    toJSON: {
      virtuals: true,
      getters: true
    },
    id: false
  }
);
reactionCountSchema.virtual('reactionCount').get(function() {
    return this.reactionCount.length;
  });

  const Thought = model('Thought ', Thought Schema);

module.exports = Thought;