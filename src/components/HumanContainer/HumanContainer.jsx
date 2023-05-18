import './_humanContainer.scss'
import { useEffect, useState } from 'react'
import VideoPlayer2 from '../VideoPlayer/VideoPlayer2'
import useRecorder from '../../hooks/useRecorder'

const HumanContainer = () => {
  const [isRecording, setIsRecording] = useState(false)
  const {
    permission,
    recordingStatus,
    getMicrophonePermission,
    startRecording,
    stopRecording,
    audio
  } = useRecorder()

  useEffect(() => {
    !permission && getMicrophonePermission() 
  }, [permission, getMicrophonePermission])
  

  const handleStartRecording = ( ) => {
    console.log(':::: START RECORDING ::::')
    setIsRecording(true)
    permission && recordingStatus === "inactive" && startRecording()
  }
 
  const handleStopRecording = ( ) => {
    console.log('STOP RECORDING')
    setIsRecording(false) 
    recordingStatus === "recording" && stopRecording()
  } 

  return (
    <div className='container'>
      <div className="container__containerHuman">
        <div className='controls'>
          <button className="button-btn">
            <i className="fa fa-less-than icon"></i>
          </button>
          <button className="button-mic"></button>
          <button id="microphone" 
            className={"button-mic " + (isRecording ? 'button-mic-focus' : '')}
            onMouseDown={ handleStartRecording }
            onMouseUp={ handleStopRecording }>
            <i className="fa fa-microphone" aria-hidden="true"></i>
            <div id="pulse-ring" className={isRecording ? 'pulse-ring' : ''}></div>
          </button>
          <button className="button-mic"></button>
          <button className="button-btn">
            <i className="fa fa-greater-than icon"></i>
          </button>
        </div>
        <VideoPlayer2 className='container__containerHuman__img'/>
        
      </div>
      <div className="container__containerChat">
        {audio && (
                  <div className="audio-container">
                    <audio src={audio} controls></audio>
                    <a download href={audio}>
                      Download Recording
                    </a>
                  </div>
                  )
        }
      </div>
    </div>
  )
}

export default HumanContainer
