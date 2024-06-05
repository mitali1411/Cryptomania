import { Button, Card, CardActions, CardContent, CardMedia, Grid, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
// import image1 from '../assets/react.svg'


const CoinCard = ({ coin }) => {
  return (

        <Grid item xs={6} sm={4} md={3} lg={2}>
            <Card >
                <CardMedia sx={{height : 180}} image={coin.large}/>
                <CardContent>
                {/* <Typography variant='h6' noWrap>{coin.coin_id}</Typography> */}
                    <Typography variant='h6' noWrap>{coin.name}</Typography>
                </CardContent>
                <CardActions>
                <Link to={`/coin/${coin.id}`}><Button size='small' variant='contained'>Learn More</Button></Link>
                </CardActions>
            </Card>
        </Grid>
    
  );
};

export default CoinCard