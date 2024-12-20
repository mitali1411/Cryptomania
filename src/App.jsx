import React from 'react'
import Navbar from './components/Navbar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ThemeProvider, createTheme } from '@mui/material'
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import CoinPage from './pages/CoinPage';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Cart from './pages/Cart';


const App = () => {

  const theme = createTheme({
    palette : {
      primary : {
        main : '#012677'
      },
      secondary : {
        main : '#005bc5'
      },
      error : {
        main : '#d31900'
      },
      warning : {
        main : '#ffbc11'
      },
      success: {
        main : '#09c184'
      }
    }
  })

  return (
    <ThemeProvider theme={theme}>
    <Router>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/register' element={<Register/>} />
        <Route path="/coin/:id" element={<CoinPage/>} />
        <Route path="/cart" element={<Cart/>} />
        
      </Routes>
      <ToastContainer/>
    </Router>
    </ThemeProvider>
  )
}

export default App