import React from 'react'
import Pizzablock from '../COMPONENTS/Pizzablock'
import { Grid } from '@mui/material'
import { Container } from '@mui/system'
import '../STYLES/Home.css'


const Home = ({ blocks }) =>  {
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
          {blocks && blocks.map(block => (
            <Grid item key={block.id} md={4} sm={6} xs={12}><Pizzablock key={block.id} {...block} blocks={blocks}/></Grid>
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