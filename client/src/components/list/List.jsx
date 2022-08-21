import React, { useRef,useState } from 'react'
import "./list.scss"
import ArrowBackIosOutlinedIcon from '@mui/icons-material/ArrowBackIosOutlined';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import ListItem from '../listItem/ListItem';

function List({list}) {
  const [isMoved,setIsMoved]= useState(false)
  const [slideNum,setSlideNum]= useState(0)
  const listRef=useRef()
  const handleClick=(direction)=>{
    setIsMoved(true)
    let distance = listRef.current.getBoundingClientRect().x - 50
    if(direction==="left" && slideNum > 0 ){
      listRef.current.style.transform = `translateX(${230+distance}px)`
      setSlideNum(slideNum-1)
    }
    if(direction==="right" && slideNum < 7 ){
      listRef.current.style.transform = `translateX(${-230+distance}px)`  
      setSlideNum(slideNum+1)
    }

  }
  return (
    <div className='list'>
       <span className="listTitle">{list.title}</span>
       <div className="wrapper">
        <ArrowBackIosOutlinedIcon style={{display: !isMoved && "none" }} className='sliderArrow left' onClick={()=>handleClick("left")} />
        <div className="container" ref={listRef} >
          {list.content.map((listItem,i)=>(
            <ListItem index={i} item={listItem} />

          ))}
            
            
        </div>
        <ArrowForwardIosOutlinedIcon className='sliderArrow right' onClick={()=>handleClick("right")} />

       </div>
        </div>
  )
}

export default List