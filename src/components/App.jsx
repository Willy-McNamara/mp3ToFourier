import React from 'react'
import { useState } from 'react'
import Upload from './Upload.jsx'
import Display from './Display.jsx'
/*
Sections:
  Title
  Upload (input)
  **optional** Record (allows user to record their own mp3)
  Display
  **optional** List of existing images
*/

const App = () => {
  let [name, setName] = useState(false)
  let loadDisplay = (filename) => {
    console.log('load display triggered, here is filename', filename)
    setName(filename)
  }
  return (
    <div id="mainContainer" className="Container">
      <h1 id="title"> mp3ToFourierDemo </h1>
      < Upload loadDisplay={loadDisplay}/>
      < Display name={name}/>
    </div>
  )
}

export default App