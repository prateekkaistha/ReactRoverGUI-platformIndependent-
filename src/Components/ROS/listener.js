import ROSLIB from 'roslib';
let func = null
export const initialiseFunction =  (updateFunction) =>{
  func = updateFunction; 
}

export const listener = () => {
  if(window.connected){
    var listener = new ROSLIB.Topic({
      ros : window.ros,
      name : '/drive_data',
      messageType : 'jetson/DriveNeuron'
    });
  
  }

    listener.subscribe(function(message) {
      console.log('Received message on ' + message.channel1 + ': ' + message.channel2);
      if(func!=null);
      func(message);
      // listener.unsubscribe();
    });

  
};


