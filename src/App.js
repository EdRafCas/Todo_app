import React,{useState} from 'react';
import './App.scss';
import HeaderLight from './img/bg-desktop-light.jpg'
import {ReactComponent as IconCheck} from './img/icon-check.svg';




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

  const [typing, changeTyping] = useState("type here")
  const [existingtList, changeExistingList] = useState(List)

  const handleChange = (e) =>{
    if(e.target.name==="task_box"){
      changeTyping(e.target.value)
    }
  };

  const handleAdd = (e) =>{

    const newList = [existingtList.push(
      {id:4,
        actitivyNote:typing,
        status:"incomplete"
      }
    )]
    changeExistingList(newList)
    changeTyping('')

  }
 

  return (
  <div className='container'>
    <div className='headerimageLight' >
      <img src={HeaderLight}alt='header daylight mode'/>
    </div>
    <div className='block'>
      <div className='header-top'>
        <span>TODO</span>
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
          value={typing}/>
          <button 
            type="button"
            onClick={handleAdd}>
            sent
          </button>
        </div>
      </div>

      <ul className='tasklist-container'>
      {existingtList.map((item, index)=>{
        return(
          <li className='input-container-list' key={item.id}>
            <div className='checkbox-container'>
              <div className='circle-container'></div>
            </div>
            <div className='input-container-inner'>
              <span>{item.actitivyNote}</span>
            </div>
          </li>
        )
      })}
      </ul>

      <div className='input-container-list'>
        <div className='checkbox-container'>
          <div className='circle-container'></div>
        </div>
        <div className='input-container-inner'>
          <span>EndMan</span>
        </div>
      </div>
    </div>
  </div>
  );
}

export default App;
