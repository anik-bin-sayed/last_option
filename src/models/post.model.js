const { model, Schema } = require("mongoose");
const User = require("./userModel");

const postSchema = new Schema(
  {
    title: {
      type: String,
      trim: true,
      required: true,
    },
    post: {
      type: String,
      trim: true,
      required: true,
    },
    author: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    date: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true }
);

const Post = model("Post", postSchema);

module.exports = Post;
