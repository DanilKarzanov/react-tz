import React from 'react'
import Pizzablock from '../components/Pizzablock'
import { Search } from '../components/Search'
import { Grid } from '@mui/material'
import { Container } from '@mui/system'
import '../styles/Home.css'
import { useSelector } from 'react-redux'
import { Filter } from '../components/Filter'

const Home = ({ items }) =>  {
  window.onscroll = () => {
    if (window.scrollY > 300) {
      document.querySelector('.scrollup').classList.add('visible')
    }
  }

  const scrollToTop = () => {
    window.scrollTo(0, 0)
  }

  const searchvalue = useSelector(state => state.searchvalue.searchvalue)
  const activeCategory = useSelector(state => state.activeCategory.activeCategory)
  
  return (
    <div>
      <Container>
        <div className='top__wrapper'>
          <Filter/>
          <Search/>
        </div><hr className='delimiter'/>
        <Grid container>
          {items && items.filter(item => {
            if (activeCategory === 0) {
              if (item.all === 'true') {
                return true
              } else {
                return false
              }
            } else if (activeCategory === 1) {
              if (item.nomeat === 'true') {
                return true
              } else {
                return false
              }
            } else {
              if (item.classical === 'true') {
                return true
              } else {
                return false
              }
            }
          }).filter(item => {
            if (item.name.toLowerCase().includes(searchvalue.toLowerCase())) {
              return true
            } else {
              return false
            }
          }).map(item => (
            <Grid item key={item.id} md={4} sm={6} xs={12}><Pizzablock key={item.id} item={item} {...item}/></Grid>
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
