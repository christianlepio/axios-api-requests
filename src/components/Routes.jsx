import React, { useEffect, useState } from 'react'
import Home from './Home'
import NewPost from './NewPost'
import PostPage from './PostPage'
import EditPost from './EditPost'
import About from './About'
import Missing from './Missing'
import Layout from './Layout'
import { Routes, Route, useNavigate } from 'react-router-dom'
import { format } from 'date-fns'
import api from '../api/posts'

const AppRoutes = () => {
    const [posts, setPosts] = useState([]) //posts container
    const [search, setSearch] = useState('')
    const [searchResults, setSearchResults] = useState([])
    //for submitting new blogs
    const [postTitle, setPostTitle] = useState('')
    const [postBody, setPostBody] = useState('')
    //for updating blogs
    const [editTitle, setEditTitle] = useState('')
    const [editBody, setEditBody] = useState('')
    //to navigate what page to land after a certain process
    const navigate = useNavigate() 

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                //fetching data using axios get
                                                //url here
                const response = await api.get('/posts')
                setPosts(response.data)
            } catch (err) {
                if (err.response) {
                    //not in 200 response status code
                    console.log(err.response.data)
                    console.log(err.response.status)
                    console.log(err.response.headers)
                } else {
                    console.log(`Error: ${err.message}`)
                }
            }
        }

        //call function for fetching posts
        fetchPosts()
    }, [])

    useEffect(() => {
        //filter data using search box
        const filteredResults = posts.filter(post => 
            post.body.toLowerCase().includes(search.toLowerCase()) || post.title.toLowerCase().includes(search.toLowerCase())
        )

        setSearchResults(filteredResults.reverse())
    }, [posts, search])

    const handleSubmit = async (e) => {
        e.preventDefault()

        const id = posts.length ? posts[posts.length - 1].id + 1 : 1
        const dateTime = format(new Date(), 'MMMM dd, yyyy pp')
        const newPost = {
            id, 
            title: postTitle, 
            datetime: dateTime, 
            body: postBody
        }

        try {
            //add new blog using axios post
                                            //url here  //new blogs here
            const response = await api.post('/posts', newPost)
            
            const allPosts = [...posts, response.data]

            setPosts(allPosts)
            setPostTitle('')
            setPostBody('')
            navigate('/react-router_v2/')
        } catch (err) {
            console.log(`Error: ${err.message}`)
        }
    }

    const handleEdit = async (id) => {
        const dateTime = format(new Date(), 'MMMM dd, yyyy pp')
        const updatedPost = { 
            id, 
            title: editTitle, 
            datetime: dateTime, 
            body: editBody 
        }

        try {
            //edit blog using axios put
                                            //url w/params here //updated post here
            const response = await api.put(`/posts/${id}`, updatedPost)

            setPosts(posts.map(post => post.id === id ? { ...response.data } : post))
            setEditTitle('')
            setEditBody('')
            navigate('/react-router_v2/')
        } catch (err) {
            console.log(`Error: ${err.message}`)
        }
    }

    const handleDelete = async (id) => {        
        try {
            //delete blog using axios delete
                            //url here  //id parameter here
            await api.delete(`/posts/${id}`)
            const postsList = posts.filter(post => post.id !== id)
            setPosts(postsList)
            navigate('/react-router_v2/') //back to index page after post deletion
        } catch (err) {
            console.log(`Error: ${err.message}`)
        }
    }

    return (
        <>
            <Routes>
                <Route path='/react-router_v2/' element={<Layout 
                    search={search}
                    setSearch={setSearch}
                />}
                >
                    //index keyword means this is the default page of Layout.
                    <Route index element={<Home 
                        posts={searchResults}
                    />}
                    /> 

                    //nested routing
                    //index keyword means this is the default page of Layout.
                    <Route path='/react-router_v2/post'> 

                        <Route index element={<NewPost 
                            handleSubmit={handleSubmit}
                            postTitle={postTitle}
                            setPostTitle={setPostTitle}
                            postBody={postBody}
                            setPostBody={setPostBody}
                        />} 
                        />

                        <Route path='edit/:id' element={<EditPost
                            posts={posts}
                            handleEdit={handleEdit}
                            editTitle={editTitle}
                            setEditTitle={setEditTitle}
                            editBody={editBody}
                            setEditBody={setEditBody}
                        />} 
                        />

                        <Route path=':id' element={<PostPage 
                            posts={posts}
                            handleDelete={handleDelete}
                        />} 
                        />
                    </Route>

                    <Route path='/react-router_v2/about' element={<About />} />

                    <Route path='/react-router_v2/*' element={<Missing />} />
                </Route>
            </Routes> 
        </>
    )
}

export default AppRoutes