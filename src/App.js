import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Standings from './views/Standings';
import Games from './views/Games';
import Game from './views/Game';
import  Snackbar from './Components/Snackbar';
import NavBar from './Components/NavBar';
import { Box } from '@mui/system';
import Home from './views/Home';
import Register from './views/Register';
import Login from './views/Login';

function App() {
  return (
    <div className="App">
      <Snackbar />
      <NavBar>
        <Box sx={{minHeight: '90vh'}}>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/register" element={<Register/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/games" element={<Games/>}/>         
          </Routes>
        </Box>
      </NavBar>  
    </div>
  );
}

export default App;

