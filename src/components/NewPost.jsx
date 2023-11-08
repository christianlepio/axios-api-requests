import React from 'react'

const NewPost = ({ 
    handleSubmit, 
    postTitle, 
    setPostTitle, 
    postBody, 
    setPostBody 
}) => {

    return (
        <main className='mt-3'>
            <h2 className='text-center mb-3'>New Post</h2>
            <form className='mt-5 mx-4' onSubmit={handleSubmit}>
                <div className="row justify-content-center mb-3">
                    <div className="col-md-6">
                        <label htmlFor="titleInput" className="form-label">Title</label>
                        <input 
                            type="text" 
                            className="form-control" 
                            id="titleInput" 
                            placeholder="Title" 
                            value={postTitle}
                            onChange={(e) => setPostTitle(e.target.value)} 
                            required
                        />
                    </div>
                </div>
                <div className="row justify-content-center mb-3">
                    <div className="col-md-6">
                        <label htmlFor="bodyInput" className="form-label">Post</label>
                        <textarea 
                            className="form-control" 
                            id="bodyInput" 
                            rows="4"
                            value={postBody}
                            onChange={(e) => setPostBody(e.target.value)} 
                            required
                        ></textarea>
                    </div>
                </div>
                <div className="row justify-content-center mb-3">
                    <div className="col-md-6">
                        <button type='submit' className='btn btn-success'>Submit</button>
                    </div>
                </div>
            </form>
        </main>
    )
}

export default NewPost