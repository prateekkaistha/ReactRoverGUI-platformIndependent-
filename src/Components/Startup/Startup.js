import React,{Component} from 'react';
import ThreeJSback from './ThreeJSLearning/ThreeJSback';
import './ThreeJSLearning/ThreeJSback.css';
import ConnectionControl from './ConnectionControl';
import initialise from '../ROS/initializer';
import ThreeJSbackFade from '../Startup/ThreeJSLearning/ThreeJSbackFade';

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
            {this.props.fade?<ThreeJSbackFade/>:<ThreeJSback />}
        </div>
            
        );
    }
}

export default Startup;

