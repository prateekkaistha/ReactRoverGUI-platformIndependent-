import React from 'react';
import './DigitalDisplay.css';

const DigitalDisplay = (props) => {

        return(
            <div className="container outer myFont">
                <div className="row ">
                    <div className="col-6 meraBlue">
                        <p>Heading  </p>
                    </div>
                    <div className="col-6 ">
                        <p>180 deg</p>
                    </div>
                </div>
                <div className="row ">
                    <div className="col-6 meraBlue">
                        <p>Latitude  </p>
                    </div>
                    <div className="col-6">
                        <p>12.821098</p>
                    </div>
                </div>
                <div className="row ">
                    <div className="col-6 meraBlue">
                        <p>Longitude </p>
                    </div>
                    <div className="col-6">
                        <p>80.082356</p>
                    </div>
                </div>
                <div className="row ">
                    <div className="col-6 meraBlue">
                        <p>Altitude </p>
                    </div>
                    <div className="col-6">
                        <p>15.024 m</p>
                    </div>
                </div>
            </div>
        );
};

export default DigitalDisplay;