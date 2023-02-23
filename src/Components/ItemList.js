import React,{useState} from 'react';
import {ReactComponent as IconCheck} from '../img/icon-check.svg'

import '../App.scss'

const ItemList = ({item}) => {
      const [crossed, changeCrossed] = useState(false)
      return ( 
      <li className='input-container-list crisis' >
            <div className='checkbox-container'>
                  <div className='circle-container'  onClick={()=>changeCrossed(true)} >
                        <IconCheck viewBox='0 0 10 10'/>
                        
                  </div>
            </div>
            <div className='input-container-inner'>
                  <span>{item.actitivyNote}</span>
            </div>
      </li>

       );
}
 
export default ItemList;