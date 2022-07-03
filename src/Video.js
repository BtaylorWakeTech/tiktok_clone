import React, { useRef, useState } from 'react'
import "./Video.css";
import VideoSidebar from './VideoSidebar';

function Video() {
    const [ playing, setPlaying] = useState(false);
    const videoRef = useRef(null);
    const handleVideoPress = () =>{
        if (playing) {
            videoRef.current.pause();
            setPlaying(false);
        } else {
            videoRef.current.play();
            setPlaying(true);
        }



    }

  return (
    <div className="video">
            <video 
            onClick={handleVideoPress}
            className='video_player'
            loop
            ref={videoRef}
            src="#"></video>

            <VideoFooter/>
            <VideoSidebar/>
    </div>
  )
}

export default Video