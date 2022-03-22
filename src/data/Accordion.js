import { Add, Remove } from '@material-ui/icons'
import React from 'react'
import { useState } from 'react'

const Accordion = ({title, children}) => {

    const [collapse, setCollapse] = useState(false)

  return (
    <div className='accordion-container'>

        <div className='accordion-title'  onClick={() => setCollapse(!collapse)}>
            <div className='accordion-name'>
                <span>
                    {title}
                </span>
            </div>
            
            {
                collapse ?
               <Remove />  :  <Add />
            }
              
        </div>

        <div className='accordion-child'  style={{ display: collapse ? "block" : "none" }}>
            {children}

        </div>
    </div>
  )
}

export default Accordion