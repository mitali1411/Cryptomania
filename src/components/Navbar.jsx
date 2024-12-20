import { AppBar, Badge, Button, Toolbar, Typography } from '@mui/material'
import LoginIcon from '@mui/icons-material/Login';
import LogoutIcon from '@mui/icons-material/Logout';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import React from 'react'
import {Link} from 'react-router-dom'
import ContrastIcon from '@mui/icons-material/Contrast';
import { useDispatch, useSelector } from 'react-redux';
import { logOutUser } from '../features/auth/authSlice';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';


const Navbar = () => {

  const {user} = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const {cartItems} = useSelector((state) => state.cart)

  const handleLogout = () => {
    dispatch(logOutUser())
  }

  return (
        <AppBar color='primary'>
            <Toolbar>
            <Typography sx={{ flexGrow: 1 }} variant="h6"><Link to={"/"}>Crypto Mania</Link></Typography>
            
              {
                user ? (
                  <>
                    <Badge badgeContent={cartItems.length} color='warning' sx={{margin:'0px 20px'}}>
                      <Button variant='contained' size='small' color='secondary' endIcon={<ShoppingCartIcon/>} ><Link to={'/cart'}>Cart</Link></Button>
                    </Badge>

                    <Button variant='contained' size='small' endIcon={<LogoutIcon/>} color='error' onClick={handleLogout}> <Link to={''}>Log Out</Link></Button>
                  </>
                ) : (
                  <>
                    <Button variant='contained' size='small'color='secondary' endIcon={<LoginIcon/>}><Link to={'/login'}>Login</Link></Button>
                    <Button variant='contained' size='small' sx={{margin : '0px 10px'}} color='warning' endIcon={<PersonAddIcon/>}><Link to={'/register'}>Register</Link></Button>

                  </>
                )
              }    
              {/* <ContrastIcon color='warning' sx={{margin: '0px 10px'}} /> */}
            </Toolbar>
        </AppBar>
  )
}

export default Navbar