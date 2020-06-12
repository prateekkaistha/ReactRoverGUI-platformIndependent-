import React, {Component} from 'react';
import NavComponent from './Navbar/NavComponent';
import SideBar from './SideBar/SideBar';
import Footer from './Footer/Footer';
import MapComponent from './Map/MapComponent';
import "leaflet/dist/leaflet.css";
import './App.css';
import initialise from '../ROS/initializer';


class App extends Component{
  state={
    currIP:'',
    ipAddress:'',
    reply: null,
    speeds: []
  };


  updateSpeed = (message) => {
    console.log("Updating");
    this.setState({speeds:[message.channel1,message.channel2]});
  }

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
      <React.Fragment>
      <div>
        <div className="navArea">
          <NavComponent  connect={this.clickHandler} ip={this.ipHandler} currIP={this.state.currIP}/>
        </div>
    
      <div className="container-fluid ">
        <div className="row ">
          <div className="col-2 sideBar">
            <SideBar speeds={this.state.speeds}/>
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
      </React.Fragment>
      
    );
  }
};

export default App;


