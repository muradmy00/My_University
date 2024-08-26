import './VideoPlayer.css'
import video from '../../assets/college-video.mp4'
import { useRef } from 'react'

const VideoPlayer = ({ hVideo, setHVideo }) => {


    const player = useRef(null);

    const closePlayer = (e) => {

        if(e.target === player.current){

            setHVideo(false);
        }
    }

  return (

    <div onClick={closePlayer} className={`video-player ${hVideo?'':'hide'}`} ref={player}>
      
      <video src={video} autoPlay muted controls></video>

    </div>
  )
}

export default VideoPlayer
