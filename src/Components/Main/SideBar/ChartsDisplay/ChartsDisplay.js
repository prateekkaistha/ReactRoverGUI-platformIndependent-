import React,{Component} from 'react';
import {Bar} from 'react-chartjs-2';
import listener from '../../../ROS/listener';
import {initialiseFunction} from '../../../ROS/listener';

export default class ChartsDisplay extends Component {
  state = {
    labels: ['Left M', 'Right M',' ', 'LA1',
             'LA2', 'TT'],
    datasets:[
      {
        label: 'Motol Status',
        backgroundColor: 'rgba(75,192,192,1)',
        
        borderColor: 'rgba(0,0,0,1)',
      //   borderColor: 'white',
      
        borderWidth: 2,
        data: [0, 0,0, 20, -35, 35]
      }
    ],
  }
  
  updateHandler = (message) => {
    let newState = {...this.state.datasets};
    if(this.props.speeds){
      newState[0].data = [message.channel1-64,message.channel2-192,0,0.80, -35, 35];
      console.log(newState[0].data);
      this.setState({datasets:[newState[0]]});
    }
  }  

  componentDidMount() {
    initialiseFunction(this.updateHandler);
  }


  render() {
    
        return (
      <div>
        <Bar

            width={100}
            height={120}


          data={this.state}
          options={{
            title:{
              display:true,
              text:'ROVER STATUS',
              fontSize:20,
            //   fontColor:'white'
            },
            legend:{
              display:false,
              position:'right'
            }
          }}
        />
      </div>
    );
  }
}