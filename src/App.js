import logo from './logo.svg';
import './App.css';
// import climber1 from './components/img_climber1/climber1';
import 'bootstrap/dist/css/bootstrap.min.css';

import CollapsibleExample from './components/NavbarClimb.js';

function App() {
  return (
    <div>
      <CollapsibleExample />


          {/* <img src={logo} className="App-logo" alt="logo" /> */}

          <div className="container">
            <div className='row'>
              <div className='col-3'>
                <img className="img-fluid" src={require("/home/filgood/code/Fil-good/react/belgianclimbers/src/images/IMG_20240710_074832440.jpg")} alt={"belgianClimber"} />
              </div>
              <div className='col-3'>
                <img className="img-fluid" src={require("/home/filgood/code/Fil-good/react/belgianclimbers/src/images/IMG_20240710_093805643 bucce arancia start.jpg")} alt={"belgianClimber1"} />
              </div>
            </div>
          </div>

    </div>

  );
}

export default App;
