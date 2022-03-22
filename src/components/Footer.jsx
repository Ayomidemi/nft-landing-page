import { Facebook, Instagram, LinkedIn, Twitter } from '@material-ui/icons'
import React from 'react'
import Banner from '../data/Banner'

const Footer = () => {

  const scrollTo = (id) => {
    let element = document.getElementById(id)

    element.scrollIntoView ({
      behavior: 'smooth',
      block: 'start',
      inline: 'nearest',
    })
  }


  return (
    <div className='footer'>
      <Banner />

      <div className='footer-container'>
        
        <div className='left-footer'>

        <div className='logo'>
        <a href='#Home'> 
        <h1>H.</h1>
        </a>
      </div>

      <div className='footer-icons'>
        <a href='http://facebook.com' target='_blank' rel='noopener noreferrer'>
          <Facebook />
        </a>

        <a href='http://instagram.com' target='_blank' rel='noopener noreferrer'>
          <Instagram />
        </a>

        <a href='http://twitter.com' target='_blank' rel='noopener noreferrer'>
          <Twitter />
        </a>

        <a href='http://linkedin.com' target='_blank' rel='noopener noreferrer'>
          <LinkedIn />
        </a>     
      </div>
</div>

      <div className='footer-items'>
        <div className='footer-item'  onClick={() => scrollTo('home')} > Home </div>
        <div className='footer-item'  onClick={() => scrollTo('about')}> About </div>
        <div className='footer-item'  onClick={() => scrollTo('roadmap')}> Roadmap </div>
        <div className='footer-item'  onClick={() => scrollTo('showcase')}> Showcase </div>
        <div className='footer-item'  onClick={() => scrollTo('team')}> Team </div>
        <div className='footer-item'  onClick={() => scrollTo('faq')}> Faq </div>    
        </div>

      </div>

      <div className='bottom'>
        <span>
          &copy; {new Date().getFullYear()}  The Heisenbergs Club. All rights reserved.
        </span>

        <span>
          Made with &#10084; by <a href="http://github.com/Ayomidemi"> <b> Peace Adeniji</b> </a>
        </span>
      </div>

      </div>
  )
}

export default Footer