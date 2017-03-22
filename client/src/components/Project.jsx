import React from 'react'

var Project = function (props) {
  return (
    <div id='project'>
      <div id='project-one'>
        <div id='photo-viewer'> 
          <a href="http://i.imgur.com/exxUR4p.png" />
          <img src="http://i.imgur.com/exxUR4p.png"/>
        </div>
        <div id="thumbnail" onClick={props.handleThumbnailClick}>

          <a href="http://i.imgur.com/exxUR4p.png"  />
          <img src="http://i.imgur.com/exxUR4p.png"/>
          <a href="http://i.imgur.com/QSwARvs.png" />
          <img src="http://i.imgur.com/QSwARvs.png"/>
          <a href="http://i.imgur.com/rmXMhvm.png" />
          <img src="http://i.imgur.com/rmXMhvm.png"/>
        </div>
      </div>
    </div>
    )
}



export default Project;