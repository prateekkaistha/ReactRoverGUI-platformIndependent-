import React from 'react';
import { Progress } from 'reactstrap';
import {FiPlusCircle,FiMinusCircle} from 'react-icons/fi';
import '../../../../Main/App.css';


const BarDisplay = (props) => {

    return (
        <div className=" container outer">
            <div className="row">
                <div className="col-6 meraBlue myFont">
                   <p>{props.title}</p> 
                </div>
                <div className="col-2">
                    <p>{props.value.toFixed(2)}</p>
                </div>

                <div  className="col-1" >
                    <FiPlusCircle onClick={()=>props.changed('+')} style={{color: '#d3b64d'}} size={20}/>
                </div>

                <div className="col-1">
                    <FiMinusCircle onClick={()=>props.changed('-')} style={{color: '#d3b64d'}} size={20}/>
                </div>


                </div>
                <div className="row">
                    <div className="col-12">
                        <Progress  color="success" value={props.value*100} ></Progress>
                    </div>
                </div>
        </div>
    );
}

export default BarDisplay;