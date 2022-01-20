import React from "react";
import NameListItem from "./NameListItem";

function NameList(){

    const NameList = [
        {
        Id : 1,
        "name": {
            "title": "mr",
            "first": "brad",
            "last": "gibson",
                },
       "location": {
            "city": "kilcoole",
                },
       "email": "brad.gibson@example.com",
       "dob": {
            "date": "1993-07-20T09:44:18.674Z",
            "age": 26
          },
       "picture": { 
            "medium": "https://randomuser.me/api/portraits/med/men/75.jpg",   
          },
        },
        {
            Id : 2,
            "name":{
                "title":"Miss",
                "first":"Victoria",
                "last":"Steeves ",
            },
            "location":{
                "city" : "Dumas",
            },
            "email":"victoria.steeves@example.com",
            "dob":{
                "date":"1993-01-10T07:10:09.043Z",
                "age":29,
            },
            "picture":{
                "medium":"https://randomuser.me/api/portraits/med/women/66.jpg",
            }
        }
];

    const NameListComponent = () => {
        return( NameList.map((aName) => {
         return(
            <NameListItem 
            key={aName.Id}
            name={ `${aName.name.first} ${aName.name.last}`} 
            city={aName.location.city} 
            email={aName.email}
            birthday={aName.dob.date}
            avatar={aName.picture.medium}
            />
         );
        }
        ));
    };

    return (
    <React.Fragment> {/* similar to div tag */}
    <h1>Name List</h1>
    <hr />
    {NameListComponent()}
    </React.Fragment>
    );
}

export default NameList;