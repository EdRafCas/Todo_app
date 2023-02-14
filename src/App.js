import './App.scss';
import HeaderLight from './img/bg-desktop-light.jpg'
import {ReactComponent as IconCheck} from './img/icon-check.svg';



const App = () => {

  const Activities =[
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
          <span>Currently typing</span>
        </div>
      </div>
      <div className='tasklist-container'>
      {Activities.map((Act, index)=>{
        return(
          <div className='input-container-list' key={Act.id}>
            <div className='checkbox-container'>
              <div className='circle-container'></div>
            </div>
            <div className='input-container-inner'>
              <span>{Act.actitivyNote}</span>
            </div>
          </div>
        )
      })}
       
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
  </div>
  );
}

export default App;
