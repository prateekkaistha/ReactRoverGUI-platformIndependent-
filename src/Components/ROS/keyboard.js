import ROSLIB from 'roslib';

let Drive = {
    w:false,
    a:false,
    s:false,
    d:false
};


export const keyboard = () => {
    const send = () => {

        var driving = new ROSLIB.Topic({
            ros : window.ros,
            name : '/Drive/keyboard',
            messageType : 'std_msgs/String'
          });
          
        let output = "";
        Object.keys(Drive).forEach((key)=>{
            output+=Drive[key] ? '1': '0';
        })
        var config = new ROSLIB.Message({
            data: output
        });
        driving.publish(config);
        console.log(output);
    
    }
    
    const keyUpHandler = (e) =>{
        if(Drive.hasOwnProperty(e.key)){
            Drive[e.key] = false;
        }
        if(window.connected)
            send();
    };
    
    const keyDownHandler = (e) => {
        if(Drive.hasOwnProperty(e.key) && Drive[e.key] === false){
            Drive[e.key] = true;
            if(window.connected)
                send();
        }
        
    };
    
    document.addEventListener('keyup',keyUpHandler);
    document.addEventListener('keydown',keyDownHandler);


};
