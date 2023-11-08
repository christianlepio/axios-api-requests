import React from 'react'
import { Link } from 'react-router-dom'

const Nav = ({ search, setSearch }) => {
    return (
        <header>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <Link to='/react-router_v2/' className="navbar-brand mb-0 h1">
                        Blogs
                    </Link>

                    <button 
                        className="navbar-toggler mb-3" 
                        type="button" 
                        data-bs-toggle="collapse" 
                        data-bs-target="#navbarSupportedContent" 
                        aria-controls="navbarSupportedContent" 
                        aria-expanded="false" 
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div 
                        className="collapse navbar-collapse" 
                        id="navbarSupportedContent"
                    >
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link to='/react-router_v2/' className="nav-link active" aria-current="page">
                                    Home
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/react-router_v2/about' className="nav-link active" aria-current="page">
                                    About
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/react-router_v2/post' className="nav-link active" aria-current="page">
                                    Post
                                </Link>
                            </li>
                        </ul>                        
                    </div>
                </div>

                <div className='d-flex flex-grow-1 justify-content-center'>
                    <form onSubmit={(e) => e.preventDefault()} className="flex-grow-1 mx-2" role="search">
                        <input 
                            className="form-control" 
                            type="search" 
                            placeholder="Search posts" 
                            aria-label="Search" 
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                        />
                    </form>
                </div>
            </nav>
        </header>
    )
}

export default Nav