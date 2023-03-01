import React,{useState, useEffect} from 'react';
import './App.scss';
import HeaderLight from './img/bg-desktop-light.jpg'
import HeaderDark from './img/bg-desktop-dark.jpg'

import {ReactComponent as IconMoon} from './img/icon-moon.svg';
import {ReactComponent as IconSun} from './img/icon-sun.svg';
import { v4 as uuidv4 } from 'uuid';
import ItemList from './Components/ItemList';




const App = () => {


  const List =[
    {id:1,
      actitivyNote:"Camping",
      completed:true
    }
    ,
    {id:2,
      actitivyNote:"Living",
      completed:false
    }
    ,
    {id:3,
      actitivyNote:"Dying",
      completed:false
    }
  ]

  const [typing, changeTyping] = useState("")
  const [existingList, changeExistingList] = useState(List)
  const [mode, changeMode] = useState("light")
  const [countItemsLeft, changeCountItemsLeft] = useState(0)

  useEffect(()=>{
    const nonCompletedItems = existingList.filter((item) => !item.completed);
    changeCountItemsLeft(nonCompletedItems.length)
    /* console.log(nonCompletedItems.length) */

  }, [existingList])

  const handleChange = (e) =>{
    if(e.target.name==="task_box"){
      changeTyping(e.target.value)
    }
  };

  const handleAdd = (e) =>{
    e.preventDefault();

    if(typing.length > 0){
      const newList = [...existingList]
      
      newList.push(
        {
          id:uuidv4(),
          actitivyNote:typing,
          completed:false
        }
      );
      changeExistingList(newList)
      changeTyping('')
    }

  }

  const handleKeypress = (e) => {
    if (e.key === "Enter") {
      handleAdd(e);
    }
  };
 

  return (
  <div className={mode === "light" ?'container light-theme':'container dark-theme'}>
    <div className='headerimageLight' >
    {
      mode === "light"?
      <img src={HeaderLight}alt='header light mode'/>
      :
      <img src={HeaderDark}alt='header dark mode'/>
    }
    </div>
    <div className='block'>
      <div className='header-top'>
        <span>TODO</span>
        <div className ='iconContainer'>
          {
            mode === "light"?
            <IconMoon  onClick={()=>changeMode("dark")} viewBox='0 0 26 26'/>
            :
            <IconSun onClick={()=>changeMode("light")} viewBox='0 0 26 26'/>
            
          }
        </div>
      </div>
      <div className='input-container'>
      <div className='checkbox-container'>
      <div className='circle-container'>
            <span className='checkbox'>            </span>  
      </div>
            </div>
        <div className='input-container-inner'>
         <input
          name="task_box"
          id="task_box"
          onChange={handleChange}
          maxLength={40}
          type="text"
          placeholder="Create a new Task"
          value={typing}
          onKeyPress={handleKeypress}/>
          <button 
            type="submit"
            onClick={handleAdd}>
            sent
          </button>
        </div>
      </div>
      <ul className='tasklist-container'>
      {existingList.length >1 ?
        <>
          {existingList.map((item, index)=>{
              return(
              /*  <li className='input-container-list crisis' key={item.id}>
                  <div className='checkbox-container'>
                    <div className='circle-container'></div>
                  </div>
                  <div className='input-container-inner'>
                    <span>{item.actitivyNote}</span>
                  </div>
                </li> */
                <ItemList 
                existingList={existingList} 
                changeExistingList={changeExistingList}
                item={item} 
                key={item.id}/>
              )
            })
          }
        </>
      :
      <p className="text">
        There is nothing here
      </p>
      }
        <div className='input-container-list' >
          <div className='input-container-counter'>
            <span>{countItemsLeft} items left</span>
            <span> All </span>
            <span> Active</span>
            <span> Completed</span>
            <span> Clear Completed</span>
          </div>
        </div>
      </ul>

      
    </div>
  </div>
  );
}

export default App;
