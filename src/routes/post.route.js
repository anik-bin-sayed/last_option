const express = require("express");
const {
  handlePost,
  handleGetPosts,
  handleGetPostById,
  handleDeletePost,
  handleUpdatePost,
} = require("../controller/post.controller.js");
const authMiddleware = require("../middlewares/auth.middleware");
const postRouter = express.Router();

postRouter.post("/create", authMiddleware, handlePost);
postRouter.get("/", authMiddleware, handleGetPosts);
postRouter.get("/:id", handleGetPostById);
postRouter.delete("/delete/:id", handleDeletePost);
postRouter.put("/update/:id", handleUpdatePost);

module.exports = postRouter;
