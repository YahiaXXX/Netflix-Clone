import Chart from "../../components/chart/Chart";
import FeaturedInfo from "../../components/featuredInfo/FeaturedInfo";
import "./home.css";
import { userData } from "../../dummyData";
import WidgetSm from "../../components/widgetSm/WidgetSm";
import WidgetLg from "../../components/widgetLg/WidgetLg";
import { useState, useEffect } from "react";
import axios from "axios";
import { useMemo } from "react";

export default function Home() {
  const MONTHS =useMemo(()=>[
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ],[]) 
  const [userStats, setUserStats] = useState([]);
  useEffect(() => {
    const getStats = async () => {
    try {
       const res = await axios.get("users/stats", {
          headers: {
            token:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyZWQ5YTk2YzAxYzljMzJlZDU1NmJlMCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY2MDkxMTcxMCwiZXhwIjoxNjYxMzQzNzEwfQ.NnmucIdp54Iwo5e6GDHkAi-eaWY7DeH-iDMyYuvmyEg",
          },
        });
        const statsList = res.data.sort(function(a,b){
          return a._id-b._id
        })
        statsList.map(item=>setUserStats(prev=>[...prev,{name:MONTHS[item._id-1],"New User":item.total}]))
      }
      
     catch (err) {
      console.log(err);
    }}
   getStats();
  },[MONTHS]);

  console.log(userStats)
  return (
    <div className="home">
      <FeaturedInfo />
      <Chart data={userStats} title="User Analytics" grid dataKey="New User"/>
      <div className="homeWidgets">
        <WidgetSm/>
        <WidgetLg/>
      </div>
    </div>
  );
}
