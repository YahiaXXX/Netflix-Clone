import React from 'react'
import "./watch.scss"
import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined';
import { Link, useLocation } from 'react-router-dom';

function Watch() {
  const location=useLocation();
  const movie = location.state.movie
  return (
    <div className='watch' >
        <Link to="/" >
        <div className='back'>
           <ArrowBackOutlinedIcon/> Home
        </div>
        </Link>
        <video className='video' autoPlay progress controls  src={movie.video}/>
    </div>
  )
}

export default Watch