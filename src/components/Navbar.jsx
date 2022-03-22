import React from 'react'
import { useState } from 'react'
import '../styles/sass/Navbar.scss'


const Navbar = () => {

  const [click, setClick] = useState(false);

  const scrollTo = (id) => {
    let element = document.getElementById(id)

    element.scrollIntoView ({
      behavior: 'smooth',
      block: 'start',
      inline: 'nearest',
    })

    setClick(!click);
  }

  return (
    <div className='navbar'>
      <div className='nav'>
      <div className='logo'>
        <a href='#Home'> 
        <h1>H.</h1>
        </a>
      </div>

      <div className='hamburger' onClick={() => setClick(!click)} 
      style={{ transform: click ? "translate(-50%) rotate(90deg)" : "translate(-50%) rotate(0)" }}>
        &nbsp;
      </div>

      <div className='menu'>
        <ul className='men'  style={{ transform: click ? "translateY(0)" : "translateY(100%)" }}>
           <li onClick={() => scrollTo('home')}> Home </li> 
           <li onClick={() => scrollTo('about')}> About </li> 
           <li onClick={() => scrollTo('roadmap')}> Roadmap </li> 
           <li onClick={() => scrollTo('showcase')}> Showcase </li> 
           <li onClick={() => scrollTo('team')}> Team </li> 
           <li onClick={() => scrollTo('faq')}> Faq </li> 
           <li className='mobile'><a href='https://google.com'> <button className='btn'> Connect Wallet</button> </a></li>
        </ul>
      </div>
      
      <div className='desktop'>
        <a href='https://google.com'> <button className='btn'> Connect Wallet</button> </a>
      </div>
      
</div>
    </div>
  )
}

export default Navbar