import { Button, Card, CardActions, CardContent, CircularProgress, Container, TextField, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify';
import { loginUser } from '../features/auth/authSlice';


const Login = () => {

    const {isError, isLoading, isSuccess, user, message} = useSelector((state)=> state.auth)
    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(()=>{
        if(user){
            navigate('/')
        }

        if(isError || message){
            toast.error(message);
        }
    }, [isError, message, user, isSuccess]);


    const [formData, setFormData] = useState({
      email : '',
      password : ''
    });
  
    const {email, password} = formData;
  
    const handleChange = (e) => {
      setFormData({
        ...formData,
        [e.target.name] : e.target.value,
      })
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      // console.log(email, password);
      dispatch(loginUser(formData))
    }

    if(isLoading) {
        return (
          <Container align='center' sx={{padding : '80px 0px'}}>
            <CircularProgress/>
          </Container>
        )
      };
    
      if(isError){
        return(
          <Container sx={{padding : '80px 0px'}}>
            <Typography align='center' variant='h3' color='error'>Something Went Wrong...</Typography>
          </Container>
        )
      }



  return (
    <>
        <Container>
            <Typography variant='h3' align='center' color="primary" sx={{padding: '100px 0px'}}>Login</Typography>
            <Card sx={{padding:'20px 20px'}}>
                <CardContent>
                    <form onSubmit={handleSubmit}>
                       <TextField sx={{margin : '10px 0px'}} variant='outlined' label='Enter Email' type='email' fullWidth value={email} name='email' onChange={handleChange}/> 
                       <TextField sx={{margin : '10px 0px'}} variant='outlined' label='Enter Password' type='password' fullWidth  value={password} name='password' onChange={handleChange}/> 
                       <Button type='submit' variant='contained' sx={{margin : '0px 10px'}} >Login</Button>
                    </form>
                </CardContent>
            </Card>
        </Container>
    </>
  )
}

export default Login