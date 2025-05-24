const Post = require("../models/post.model");
const bcrypt = require("bcryptjs");

const handlePost = async (req, res) => {
  try {
    const { title, post } = req.body;

    const userId = req.userId;

    if (!post) {
      return res.status(400).json({ message: "Post is required" });
    }

    if (!userId) {
      return res.status(400).json({ message: "User ID is required" });
    }

    const newPost = await Post.create({
      title,
      post,
      author: userId,
    });

    if (!newPost) {
      return res.status(500).json({ message: "Error creating post" });
    }

    return res.status(201).json({
      message: "Post created successfully",
      post: newPost,
    });
  } catch (error) {
    return res.status(500).json({ message: "Internal server error" });
  }
};

const handleGetPosts = async (req, res) => {
  const userId = req.userId;
  try {
    const posts = await Post.find({ author: userId })
      .sort({ createdAt: -1 })
      .populate({ path: "author", select: "name email" });

    return res.status(200).json({
      success: true,
      message: "Posts retrieved successfully",
      posts,
    });
  } catch (error) {
    return res
      .status(500)
      .json({ success: false, message: "Internal server error" });
  }
};

const handleGetPostById = async (req, res) => {
  const postId = req.params.id;
  try {
    const post = await Post.findById(postId).populate({
      path: "author",
      select: "name email",
    });

    if (!post) {
      return res
        .status(404)
        .json({ success: false, message: "Post not found" });
    }

    return res.status(200).json({
      success: true,
      message: "Post retrieved successfully",
      post,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};

const handleDeletePost = async (req, res) => {
  const { id } = req.params;
  try {
    const post = await Post.findById(id);
    if (!post) {
      return res.status(404).json({ message: "Post not found" });
    }
    await Post.findByIdAndDelete(id);
    res
      .status(200)
      .json({ success: true, message: "Post deleted successfully" });
  } catch (error) {
    res.status(500).json({ success: false, message: "Internal server error" });
    console.log(error);
  }
};

const handleUpdatePost = async (req, res) => {
  const { id } = req.params;
  const { title, post: postContent } = req.body;

  try {
    const existingPost = await Post.findById(id);

    if (!existingPost) {
      return res.status(404).json({ message: "Post not found" });
    }

    existingPost.title = title;
    existingPost.post = postContent;

    await existingPost.save();
  } catch (error) {
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};

module.exports = {
  handlePost,
  handleGetPosts,
  handleGetPostById,
  handleDeletePost,
  handleUpdatePost,
};
