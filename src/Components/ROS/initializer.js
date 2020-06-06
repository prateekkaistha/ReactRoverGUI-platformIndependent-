import ROSLIB from 'roslib';

const initialise = (ipAddress,fnc) =>{

    console.log("CONNECTING TO :::::",ipAddress);

    var ros = new ROSLIB.Ros({
        url : `ws://${ipAddress}:9090`
      });
    
      ros.on('connection', function() {
        console.log('Connected to websocket server.');
        let reply = ` BASE_STATION: Connected to websocket server.`;
        fnc(true,reply); 
      });
    
      ros.on('error', function(error) {
        console.log("++++++++++++++++++++++");
        console.log('Error connecting to websocket server: ', error);
        console.log("++++++++++++++++++++++");
        let reply = ` BASE_STATION: Error connecting to websocket ${error}`;
        fnc(false,reply);
      });
    
      ros.on('close', function() {
        console.log("-------------------------");
        console.log('Connection to websocket server closed.');
        console.log("-------------------------");
        let reply = ` BASE_STATION: Connection to websocket server closed`;
        fnc(false,reply);
      });

}


export default initialise;