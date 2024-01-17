import React from 'react'
import "./ChannelDetail.css"
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Videos from '../videos/Videos'
import ChannelCard from '../channel-card/ChannelCard'
import { fetchFromAPI } from '../../utils/fetchFromAPI'
import Loader from '../Loader'
export default function ChannelDetail() {

  const [channelDetail, SetChannelDetail] = useState(null);
  const [videos, setVideos] = useState([]);
  console.log(channelDetail)
  const { id } = useParams()
  useEffect(() => {
    const fetchResults = async () => {
      const data = await fetchFromAPI(`channels?part=snippet&id=${id}`);

      SetChannelDetail(data?.items[0]);
      const videosData = await fetchFromAPI(`search?channelId=${id}&part=snippet%2Cid&order=date`);

      setVideos(videosData?.items);
    };

    fetchResults();

  }, [id]);
  if(!videos.length<=0) return <Loader/>
  return (
    <div>
      <div style={{
        height: '300px',
        background: 'linear-gradient(90deg, rgba(0,238,247,1) 0%, rgba(206,3,184,1) 100%, rgba(0,212,255,1) 100%)',
        zIndex: 10,
      }}
      />
        <ChannelCard channelDetail={channelDetail} marginTop="-93px" />
        <Videos videos={videos} />
    </div>
  )
}
