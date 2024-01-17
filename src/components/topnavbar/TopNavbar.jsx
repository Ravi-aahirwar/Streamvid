import React from 'react'
import "./TopNavbar.css"
export default function TopNavbar({ name, selectedCategory, setSelectedCategory }) {
  return (
    <div className='outer-div'>
      <div className="inner-div div"
        onClick={() => setSelectedCategory(name)}
        style={{
          backgroundColor: name === selectedCategory && "#3EA6FF",
          color:"white"
        }}
      >{name}</div>
    </div>
  )
}
