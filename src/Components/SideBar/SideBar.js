import React from 'react';
import DigitalDisplay from './DigitalDisplay/DigitalDisplay';
import StatusBars from './StatusBars/StatusBars';
import ChartDisplay from './ChartsDisplay/ChartsDisplay';
import ThreeD from './ThreeD/ThreeD';
import Battery from './Battery/Battery';
// import './DigitalDisplay/DigitalDisplay.css';
import '../../App.css';
const SideBar = () => {
    return(
        <div className="container-fluid">
            
        <div className="row">
          <div className="col-12">
            <DigitalDisplay/>
          </div>
        </div>

        <div className="row">
          <div className="col-12">
            <StatusBars/>
          </div>
        </div>
        
        <div className="row justify-content-center outer">
          <div className="col-12">
            <ChartDisplay/>
          </div>
        </div>
  
       <div className="row justify-content-center tdSettings outer">
        <div className="col-12">
          <ThreeD rotate={false}/>
        </div>
       </div>         

       <div className="row justify-content-center outer">
        <div className="col-12 meraBlue ">
          <Battery />
        </div>
       </div>
    </div>
    );
} 

export default SideBar;