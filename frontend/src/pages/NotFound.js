import { Box, Button } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import Footer from '../component/Footer'
import Navbar from '../component/Navbar'

const NotFound = () => {
    return (
        <>
            <Navbar />
            <Box sx={{ height: '81vh', display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>

                <h1>Page not found!</h1>
                <Button variant="contained" color="warning" ><Link to={'/'} style={{ color: "white" }}>Back To Home</Link></Button>
            </Box>
            <Footer />
        </>
    )
}

export default NotFound