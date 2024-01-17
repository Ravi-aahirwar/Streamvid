import React, { useEffect, useState } from 'react'
import Navbar from '../../components/navbar/Navbar';
import TopNavbar from '../../components/topnavbar/TopNavbar';
import { navData } from '../../utils/constants';
import "./Feed.css"
import { fetchFromAPI } from '../../utils/fetchFromAPI';
import { toast } from 'react-toastify';
import Videos from '../../components/videos/Videos';
import Loader from '../../components/Loader';

export default function Feed() {
  document.title = "Streamvid | Feed"
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${selectedCategory}`)
      .then((data) => setVideos(data.items))
      .catch((error) => toast.error(error.message))
  }, [selectedCategory]);

  if (videos.length <= 0) return <Loader/>

  return (
    <div className='feed-container'>
      <Navbar />
      <div className='nav-div'>
        {
          navData.map(({ name, id }) => (
            <TopNavbar name={name} key={id}
              selectedCategory={selectedCategory}
              setSelectedCategory={setSelectedCategory}
            />
          ))
        }
      </div>
        <Videos videos={videos} />
    </div>
  )
}
