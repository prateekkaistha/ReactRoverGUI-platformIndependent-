import React from 'react';
import { GiFlame,GiPointySword} from "react-icons/gi";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../../Main/App.css';


const ControlPannel = (props) => {
    return(
        <div className="row outer">
        <div className="col-2">
        <button type="button" className="btn btn-success btn-sm btn-block" >Drive</button>
        </div>
        <div className="col-2">
        <button type="button" className="btn btn-secondary btn-sm btn-block" >Drive+ARM</button>
        </div>
        <div className="col-2">
        <button type="button" className="btn btn-secondary btn-sm btn-block" >Drive</button>
        </div>
        <div className="col-2">
        <button type="button" className="btn btn-secondary btn-sm btn-block" >Drive+ARM</button>
        </div>
        <div className="col-2">
           <button type="button"  className="btn btn-info btn-sm btn-block">Kill All <GiPointySword size={16}/></button>
        </div>
        <div className="col-2">
           <button type="button" className="btn btn-danger btn-sm btn-block">Force Stop <GiFlame/></button>
        </div>
      </div>

    );
}

export default ControlPannel;