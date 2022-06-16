// import React from 'react'
// import ReactDOM from 'react-dom'
import { createRoot } from 'react-dom/client'
import App from './App'
import './index.css'

const container = document.getElementById('root')!
const root = createRoot(container)
// ReactDOM.render(<App />, document.getElementById('root'))
root.render(<App />)
