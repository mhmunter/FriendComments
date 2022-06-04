const { Schema, model, Types } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const ReactionSchema = new Schema(
    {
        reactionId: {
            type: Schema.Types.ObjectId,
            default: () => new Types.ObjectId()
          },
          reactionBody: {
            type: String,
            required: true,
            type: Number,
            max: 128
          },
          username: {
            type: String,
            required: true
          },
          createdAt: {
            type: Date,
            default: Date.now,
            get: createdAtVal => dateFormat(createdAtVal)
          }
})




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
reactions: [ReactionSchema]
 },
 {
    toJSON: {
      virtuals: true,
      getters: true
    },
    id: false
  }
);
ThoughtSchema.virtual('reactionCount').get(function() {
    return this.reactionCount.length;
  });

  const Thought = model('Thought', ThoughtSchema);

module.exports = Thought;