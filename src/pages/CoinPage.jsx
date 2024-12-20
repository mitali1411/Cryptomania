import { Button, Card, CardActions, CardContent, CardMedia, CircularProgress, Container, Typography } from '@mui/material'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom'
import {fetchSingleCoin } from '../features/coin/coinSlice';
import LanguageIcon from '@mui/icons-material/Language';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { add } from "../features/cart/cartSlice";

const CoinPage = () => {
  const {id} = useParams();
  const {coin, isLoading, isError} = useSelector((state) => state.coins);
  const dispatch = useDispatch();

  const handleAdd = (coin) => {
    dispatch(add(coin));
  }

  useEffect(()=>{
    dispatch(fetchSingleCoin(id))
  },[]);

  if(!coin || isLoading) {
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
    <Container sx={{padding: '80px 0px'}}>
        <Typography variant='h3' align='center' color="primary">{coin?.name} Coin Details</Typography>
        <Card sx={{margin: '50px 0px'}}>
            <CardMedia sx={{height : 300}} image={coin?.large}/>
            <CardContent>
                <Typography variant='h5'>Coin Symbol : {coin?.symbol}</Typography>
                <Typography variant='h5'>Coin Price : $ {coin?.market_data.current_price.usd}</Typography>
                <Typography variant='body' dangerouslySetInnerHTML={{ __html: coin?.description.en }}></Typography>
            </CardContent>

            <CardActions>
              <Link to={coin?.links.homepage[0]}>
                <Button endIcon={<LanguageIcon/>} variant='contained'>Visit official website</Button>
              </Link>
              <Button endIcon={<AddShoppingCartIcon/>} variant='contained' sx={{margin : '0px 10px'}} onClick={()=>handleAdd(coin)}>Add to Cart</Button>
            </CardActions>
        </Card>
    </Container>
  )
}

export default CoinPage