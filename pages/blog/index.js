import React from "react";
import Link from "next/link";
import { getSortedPostsData } from "../../utils/blog.js";

const BlogPosts = ({ blogPosts }) => {
  const blog_posts = blogPosts;
  return (
    <div>
      <h1>Blog</h1>

      {blog_posts.map((post) => (
        <div key={post.id}>
          <Link href="/blog/[id]" as={`/blog/${post.id}`}>
            <strong>{post.title}</strong>
          </Link>
        </div>
      ))}
    </div>
  );
};

export function getStaticProps() {
  const blogPosts = getSortedPostsData();
  return {
    props: { blogPosts: blogPosts },
  };
}

export default BlogPosts;
