import React from 'react'
import Typewriter from 'typewriter-effect';
import gif from '../img/vid2.gif'
import round from '../img/rounded.png'
import { ArrowDownward } from '@material-ui/icons';
import Navbar from './Navbar';

const Home = () => {
  return (
    <div className='home' id='home'>

      <Navbar />
      <div className='container'>

        <div className='box'>
          <div className='typewriter'>
            <h2>Discover, collect and sell extraordinary 
            <Typewriter
            options={{
              autoStart:true,
              loop: true,
            }}
  onInit={(typewriter) => {
    typewriter.typeString('<span class="typewrite-1"> NFTs. </span>')
    .pauseFor(2000)
    .deleteAll()
    .typeString('<span class="typewrite-2"> Trending Collections. </span>')
    .pauseFor(2000)
    .deleteAll()
    .typeString('<span class="typewrite-3">  Incredible Characters! </span>')
    .pauseFor(2000)
    .deleteAll()
      .start()
  }}
/>
    </h2>
             </div>   

             <div className='subtitle'>
               <h3>Tired of boring cartoons? Check this out. </h3>
               </div> 
               
               <button className='buttn'> Explore</button>

        </div>
         
        <div className='box'>
          <div className='video-cont'>
            <img src={gif} alt='loading...' />
          </div>
        </div>

        <div className='rounded'>
          <div className='circle'>
           <ArrowDownward />
            </div>
          <img src={round} alt='NFT' />
        </div>

      </div>  
    </div>
  )
}

export default Home