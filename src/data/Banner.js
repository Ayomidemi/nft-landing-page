import React from 'react'


import img1 from '../img/cartoon (1).svg'
import img2 from '../img/cartoon (2).svg'
import img3 from '../img/cartoon (3).svg'
import img4 from '../img/cartoon (4).svg'
import img5 from '../img/cartoon (5).svg'
import img6 from '../img/cartoon (6).svg'

const Banner = () => {
  return (
    <div className='banner'>

       <div className='footer-image'>
           <img src={img1} alt='The Heisenbergs' />
           <img src={img2} alt='The Heisenbergs' />
           <img src={img3} alt='The Heisenbergs' />
           <img src={img4} alt='The Heisenbergs' />
           <img src={img5} alt='The Heisenbergs' />
           <img src={img6} alt='The Heisenbergs' />
       </div>

       <div className='typewriter-footer'>
           <h1>Join the <br /> heisenbergs club</h1>
       </div>

       <div className='footer-button'>
           <button className='buttn' style={{fontSize: '20px', background: '#ff69b4', position: 'relative', boxShadow:'#fffafa 0px 2px 2px'}} link='#'> Join Now</button>
       </div>
       

        </div>
  )
}

export default Banner