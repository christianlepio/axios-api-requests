import React from 'react'
import { Outlet } from 'react-router-dom'
import Nav from './Nav'
import Footer from './Footer'

const Layout = ({ search, setSearch }) => {
    return (
        <>
            <Nav 
                search={search}
                setSearch={setSearch}
            />
            <Outlet />
            <Footer />
        </>
    )
}

export default Layout