import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import "./VideoDetail.css";
import { Box, Stack, Typography } from '@mui/material';
import { fetchFromAPI } from '../../utils/fetchFromAPI'
import Loader from '../Loader';
import ReactPlayer from 'react-player';
import Videos from '../videos/Videos'
import "./VideoDetail.css"
import Navbar from '../../components/navbar/Navbar'
import CheckCircle from '@mui/icons-material/CheckCircle';
import userImg from "../../assests/user-img.png"

export default function VideoDetail() {

  const [videoDetail, setVideoDetail] = useState(null);
  const [videos, setVideos] = useState([]);
  const { id } = useParams()
  useEffect(() => {
    fetchFromAPI(`videos?part=snippet,statistics&id=${id}`)
      .then((data) => setVideoDetail(data.items[0]))

    fetchFromAPI(`search?part=snippet&relatedToVideoId=${id}&type=video`)
      .then((data) => setVideos(data.items))
  }, [id]);
  if (!videoDetail?.snippet) return <Loader />
  const { snippet: { title, channelId, channelTitle }, statistics: { viewCount, likeCount } } = videoDetail;

  return (
    <Box minHeight="95vh">
      <Navbar />
      <Stack direction={{ xs: "column", md: "row" }}>
        <Box flex={1} marginLeft="2.2rem">
          <Box sx={{ width: "100%", position: "sticky", top: "86px" }}>
            <ReactPlayer url={`https://www.youtube.com/watch?v=${id}`} controls />
            <Typography color="#fff" variant="h5" fontWeight="bold" p={1}>
              {title}
            </Typography>
            <div className='channel-title'>
              <div className='channel-name-logo'>
                <div className='channel-logo'> <img src={userImg} alt="img" /> </div>
                <Link to={`/channel/${channelId}`} style={{ textDecoration: "none" }}>
                  <Typography variant={{ sm: "subtitle1", md: 'h6' }} color="#fff" >
                    {channelTitle}
                    <CheckCircle sx={{ fontSize: "12px", color: "gray", ml: "5px" }} />
                  </Typography>
                </Link>
              </div>
              <div className='likes-or-views' style={{color:"white"}}>
                <Typography variant="body1" sx={{ opacity: 0.7 }}>
                  {parseInt(viewCount).toLocaleString()} views
                </Typography>
                <Typography variant="body1" sx={{ opacity: 0.7 }}>
                  {parseInt(likeCount).toLocaleString()} likes
                </Typography>
              </div>
            </div>
          </Box>
        </Box>
        <div className='recomed-video'>
          <Videos videos={videos} />
        </div>
      </Stack>
    </Box>
  )
}
