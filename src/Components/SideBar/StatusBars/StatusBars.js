import React,{Component} from 'react';
import BarDisplay from './BarDisplay/BarDisplay';


class StatusBars extends Component{
    state ={
        speed: 0.8,
        acceleration: 0.4,
        senstivity: 0.5
    }
    changeHandler = (type,ch) => {
        
        this.setState((prev)=>{
            let final = (ch==='+' ? prev[type] + 0.05:prev[type] - 0.05);
            final = final<0 ? 0: final;
            final = final>1 ? 1: final;
            if(type==='speed')
                return {speed: final};
            else if(type=='acceleration')
                return {acceleration:final};
            else if(type==='senstivity')
                return {senstivity: final};
            });
    }
    render(){
        return(
        <div>
            <BarDisplay title="Speed" value={this.state.speed} changed={(ch)=>this.changeHandler('speed',ch)}/>
            <BarDisplay title="Acceleration" value={this.state.acceleration} changed={(ch)=>{this.changeHandler('acceleration',ch)}}/>
            <BarDisplay title="Senstivity" value={this.state.senstivity} changed={(ch)=>{this.changeHandler('senstivity',ch)}}/>
         </div>    
        );
    }
}



export default StatusBars;