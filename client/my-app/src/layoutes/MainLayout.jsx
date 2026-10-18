import React from 'react'
import Navbar from '../components/common/Navbar'
import Box from '@mui/material/Box'
import Category from '../components/common/Category'
import Footer from '../components/common/Footer'
import { Stack } from '@mui/material'

  

const MainLayout = ({children}) => {

  return (
    <Stack sx={{minHeight:'100vh'}}>
        <Navbar />
        <Box sx={{width:'100%',maxWidth:'90rem', marginInline:'auto',flex:1}}>
          <Category />
      
       {children}
  
        </Box>
        <Footer />
      
    </Stack>
  )
}

export default MainLayout
