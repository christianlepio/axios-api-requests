import React from 'react'
import { Link } from 'react-router-dom'

const Post = ({ post }) => {
    return (
        <article className='p-2 m-2 border rounded-3'>
            <Link to={`post/${post.id}`} className='text-decoration-none text-secondary'>
                <h2>{post.title}</h2>
                <p>{post.datetime}</p>
            </Link>
            <p>
                {post.body.length <= 25 
                    ? post.body
                    : `${post.body.slice(0, 25)}...`
                }
            </p>
        </article>
    )
}

export default Post