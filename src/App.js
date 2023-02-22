import React,{useState} from 'react';
import './App.scss';
import HeaderLight from './img/bg-desktop-light.jpg'
import {ReactComponent as IconCheck} from './img/icon-check.svg';
import {ReactComponent as IconMoon} from './img/icon-moon.svg';
import {ReactComponent as IconSun} from './img/icon-sun.svg';
import { v4 as uuidv4 } from 'uuid';




const App = () => {

  const List =[
    {id:1,
      actitivyNote:"Camping",
      status:"incomplete"
    }
    ,
    {id:2,
      actitivyNote:"Living",
      status:"incomplete"
    }
    ,
    {id:3,
      actitivyNote:"Dying",
      status:"incomplete"
    }
  ]

  const [typing, changeTyping] = useState("")
  const [existingtList, changeExistingList] = useState([])
  const [mode, changeMode] = useState("dark")


  const handleChange = (e) =>{
    if(e.target.name==="task_box"){
      changeTyping(e.target.value)
    }
  };

  const handleAdd = (e) =>{
    e.preventDefault();

    if(typing.length > 0){
      const newList = [...existingtList]
      
      newList.push(
        {
          id:uuidv4(),
          actitivyNote:typing,
          status:"incomplete"
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
  <div className='container'>
    <div className='headerimageLight' >
      <img src={HeaderLight}alt='header daylight mode'/>
    </div>
    <div className='block'>
      <div className='header-top'>
        <span>TODO</span>
        <div className ='iconContainer'>
          {
            mode === "light"?
            <IconSun onClick={()=>changeMode("dark")} viewBox='0 0 26 26'/>
            :
            <IconMoon  onClick={()=>changeMode("light")} viewBox='0 0 26 26'/>
          }
        </div>
      </div>
      <div className='input-container'>
        <div className='checkbox-container'>
          <div className='circle-container'></div>
        </div>
        <div className='input-container-inner'>
         <input
          name="task_box"
          id="task_box"
          onChange={handleChange}
          maxLength={40}
          type="text"
          placeholder="Leave us your message here"
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
      {existingtList.map((item, index)=>{
        return(
          <li className='input-container-list crisis' key={item.id}>
            <div className='checkbox-container'>
              <div className='circle-container'></div>
            </div>
            <div className='input-container-inner'>
              <span>{item.actitivyNote}</span>
            </div>
          </li>
        )
      })}
        <div className='input-container-list' >
          <div className='input-container-counter'>
            <span>{existingtList.length} items left</span>
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
