import React from 'react'
import "./VideoCard.css"
import { Link } from 'react-router-dom'
import CheckCircle from '@mui/icons-material/CheckCircle'
export default function VideoCard({ video: { id: { videoId }, snippet } }) {
  const timestamp = snippet.publishTime;
  const givenDate = new Date(timestamp);
  const currentDate = new Date();
  const timeDiff = currentDate - givenDate;

  let newda = new Date(timeDiff)
  let getDa = newda.getDay();



  return (
    <div>
      <Link to={videoId ? `/video/${videoId}` : `/video/serverisnotworking`}
        style={{ textDecoration: "none" }} >
        <div className='Videoouter-div'>
          <img src={snippet?.thumbnails?.high?.url} alt={snippet?.title} />
        </div>
        <div className="text-div" >
          <div className="creater-img">
            <img src={snippet?.thumbnails?.high?.url} alt="logo" />
          </div>
          <div className="creater-content">
            <Link to={videoId ? `/video/${videoId}` : "videonotavailable"} style={{ textDecoration: "none" }} >
              <h2 className='creater-name'>
                {snippet?.title.slice(0, 60)}
              </h2>
            </Link>
            <div className='break-div'></div>
            <h4>{snippet?.channelTitle} <CheckCircle sx={{ fontSize: "12px", color: "gray" }} />  </h4>
            <h4>{getDa} Days ago </h4>
          </div>
        </div>
      </Link>
    </div>
  )
}
