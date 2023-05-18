import ReactPlayer from 'react-player'

  const VideoPlayer = () => {
    return(
      <div>
      <ReactPlayer
        url='https://rili.ai/avatares/videos_final/01.mp4'
        className='react-player'
        playing ={true}
        width='100%'
        height='100%'
        playsinline={true}
        muted={true}
        loop={true}
      />
    </div>
    )
  };

  export default VideoPlayer;
  
