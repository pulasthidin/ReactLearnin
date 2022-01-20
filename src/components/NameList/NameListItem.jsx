import moment from "moment";
import React from "react";

function NameListItem(props){
    return (
    <div>
    <ul>
        <p><img src={props.avatar} /></p> 
        <p> {props.name}</p>
        <p>City: {props.city}</p>
        <p>Email: {props.email}</p>
        <p>Birthday: {new Intl.DateTimeFormat('en-GB').format(new Date(props.birthday))}</p>
        <p>Birthday using momentLib: {moment(props.birthday).format('DD-MM-YYYY') }</p>
        <p></p>
        <p></p>
    </ul>
    </div>
    );
}

export default NameListItem;