import React from 'react'
import { Link } from 'react-router-dom'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container';
import RegisterForm from '../forms/registerForm'

export default function Register() {
  return (
    <Container maxWidth="md">
        <Box sx={{height: '80vh', borderRadius: 3, border: 1, borderColor:'info', padding: 2, backgroundColor: 'white' }}>
          <RegisterForm/>
          <Box sx={{display:'flex', alignItems:'center', justifyContent:'center'}}>
        <p>Already have an account? Login <Link to='/login'>here</Link></p>
        
        </Box>
        </Box>
    </Container>
  )
}