import React, { useState, useEffect } from 'react'
import "./SearchFeed.css"
import Videos from '../videos/Videos'
import { useParams } from 'react-router-dom'
import { fetchFromAPI } from '../../utils/fetchFromAPI'
import Navbar from '../navbar/Navbar'
import { toast } from 'react-toastify'
// import Loader from '../Loader'
export default function SearchFeed() {

  const [videos, setVideos] = useState([]);
  const { searchterm } = useParams();
  
  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${searchterm}`)
    .then((data) => setVideos(data.items))
    .catch((error)=>{
      toast.error(error.message)
    })
  }, [searchterm]);
  // if(!videos.length<=0) return <Loader/>

  return (
    <div className='search-feed' >
      <Navbar />
      <Videos videos={videos} />
    </div>
  )
}
