import React from 'react'
import ConfettiComponent from '../data/Confetti'


import img1 from '../img/cartoon (1).svg'
import img2 from '../img/cartoon (2).svg'
import img3 from '../img/cartoon (3).svg'
import img4 from '../img/cartoon (4).svg'
import img5 from '../img/cartoon (5).svg'
import img6 from '../img/cartoon (6).svg'
import img7 from '../img/cartoon (7).svg'
import img8 from '../img/cartoon (8).svg'


const TeamMembers = ({img, name='', position=''}) => {

  return (
    <div className="show-item">

      <div className="image-contain">  <img src={img} alt={name} />  </div> 
      <div className="names">  {name}  </div>
      <div className="position">  {position}  </div>

    </div>
  )
}

const Team = () => {
  return (
    
    <div className='team' id='team'>

      <ConfettiComponent />
      
      <div className="typewriter-road">
        <h1>Team</h1>
      </div>

      <div className="container-show">
        <TeamMembers img={img2} name='Heisenberg' position='founder'/>
        <TeamMembers img={img1} name='skyblaze' position='Co-founder'/>
        <TeamMembers img={img3} name='gremlin' position='director'/>
        <TeamMembers img={img4} name='praquine' position='manager'/>
        <TeamMembers img={img5} name='benson' position='artist'/>
        <TeamMembers img={img6} name='ape king' position='graphics designer'/>
        <TeamMembers img={img7} name='Pease' position='web3 developer'/>
        <TeamMembers img={img8} name='megnum' position='blockchain developer'/>
      </div>

     </div>
  )
}

export default Team