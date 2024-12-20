import React, { useEffect, useState } from 'react'
import { Button, Card, CardActions, CardContent, CircularProgress, Container, TextField, Typography } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { registerUser } from '../features/auth/authSlice';


const Register = () => {

  const [formData, setFormData] = useState({
    name : '',
    email : '',
    password : '',
    password2 : '',
  });

  // Transferring this form data to Slice using dispatch
  const dispatch = useDispatch();

  // Destructuring form data for Input
  const {name, email, password, password2} = formData;

  // Handle Input : Change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name] : e.target.value,
    })
  };


  // Handle Form : Submit
  const handleSubmit = (e) => {
    e.preventDefault();
    //
    if(password !== password2){
      toast.error('Password not match!!')
      // console.log('password not match')
    }

    dispatch(registerUser(formData));
    // console.log(formData)
  }


    const navigate = useNavigate();

    const {isLoading, isError, isSuccess, message, user} = useSelector((state) => state.auth);

    useEffect(() => {

        if(user || isSuccess){
            navigate('/')
        }

        if(isError || message){
            toast.error(message)
        }
    }, [isError, message,user,isSuccess]);
    
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
        <Typography variant='h3' align='center' color="primary" sx={{padding: '100px 0px'}}>Register</Typography>
        <Card sx={{padding:'20px 20px'}}>
            <CardContent>
                <form onSubmit={handleSubmit}>
                    <TextField sx={{margin : '10px 0px'}} variant='outlined' label='Enter Name' type='text' fullWidth name='name' value={name} onChange={handleChange}/> 
                   <TextField sx={{margin : '10px 0px'}} variant='outlined' label='Enter Email' type='email' fullWidth name='email' value={email} onChange={handleChange}/> 
                   <TextField sx={{margin : '10px 0px'}} variant='outlined' label='Enter Password' type='password' fullWidth name='password' value={password} onChange={handleChange}/>
                   <TextField sx={{margin : '10px 0px'}} variant='outlined' label='Confirm Password' type='password' fullWidth name='password2' value={password2} onChange={handleChange}/> 
                  <Button type='submit' variant='contained' sx={{margin : '0px 10px'}} >Register</Button>
                </form>
            </CardContent>
        </Card>
    </Container>
</>
  )
}

export default Register