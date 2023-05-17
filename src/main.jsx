import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import AudioRecorder  from './AudioRecorder.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AudioRecorder />
  </React.StrictMode>,
)
