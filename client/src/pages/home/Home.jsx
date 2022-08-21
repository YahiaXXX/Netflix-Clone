import React, { useState, useEffect } from "react";
import Featured from "../../components/featured/Featured";
import List from "../../components/list/List";
import Navbar from "../../components/navbar/Navbar";
import "./home.scss";
import axios from "axios";

function Home({ type }) {
  const [lists, setLists] = useState([]);
  const [genre, setGenre] = useState(null);

  useEffect(() => {
    const getRandomLists = async () => {
      try {
        const res = await axios.get(
          `lists${type ? "?type=" + type : ""}${
            genre ? "&genre=" + genre : ""
          }`,
          {
            headers: {
              token:
                "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyZWQ5YTk2YzAxYzljMzJlZDU1NmJlMCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY1OTk5ODk3NiwiZXhwIjoxNjYwNDMwOTc2fQ.zsOA-aEpr_YJJBuauItCnT_ohPqk_2GDuX4RgnwYxrI",
            },
          }
        );
        setLists(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getRandomLists();
  }, [type, genre]);

  return (
    <div className="home">
      <Navbar />
      <Featured type={type} />
      {lists.map((list, key) => (
        <List key={key} list={list} />
      ))}
    </div>
  );
}

export default Home;
