import React from 'react'
import Feed from './Feed'

const Home = ({ posts }) => {
    return (
        <main className='mt-3 overflow-y-auto' style={{maxHeight: '80vh'}}>
            {posts.length ? (
                <Feed posts={posts}/>
            ) : (
                <p className='text-center'>No posts to display...</p>
            )}
        </main>
    )
}

export default Home