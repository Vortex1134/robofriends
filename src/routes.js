import React from 'react'
import Layout from '@/components/layout'
import Home from '@/pages/home'

const routes = [
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                path: '/',
                element: <Home />,
            },
        ],
    },
]

export default routes
