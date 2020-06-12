import React from 'react';
import DigitalDisplay from './DigitalDisplay/DigitalDisplay';
import StatusBars from './StatusBars/StatusBars';
import ChartDisplay from './ChartsDisplay/ChartsDisplay';
import ThreeD from './ThreeD/ThreeD';
import Battery from './Battery/Battery';
// import './DigitalDisplay/DigitalDisplay.css';
import '../App.css';
const SideBar = (props) => {
    console.log("rotate prop in SideBar : ",props.rotate);
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
            <ChartDisplay  speeds={props.speeds}/>
          </div>
        </div>
  
       <div className="row justify-content-center tdSettings outer">
        <div className="col-12">
          <ThreeD rotate={window.connected}/>
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