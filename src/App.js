import React, {Component} from 'react';
import NavComponent from './Components/NavComponent';
import SideBar from './Components/SideBar/SideBar';
import Footer from './Components/Footer/Footer';
import MapComponent from './Components/MapComponent';
import "leaflet/dist/leaflet.css";
import './App.css';
import start from './Components/ROS/publisher';
class App extends Component{
  state={
    currIP:'',
    ipAddress:'',
    expanded:false
  };

  ipHandler = (event) => {
    const c = event.target.value;
    this.setState({currIP:c});
  }

  clickHandler = () => {
    const curr = this.state.expanded;
    this.setState({expanded:!curr,ipAddress:this.state.currIP});
    start();
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
            <SideBar/>
          </div>

          <div className="col-10 col-content ">
            <div className="row">
              <div className="col-12 col-content playArea ">
                  <MapComponent/>
              </div>
            </div>

            <div className="row ">
              <div className="col-12 footerArea outer">
                <Footer/>
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


