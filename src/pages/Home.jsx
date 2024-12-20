import { CircularProgress, Container, Grid, LinearProgress, Typography } from '@mui/material'
import React, { useEffect } from 'react'
import CoinCard from '../components/CoinCard'
import { useDispatch, useSelector } from 'react-redux'
import { fetchTrending } from '../features/coin/coinSlice'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  const {user} = useSelector((state) => state.auth);
  const { coins, isLoading, isError } = useSelector((state) => state.coins);

  useEffect(() => {

    if(!user) {
      navigate('/login')
    }

    dispatch(fetchTrending());
  }, []);

  if (isLoading) {
    return (
      <Container sx={{ padding: "80px 0px" }} align='center'>
        <CircularProgress/>
      </Container>
    );
  }

  if (isError) {
    return (
      <Container sx={{ padding: "80px 0px" }}>
        <Typography
          sx={{ margin: "20px 0px" }}
          variant="h5"
          align="center"
          color="error"
        >
          Something Went Wrong...
        </Typography>
      </Container>
    );
  }



  return (
    <>
      <Container sx={{ padding: "80px 0px" }}>
        <Typography variant='h4' align='center' color="primary">Trending Crypto Coins</Typography>
     
        <Grid container spacing={3} sx={{margin:'40px 0px',}}>
      {coins.map((coin) => (
        <CoinCard coin={coin.item} key={coin.item.coin_id} />
      ))}
      </Grid>
     
      </Container>
      
    </>
  )
}

export default Home