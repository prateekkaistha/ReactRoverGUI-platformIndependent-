import React from 'react';
import ControlPannel from './ControlPannel/ControlPannel';
import '../../App.css';
const Footer =(props) =>{
    return (
        <div className="row">
        <div className="col-5   myGreen myFont ">
          <h5>Vaad Samwaad.</h5>
          <ul>
            <li>{props.reply}</li>
            {/* <li><strong>Base Station :</strong> Yes I am. Vaise Chacha Vidhayak hai hamare !!! </li> */}
          </ul>
        </div>
        <div className="col-7">
          <ControlPannel/>
        </div>
      </div>

    );
}

export default Footer;