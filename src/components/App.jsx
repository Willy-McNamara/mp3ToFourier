import React from 'react'
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
  return (
    <div id="mainContainer" className="Container">
      <h1 id="title"> mp3ToFourierDemo </h1>
      < Upload />
      < Display />
    </div>
  )
}

export default App