const mongoose = require("mongoose");
// change the setup
const { Schema } = mongoose;
const connection = mongoose.createConnection()

const messageSchema = new Schema(
  {
    conversationId: {
      type: String,
    },
    sender: {
      type: String,
    },
    text: {
      type: String,
    },
  },
  { timestamps: true }
);

const Message= connection.model('Message', messageSchema);

module.exports = Message;