import React,{Component} from 'react';
import ThreeJSbackFade from '../Startup/ThreeJSLearning/ThreeJSbackFade';
import ConnectionControl from '../Startup/ConnectionControl';
import initialise from '../ROS/initializer';

class Startup extends Component{
    state={
        currIP:'',
        reply:null   
    }
    ipHandler = (event) => {
        this.setState({currIP:event.target.value})
    }
    connectionStatus = (stat,reply) => {
        console.log("Status is : ",stat,reply);
        this.setState({reply: reply});
        this.props.updateConnectionStatus();
    }
    connectBtn = () => {
        if(this.state.currIP){
            initialise(this.state.currIP,this.connectionStatus);

        }
        else{
            this.setState({reply:"Please enter IP address"})
        }
    }
    render(){
        return(<div>
            <ConnectionControl reply={this.state.reply} update={this.ipHandler} connectBtn={this.connectBtn}  />
            <ThreeJSbackFade/>
        </div>
            
        );
    }
}

export default Startup;

