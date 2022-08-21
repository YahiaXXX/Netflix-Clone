import "./widgetSm.css";
import { Visibility } from "@material-ui/icons";
import { useState,useEffect } from "react";
import axios from "axios"

export default function WidgetSm() {
  const [newUsers,setNewUsers]=useState([]);
  useEffect(()=>{
    const getNewUsers = async ()=>{
      try{
        const res = await axios.get("/users?new=true" , {
          headers: {
            token:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyZWQ5YTk2YzAxYzljMzJlZDU1NmJlMCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY2MDkxMTcxMCwiZXhwIjoxNjYxMzQzNzEwfQ.NnmucIdp54Iwo5e6GDHkAi-eaWY7DeH-iDMyYuvmyEg",
          }})
          setNewUsers(res.data)

      }
      catch(err){
        console.log(err)
      }
    }

   getNewUsers()
  },[])
  return (
    <div className="widgetSm">
      <span className="widgetSmTitle">New Join Members</span>
      <ul className="widgetSmList">
        {newUsers.map(item=>(
          <li className="widgetSmListItem">
          <img
            src={item.profilePic || "data:image/jpeg;base64,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" }
            alt=""
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">{item.username}</span>
            <span className="widgetSmUserTitle">Software Engineer</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" />
            Display
          </button>
          </li>
        ))}
        
        
        
      </ul>
    </div>
  );
}
