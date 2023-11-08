import React, { useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'

const EditPost = ({ 
    posts,
    handleEdit, 
    editTitle, 
    setEditTitle, 
    editBody, 
    setEditBody
 }) => {
    //get id parameter from url
    const { id } = useParams()
    const post = posts.find(post => post.id.toString() === id)

    useEffect(() => {
        if (post) {
            setEditTitle(post.title)
            setEditBody(post.body)
        }
    }, [post, setEditTitle, setEditBody])

    return (
        <main className='mt-3 px-2'>
            {editTitle ? 
                <>
                    <h2 className='text-center mb-3'>Edit Post</h2>
                    <form className='mt-5 mx-4' onSubmit={(e) => e.preventDefault()}>
                        <div className="row justify-content-center mb-3">
                            <div className="col-md-6">
                                <label htmlFor="titleInput" className="form-label">Title</label>
                                <input 
                                    type="text" 
                                    className="form-control" 
                                    id="editTitleInput" 
                                    placeholder="Title" 
                                    value={editTitle}
                                    onChange={(e) => setEditTitle(e.target.value)} 
                                    required
                                />
                            </div>
                        </div>
                        <div className="row justify-content-center mb-3">
                            <div className="col-md-6">
                                <label htmlFor="bodyInput" className="form-label">Post</label>
                                <textarea 
                                    className="form-control" 
                                    id="editBodyInput" 
                                    rows="4"
                                    value={editBody}
                                    onChange={(e) => setEditBody(e.target.value)} 
                                    required
                                ></textarea>
                            </div>
                        </div>
                        <div className="row justify-content-center mb-3">
                            <div className="col-md-6">
                                <button 
                                    type='submit' 
                                    className='btn btn-success'
                                    onClick={() => handleEdit(post.id)}
                                >
                                    Submit
                                </button>
                            </div>
                        </div>
                    </form>
                </> 
                : 
                <article className='p-2 m-2 border rounded-3'>
                    <h2>Post not found!</h2>
                    <p>Well, that's disappointing</p>
                    <p>
                        <Link to='/react-router_v2/'>
                            Back to home page
                        </Link>
                    </p>
                </article>
            }
        </main>
    )
}

export default EditPost