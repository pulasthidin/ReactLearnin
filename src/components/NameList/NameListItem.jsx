import moment from "moment";
import React from "react";

import './NameListItem.css';

function NameListItem(props){
    return (
    <li className="list-group-item shadow-sm">
        <div className="row align-items-center">

            <div className="col-2">
              <img src={props.avatar} alt={props.name} className="border border-dark rounded-circle shadow-sm"/>
            </div>

            <div className="col-9">
              <h3 className="redText"> {props.name}</h3>
              <p style={{color : 'green'}}>{props.city} | Email: {props.email}</p>
              <p>Birthday: {new Intl.DateTimeFormat('en-GB').format(new Date(props.birthday))}</p>
              <p>Birthday using momentLib: {moment(props.birthday).format('DD-MM-YYYY') }</p>
            </div>

        </div>
    </li>
    );
}

export default NameListItem;