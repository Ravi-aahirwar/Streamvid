import React from 'react'
import { Typography } from '@mui/material';
import "./ChannelCard.css"
import { Link } from 'react-router-dom';
import CheckCircle from '@mui/icons-material/CheckCircle';
const ChannelCard = ({ channelDetail, marginTop }) => {
    return (
        <div className='outer-channelDiv' style={{ marginTop }}>
            <Link to={`/channel/${channelDetail?.id?.channelId}`} style={{ textDecoration: "none" }} >
                <div className='inner-logo-div'>
                    <img src={channelDetail?.snippet?.thumbnails?.high?.url} alt={channelDetail?.snippet?.title} />
                </div>
                <div className='subscriber-or-name'>
                    <Typography variant="h6">
                        {channelDetail?.snippet?.title}{' '}
                        <CheckCircle sx={{ fontSize: '14px', color: 'gray', ml: '5px' }} />
                    </Typography>
                    {channelDetail?.statistics?.subscriberCount && (
                        <Typography sx={{ fontSize: '15px', fontWeight: 500, color: 'gray' }}>
                            {parseInt(channelDetail?.statistics?.subscriberCount).toLocaleString('en-US')} Subscribers
                        </Typography>
                    )}
                </div>
            </Link>
        </div>
    )
}
export default ChannelCard;
