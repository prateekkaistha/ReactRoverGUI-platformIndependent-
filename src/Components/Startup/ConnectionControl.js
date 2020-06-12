import React from 'react';
import {Input,Button} from 'reactstrap';
import './ThreeJSLearning/ThreeJSback.css';
import SoundPlayer from '../SoundPlayer/SoundPlayer';

const HeadingTest = (props) => {
    return(
       
        <div>
              {/* <SoundPlayer/>  */}
            <Input onChange={props.update} className="input" type="text" placeholder="IPv4 Address"  />
            <Button onClick={props.connectBtn} className="button" ><i>SHRATHAN </i><strong>ROVER</strong></Button>
            {props.reply?<p className="message"><strong>REPLY : </strong>{props.reply}</p>:null}
            
         </div>
        );
}
export default HeadingTest;