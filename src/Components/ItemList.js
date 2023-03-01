import React,{useState} from 'react';
import {ReactComponent as IconCheck} from '../img/icon-check.svg'
import IconCheck2 from '../img/icon-check.svg'

import '../App.scss'

const ItemList = ({item, existingList, changeExistingList}) => {
      const [mutableList, changeMutableList] = useState(item)

      const classes = mutableList.completed ? "input-container-list crisis completed" :"input-container-list crisis ";

      const classesTask = mutableList.completed ? "input-container-inner span-crossed" :"input-container-inner span-not-crossed";

      const handleComplete =()=>{
            changeMutableList({...mutableList, completed:!mutableList.completed});
            const updateExistingList = existingList.map((listed)=>
            listed.id === item.id ? {...listed, completed: !listed.completed} : listed
            )
            changeExistingList(updateExistingList);
            /* console.log(updateExistingList) */
      }

      const checkIcon = mutableList.completed? (
            <img src={IconCheck2} alt={"Completed"}/>
      ) : ("");



      return ( 
      <li className={classes} >
            <div className='checkbox-container'>
                  <div className='circle-container'  onClick={handleComplete} >
                        <span className='checkbox'>
                        {checkIcon}
                        </span>  
                  </div>
            </div>
            <div className={classesTask}>
                  <span>{item.actitivyNote}</span>
                  
            </div>
      </li>

       );
}
 
export default ItemList;