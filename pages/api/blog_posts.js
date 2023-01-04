import { getSortedPostsData } from "../../utils/blog";

export default function handler(req, res) {
  const blogPosts = getSortedPostsData();
  res.status(200).json({ blogPosts });
}
