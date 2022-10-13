import React from 'react'
import Pizzablock from '../components/Pizzablock'
import { Grid } from '@mui/material'
import { Container } from '@mui/system'
import '../styles/Home.css'


const Home = ({ items }) =>  {
  window.onscroll = () => {
    if (window.scrollY > 300) {
      document.querySelector('.scrollup').classList.add('visible')
    }
  }

  const scrollToTop = () => {
    window.scrollTo(0, 0)
  }

  return (
    <div>
      <Container>
        <Grid container>
          {items && items.map(item => (
            <Grid item key={item.id} md={4} sm={6} xs={12}><Pizzablock key={item.id} {...item} items={items}/></Grid>
          ))}
        </Grid>
      </Container>
      <div className='scrollup' onClick={scrollToTop}>
        <span className='scrollup_arrow'>&#8593;</span>
      </div>
    </div>
  )
}

export default Home