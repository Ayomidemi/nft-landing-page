import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import React from 'react'
import { useLayoutEffect } from 'react';
import { useRef } from 'react'
import Accordion from '../data/Accordion'

const FAQ = () => {

  const ref = useRef(null);
  gsap.registerPlugin(ScrollTrigger);
  useLayoutEffect(() => {
    let element = ref.current;

    ScrollTrigger.create({
      trigger: element,
      start: 'top top',
      end: 'bottom top',
      pin: true,
      pinSpacing:false,
      scrub: true,
      // markers: true,
    })
  
    return () => {
      ScrollTrigger.kill();
      
    };
  }, [])

  return (
    <div className='faq' id='faq' ref={ref}>

      <div className="typewriter-road">
        <h1>FAQ</h1>
      </div>

      <div className="faq-container">
        <div className="faq-box">
          < Accordion title='WHAT ARE THE HEISENBERGS?'>
          The Heisenbergs Club is a private collection of NFTs—unique digital collectibles. The Heisenbergs are stored as ERC-721 tokens on the Ethereum blockchain and hosted on IPFS.
            </ Accordion>

            < Accordion title='WHAT IS THE METAVERSE?'>
            A metaverse is a network of 3D virtual worlds focused on social connection. In futurism and science fiction, it is often described as a hypothetical iteration of the Internet as a single, universal virtual world that is facilitated by the use of virtual and augmented reality headsets.
            </ Accordion>

            < Accordion title='WHY DO WE NEED ROYALTIES?'>
            The amount of royalties was fixed at 5% to finance the Heisenbergs Club's projects. We have the ambition to organize multiple events around the world in order to strengthen the community and build a network of entrepreneurs and investors with the same mindset and common interests.
            </ Accordion>
        </div>

        <div className="faq-box">
        < Accordion title='WHERE CAN I VIEW MY NFTS?'>
        Once minted or bought simply connect to your OpenSea account to view your NFTs.
            </ Accordion>

            < Accordion title='HOW CAN I USE MY NFT?'>
            You will be able to use your NFT as an avatar in the Metaverse and our future video game. Holding also means that you are part of an exclusive network of investors and entrepreneurs.
            </ Accordion>

            < Accordion title='WHAT IS A FUSION NFT?'>
            A Fusion NFT™️ is a proprietary NFT format developed by Heisenbergs that provides a gold standard of rights and title of ownership of a digital asset, securely underpinned by smart contracts and legal documents stored on the blockchain, that are connected to a physical asset.
            </ Accordion>
        </div>
                
      </div>
      </div>
  )
}

export default FAQ