import ROSLIB from 'roslib';
import {listener} from './listener';
import {keyboard} from './keyboard';

const initialise = (ipAddress,fnc) =>{

  const updateSubscribers=()=>{
        listener();
        keyboard();
    }


    var ros = new ROSLIB.Ros({
        url : `ws://${ipAddress}:9090`
      });
    
      ros.on('connection', function() {
        let reply = ` BASE_STATION: Connected to websocket server.`;
        window.connected = true;
        fnc(true,reply);
        updateSubscribers(); 
      });
    
      ros.on('error', function(error) {
        let reply = ` BASE_STATION: Error connecting to websocket ${error}`;
        window.connected = false;
        fnc(false,reply);
      });
    
      ros.on('close', function() {
        let reply = ` BASE_STATION: Connection to websocket server closed`;
        window.connected = false;
        fnc(false,reply);
      });

      window.ros = ros;
}


export default initialise;