import React from "react";
import Link from "next/link";

const BlogPosts = ({ blogPosts }) => {
  const blog_posts = blogPosts.length
    ? blogPosts
    : [{ id: 1, title: "First blog post" }];
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

export const returnBaseUrl = () => {
  let base_url =
    process.env.NODE_ENV === "development"
      ? "http://localhost:3000"
      : "https://lionfish-app-aooyz.ondigitalocean.app"; // https://v2ds.netlify.app

  return base_url;
};

export async function getStaticProps() {
  const res = await fetch(`${returnBaseUrl()}/api/blog_posts`);
  const { blogPosts } = await res.json();
  return {
    props: { blogPosts },
  };
}

export default BlogPosts;
