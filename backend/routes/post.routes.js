import express from "express";
import { protectedRoute } from "../middleware/protectRoute.js";
import {
  createPost,
  deletePost,
  commentOnPost,
  likeUnlikePost,
  getLikedPosts,
  getAllPosts,
  getFollowingPosts,
  getAllUserPosts,
} from "../controllers/post.controller.js";

const router = express.Router();

router.get("/allposts", protectedRoute, getAllPosts);
router.get("/following", protectedRoute, getFollowingPosts);
router.get("/likes/:id", protectedRoute, getLikedPosts);
router.get("/user/:username", protectedRoute, getAllUserPosts);
router.post("/create", protectedRoute, createPost);
router.post("/comment/:id", protectedRoute, commentOnPost);
router.post("/likes/:id", protectedRoute, likeUnlikePost);
router.delete("/:id", protectedRoute, deletePost);
export default router;
