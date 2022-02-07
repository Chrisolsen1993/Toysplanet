const mongoose = require("mongoose");
// change the setup
const { Schema } = mongoose;

const conversationSchema = new Schema(
  {
    members: {
      type: Array,
    },
  },
  { timestamps: true }
);

const Conversation = mongoose.model('Message', conversationSchema);
module.exports = Conversation;