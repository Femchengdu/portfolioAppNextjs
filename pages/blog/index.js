import React from "react";
import Link from "next/link";

const BlogPosts = () => {
  const blog_posts = [{ id: 1, title: "First blog post" }];
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

export default BlogPosts;
