import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";
import "swiper/css/pagination";
import "swiper/css/navigation";


import {Pagination, Navigation, Autoplay, EffectCards } from "swiper";

import img1 from '../img/pro1.jpg'
import img2 from '../img/pro2.jpg'
import img3 from '../img/pro3.jpg'
import img4 from '../img/pro7.jpg'
import img5 from '../img/pro5.jpg'
import img6 from '../img/pro1.jpg'
import img7 from '../img/pro7.jpg'
import img8 from '../img/pro8.jpg'


const About = () => {
  return (
    <div className='about' id='about'>
      <div className='contained'>
        <div className="box">
          <div className='carousel'>

          <Swiper
          autoplay={{
            delay:2000,
            disableOnInteraction:false,
          }}
          pagination={{
            type:'fraction',
          }}
          scrollbar={{
            draggable:true
          }}
          navigation={false}
        effect={"cards"}
        grabCursor={true}
        modules={[Pagination, Navigation, Autoplay, EffectCards]}
        className="mySwiper"
      >
        <SwiperSlide><img src={img1} alt='Heisenberg' /> </SwiperSlide>
        <SwiperSlide><img src={img2} alt='Heisenberg' /></SwiperSlide>
        <SwiperSlide><img src={img3} alt='Heisenberg' /></SwiperSlide>
        <SwiperSlide><img src={img4} alt='Heisenberg' /></SwiperSlide>
        <SwiperSlide><img src={img5} alt='Heisenberg' /></SwiperSlide>
        <SwiperSlide><img src={img6} alt='Heisenberg' /></SwiperSlide>
        <SwiperSlide><img src={img7} alt='Heisenberg' /></SwiperSlide>
        <SwiperSlide><img src={img8} alt='Heisenberg' /></SwiperSlide>
        
      </Swiper>
          </div>
          
        </div>

        <div className="box">
         <div className='typwriter'>
           <h2> Welcome To <span> The Heisenbergs </span> Club</h2>
         </div>
         <div className='subtitl'>
               <h4>The HEISENBERGS is a private collection of NFTs—unique digital collectibles.
               The Heisenbergs are stored as ERC-721 tokens on the Ethereum blockchain and hosted on IPFS.
                  </h4>
               </div>
            <div className='subtitle-light'>
              <p>
              With more than 200+ hand drawn traits, each NFT is unique and comes 
              with a membership to an exclusive group of successful investors.
               Join an ambitious ever-growing community with multiple benefits and utilities.
              </p>
            </div>

            <button className='buton'>JOIN OUR DISCORD</button>
        </div>

      </div>
    </div>
  )
}

export default About