import React from 'react'
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import LoginForm from '../forms/loginForm';



export default function Login() {
    return (
      <Container maxWidth="md">
        <Box sx={{height: '80vh', borderRadius: 3, border: 1, borderColor:'info', padding: 2, backgroundColor: 'white' }}>
          <LoginForm/>
        </Box>
    </Container>
    )
  }



