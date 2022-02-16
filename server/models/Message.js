const mongoose = require("mongoose");
// change the setup
const { Schema } = mongoose;

const messageSchema = new Schema(
  {
    conversationId: {
      type: String,
    },
    sender: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    text: {
      type: String,
    },
  },
  { timestamps: true }
);

const Message = mongoose.model("Message", messageSchema);

module.exports = Message;
