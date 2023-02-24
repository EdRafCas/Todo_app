import React,{useState} from 'react';
import {ReactComponent as IconCheck} from '../img/icon-check.svg'
import IconCheck2 from '../img/icon-check.svg'

import '../App.scss'

const ItemList = ({item, existingList, changeExistingList}) => {
      const [mutableItem, changeMutableItem] = useState(item)

      const classes = mutableItem.completed ? "input-container-list crisis completed" :"input-container-list crisis ";

      const classesTask = mutableItem.completed ? "input-container-inner span-crossed" :"input-container-inner span-not-crossed";

      const handleComplete =()=>{
            changeMutableItem({...item, completed:!mutableItem.completed});
            const updateExistingList = existingList.map((listed)=>
            listed.id === item.id ? {...listed, completed: !listed.completed} : listed
            )
            changeExistingList(updateExistingList);
      }

      const checkIcon = mutableItem.completed? (
            <img src={IconCheck2} alt={"Completed"}/>
      ) : ("");



      return ( 
      <li className={classes} >
            <div className='checkbox-container'>
                  <div className='circle-container'  onClick={handleComplete} >
                  {checkIcon}
                        {/* <IconCheck viewBox='0 0 10 10'/> */}
                        
                  </div>
            </div>
            <div className={classesTask}>
                  <span>{item.actitivyNote}</span>
                  {item.completed?
                  <span>true</span>
                  :
                  <span>false</span>
                  }
            </div>
      </li>

       );
}
 
export default ItemList;