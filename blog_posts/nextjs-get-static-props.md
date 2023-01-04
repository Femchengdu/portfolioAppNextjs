---
title: "Next.js getStaticProps"
date: "2023-01-04"
---

## Example using Next.js to get a list of blog posts

> Is a function that runs some server side logic and returns a object with a props property to a React component.

> The mandatory props property is where the data you want to consume in the react component is stored.

```js
export function getStaticProps() {
  const blogPosts = getSortedPostsData();
  return {
    props: { blogPosts: blogPosts },
  };
}
```

> Though the getStaticProps function is colocated in the front end React componnent that renders the information in the browser Next.js runs the code in the getStaticProps function only on the server.

```js
...

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

...

```

> This leads to a great convenience for the developer as it removes the need to jump between files or worse between repositories to manage code related to this feature which is to present on a blog index with a list of blog posts.
