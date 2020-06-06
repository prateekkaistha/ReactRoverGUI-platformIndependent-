import React, {Component} from 'react';
import NavComponent from './Components/NavComponent';
import SideBar from './Components/SideBar/SideBar';
import Footer from './Components/Footer/Footer';
import MapComponent from './Components/MapComponent';
import "leaflet/dist/leaflet.css";
import './App.css';
import start from './Components/ROS/publisher';
import initialise from './Components/ROS/initializer';

class App extends Component{
  state={
    currIP:'',
    ipAddress:'',
    connected:false,
    reply: null
  };

  ipHandler = (event) => {
    const c = event.target.value;
    this.setState({currIP:c});
  }

  connectionStatus = (stat,reply) => {
    console.log("Status is : ",stat);
    this.setState({connected:stat,reply: reply});
  }

  clickHandler = () => {  
    if(this.state.currIP){
      initialise(this.state.currIP,this.connectionStatus);
    }
    this.setState({ipAddress:this.state.currIP});
  }

  render(){
    return(
      <div>
        <div className="navArea">
          <NavComponent  connect={this.clickHandler} ip={this.ipHandler} currIP={this.state.currIP}/>
        </div>

      <div className="container-fluid ">
        <div className="row ">
          <div className="col-2 sideBar">
            <SideBar rotate={this.state.connected}/>
          </div>

          <div className="col-10 col-content ">
            <div className="row">
              <div className="col-12 col-content playArea ">
                  <MapComponent/>
              </div>
            </div>

            <div className="row ">
              <div className="col-12 footerArea outer">
                <Footer reply={this.state.reply}/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    );
  }
};

export default App;


