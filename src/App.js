import './App.scss';
import HeaderLight from './img/bg-desktop-light.jpg'
import {ReactComponent as IconCheck} from './img/icon-check.svg';

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
            <div className='circle-container'>
            </div>
          </div>
          <div className='input-container-2'>
            <span>Currently typing</span>
          </div>
        <div>

          </div>
        </div>
        <div className='task-container'>
          <div className='input-container'>
            <div className='checkbox-container'>
              <div className='circle-container'>
              </div>
            </div>
            <div className='input-container-2'>
              <span>Currently typing</span>
          </div>
          <div>
        </div>
        </div>
        </div>
        <div className='task-container'>
          <div className='input-container'>
            <div className='checkbox-container'>
              <div className='circle-container'>
              </div>
            </div>
            <div className='input-container-2'>
              <span>Currently typing</span>
          </div>
          <div>
        </div>
        </div>
        </div>
        <div className='task-container'>
          <div className='input-container'>
            <div className='checkbox-container'>
              <div className='circle-container'>
              </div>
            </div>
            <div className='input-container-2'>
              <span>Currently typing</span>
          </div>
          <div>
        </div>
        </div>
        </div>
        <div className='task-container'>
          <div className='input-container'>
            <div className='checkbox-container'>
              <div className='circle-container'>
              </div>
            </div>
            <div className='input-container-2'>
              <span>Currently typing</span>
          </div>
          <div>
        </div>
        </div>
        </div>
        <div className='task-container'>
          <div className='input-container'>
            <div className='checkbox-container'>
              <div className='circle-container'>
              </div>
            </div>
            <div className='input-container-2'>
              <span>Currently typing</span>
          </div>
          <div>
        </div>
        </div>
        </div>
      </div>
    </div>
  );
}

export default App;
