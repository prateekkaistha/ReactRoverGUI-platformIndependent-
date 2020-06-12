import React,{Component} from 'react';
import './index.css';
import App from './Components/Main/App';
import Startup from './Components/Startup/Startup';
class Layout extends Component{
    state={
        connected:false,
        dropConnection:false
    }
    updateConnectionStatus = () => {
        if(this.state.connected===true && window.connected===false)
        this.setState({connected:window.connected,dropConnection:true});
        else
        this.setState({connected:window.connected});
        
    }
    render(){
        console.log("rendering again with value",window.connected);
        let sec;
        if(window.connected){
           sec = <App updateConnectionStatus={this.updateConnectionStatus}/>;
        }
        else if(this.state.dropConnection===false){
            sec = <Startup fade={false} updateConnectionStatus={this.updateConnectionStatus} />;
        } 
        else{
            sec =(
             <React.Fragment>
                <Startup fade={true} updateConnectionStatus={this.updateConnectionStatus} />
                <App/>
             </React.Fragment>
                
            );
        }
        return(
            <React.Fragment>
                {sec}    
            </React.Fragment>
        );
    }
}

export default Layout;