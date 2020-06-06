import React from 'react';
import {Bar} from 'react-chartjs-2';
import { white } from 'color-name';

const state = {
  labels: ['Left M', 'Right M',' ', 'LA1',
           'LA2', 'TT'],
  datasets: [
    {
      label: 'Motol Status',
      backgroundColor: 'rgba(75,192,192,1)',
      
      borderColor: 'rgba(0,0,0,1)',
    //   borderColor: 'white',
    
      borderWidth: 2,
      data: [-1, -0.5,0, 0.80, -0.81, 1]
    }
  ],
}

export default class ChartsDisplay extends React.Component {
  render() {
    return (
      <div>
        <Bar

            width={100}
            height={120}


          data={state}
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