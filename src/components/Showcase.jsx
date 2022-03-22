import React from 'react'

import img1 from '../img/cartoon (1).svg'
import img2 from '../img/cartoon (2).svg'
import img3 from '../img/cartoon (3).svg'
import img4 from '../img/cartoon (4).svg'
import img5 from '../img/cartoon (5).svg'
import img6 from '../img/cartoon (6).svg'
import img7 from '../img/cartoon (7).svg'
import img8 from '../img/cartoon (8).svg'
import img9 from '../img/cartoon (9).svg'
import img10 from '../img/cartoon (10).svg'
import eth from '../img/Ethereum.svg'
import { useRef } from 'react'



const  NftItem = ({img, number=0, price=0, passRef}) => {

  let play = (e) => {
    passRef.current.style.animationPlayState = 'running';
  }
  let pause = (e) => {
    passRef.current.style.animationPlayState = 'paused';
  }

  return (
    <div className="image-cont" onMouseOver={e => pause(e)}  onMouseOut={e => play(e)} >
      <img src={img} alt=" The Heisenbergs" />

      <div className="details">

        <div>
          <span>Heisenbergs</span> <br />
          <h1>#{number}</h1>
        </div>

        <div>
          <span>Price</span> 

          <div className="prices">
            <img src={eth} alt="ETH" />
             <h1>{Number (price).toFixed(1)}</h1>
          </div>
         
        </div>

      </div>
    </div>
  )
}

const Showcase = () => {

  const Row1Ref = useRef(null)
  const Row2Ref = useRef(null)


  return (
    <div className='showcase' id='showcase'>

      <div className="row1" ref={Row1Ref}>
       <NftItem img={img1} number={456} price={1.5}  passRef={Row1Ref} />
       <NftItem img={img2} number={366} price={2.9}  passRef={Row1Ref} />
       <NftItem img={img3} number={223} price={0.8}  passRef={Row1Ref} />
       <NftItem img={img4} number={476} price={3.3}  passRef={Row1Ref} />
       <NftItem img={img5} number={264} price={1.4}  passRef={Row1Ref} />

      </div>

      <div className="row2" ref={Row2Ref}>
      <NftItem img={img6} number={178} price={0.5}  passRef={Row2Ref} />
      <NftItem img={img7} number={357} price={1.3}  passRef={Row2Ref} />
      <NftItem img={img8} number={438} price={2.4}  passRef={Row2Ref} />
      <NftItem img={img9} number={167} price={3.6}  passRef={Row2Ref} />
      <NftItem img={img10} number={456} price={1.9}  passRef={Row2Ref} />

      </div>

    </div>
  )
}

export default Showcase