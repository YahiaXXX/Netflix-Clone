import React, { useState, useEffect } from "react";
import "./listItem.scss";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import AddIcon from "@mui/icons-material/Add";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import ThumbDownAltOutlinedIcon from "@mui/icons-material/ThumbDownAltOutlined";
import axios from "axios";
import { Link } from "react-router-dom";

function ListItem({ index, item }) {
  const [hovered, setHovered] = useState(false);
  const [movie, setMovie] = useState({});
  useEffect(() => {
    const getMovie = async () => {
      try {
        const res = await axios.get("/movies/find/" + item, {
          headers: {
            token:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyZWQ5YTk2YzAxYzljMzJlZDU1NmJlMCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY1OTk5NTMyMSwiZXhwIjoxNjYwNDI3MzIxfQ.WvnHrFjOCcEfgnmhfBwYrHKyR9mY37eaxGyaByz3UPk",
          },
        });
        setMovie(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getMovie();
  }, [item]);
  return (
    <Link to="/watch" state={{movie}} >
    <div
      className="listItem"
      style={{ left: hovered && index * 225 - 50 + index * 2.5 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <img src={movie.img} alt="" />
      {hovered && (
        <>
          <video src={movie.trailer} autoPlay loop />
          <div className="itemInfo">
            <div className="icons">
              <PlayArrowIcon className="icon" />
              <AddIcon className="icon" />
              <ThumbUpOutlinedIcon className="icon" />
              <ThumbDownAltOutlinedIcon className="icon" />
            </div>
            <div className="itemInfoTop">
              <span>{movie.duration}</span>
              <span className="limit">+{movie.limit}</span>
              <span>{movie.year}</span>
            </div>
            <div className="desc">{movie.desc}</div>
            <div className="genre"> {movie.genre} </div>
          </div>
        </>
      )}
    </div>
    </Link>
  );
}

export default ListItem;
