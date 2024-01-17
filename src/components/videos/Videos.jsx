import React, { useState } from 'react'
import VideoCard from '../videocard/VideoCard'
import "./Videos.css"
import ChannelCard from '../channel-card/ChannelCard'
export default function Videos({ videos }) {
    console.log(videos)
    return (
        <div className="videos-cards" >
            {
                videos.map((item, idx) => (
                    <div key={idx}>
                        {item.id.videoId &&<VideoCard video={item} />}
                        <div style={{ width: "400px" }}>
                            {item.id.channelId && <ChannelCard channelDetail={item}/>}
                        </div>
                    </div>
                ))
            }
        </div>
    )
}
