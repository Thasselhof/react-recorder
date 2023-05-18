import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import AudioRecorder  from './AudioRecorder.jsx'
import './index.css'
import VideoPlayer from './VideoPlayer.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AudioRecorder />
    <VideoPlayer />
  </React.StrictMode>,
)
