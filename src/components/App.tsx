import React, {useState, useEffect, memo} from 'react'
import Community from './components/Community'
import Title from './components/Title'

import 'antd/dist/antd.css';
export default function App() {
  return (
    <div>
      <Title />
      <Community />
    </div>
  )
}
