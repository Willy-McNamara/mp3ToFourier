import React from 'react'
import { useState, useEffect } from 'react'
/*
Plan:
*/

const Display = ({name}) => {

  // let [show, setShow] = useState(false)
  // useEffect((name) => {
  //   console.log('useEffect for name triggered!')
  //   if (name) {
  //     console.log('name change useEffect triggered!')
  //     setShow(true)
  //   }
  // }, [name])
  console.log('rendering Display. here is name: ', name)

  let source = `http://localhost:3033` // /${name}
  if (!name) {
    console.log('returning placeholder')
    return (
      <div className="Container">
        placeholder
      </div>
    )
  } else {
    console.log('returning iframe')
    return (
      < div className="Container">
        Will display .png returned from server here
        <iframe src={source} title="description" id="iframe" frameBorder="0"></iframe>
      </div>
    )
  }
}

export default Display