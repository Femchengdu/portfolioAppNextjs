import React from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'

const BlogPost = () => {
  const router = useRouter()
  const { id }= router.query
  return (
    <div>
      <h1>Blog: {id} </h1>
      <Link href="/blog">
        Blog posts
      </Link>
    </div>
  )
}


export default BlogPost;
