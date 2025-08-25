import React from 'react'
import { Outlet, Link } from 'react-router-dom'
import './layout.scss'

const Layout = () => {
    return (
        <div className='app-layout'>
                        
            <main>
                <Outlet />
            </main>
            
        </div>
    )
}

export default Layout
