import './App.scss';
import HeaderLight from './img/bg-desktop-light.jpg'

const App = () => {
  return (
    <div className='container'>
      <div className='headerimageLight' >
        <img src={HeaderLight}alt='header daylight mode'/>
      </div>
      {/* <div className='white-block'></div> */}
      <div className='block'></div>
      <div className='block'></div>
    </div>
  );
}

export default App;
