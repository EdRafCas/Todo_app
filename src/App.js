import './App.scss';
import HeaderLight from './img/bg-desktop-light.jpg'

const App = () => {
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
          0
          </div>
          <div className='input-container-2'>
            currently typing
          </div>
        <div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
