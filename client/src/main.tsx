import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { io } from "socket.io-client";

export const socket = io("https://storyswap.azurewebsites.net");

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
