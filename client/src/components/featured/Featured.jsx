import React,{useState,useEffect} from 'react'
import "./featured.scss"
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import Matrix from "../../assets/matrix.png"
import axios from "axios"

function Featured({type}) {
    const [content,setContent]=useState({})

    useEffect(()=>{
       const getRandomContent= async ()=>{
         try{
           const res= await axios.get(`/movies/random?type=${type}`,{
                headers: {
                  token:
                    "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyZWQ5YTk2YzAxYzljMzJlZDU1NmJlMCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY1OTk5ODk3NiwiZXhwIjoxNjYwNDMwOTc2fQ.zsOA-aEpr_YJJBuauItCnT_ohPqk_2GDuX4RgnwYxrI",
                },
              })
            setContent(res.data[0])

         }
         catch(err){
            console.log(err)
         }
         
       }
      getRandomContent()

    },[type])
  return (
    <div className='featured' >

        {type && (
            <div className="category">
                <span>{type==="movies" ? "Movies" : "Series" }</span>
                <select name="genre" id="genre">
                    <option>Genre</option>
                    <option value="adventure">Adventure</option>
                    <option value="comedy">Comedy</option>
                    <option value="crime">Crime</option>
                    <option value="fantazy">Fantazy</option>
                    <option value="historical">Historical</option>
                    <option value="horror">Horror</option>
                    <option value="romance">Romance</option>
                    <option value="western">Western</option>
                    <option value="animation">Animation</option>
                </select>
            </div>
        )}
            <img src={content.img} alt="" />
            <div className="info">
                <img src={content.imgTitle} alt="" />
            
            <span className="desc">
                {content.desc}
            </span>
            <div className="buttons">
               <button className="play">
                <PlayArrowIcon/>
                <span>Play</span>
                </button>
               <button className="more">
                <InfoOutlinedIcon/>
                <span>Info</span>

               </button>
            </div>
            </div>
    </div>
  )
}

export default Featured