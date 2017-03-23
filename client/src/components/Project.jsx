import React from 'react'

var Project = function (props) {
  return (
    <div id='project'>
    <h1>ALL THESE THINGS THAT IVE DONE</h1>
      <div id='project-one'>
        <div className='photo-viewer'> 
          <a href="http://i.imgur.com/exxUR4p.png" />
          <img id='focus-photo' src="http://i.imgur.com/exxUR4p.png"/>
        </div>
        <div className="thumbnail" onClick={props.handleThumbnailClick}>

          <a href="http://i.imgur.com/exxUR4p.png"  />
          <img src="http://i.imgur.com/exxUR4p.png"/>
          <a href="http://i.imgur.com/QSwARvs.png" />
          <img src="http://i.imgur.com/QSwARvs.png"/>
          <a href="http://i.imgur.com/rmXMhvm.png" />
          <img src="http://i.imgur.com/rmXMhvm.png"/>
        </div>
        <div id="project-text">
        <p>FINAL BOSS - An Inventory Management App for Game Shop Owners</p>
        <p>Written in Ruby with a PSQL database and a light layer of CSS. FEATURES: CRUD actions on the inventory with any changes reflected in the inventory table.  </p>
        </div>
      </div>





      <div id ="project-two">
        <div className='photo-viewer'>
          <a href= "http://i.imgur.com/iPCroTV.jpg" />
          <img className='focus-photo' src="http://i.imgur.com/iPCroTV.jpg"/>
        </div>
        <div className="thumbnail" onClick={props.handleThumbnailClick}>

          <a href="http://i.imgur.com/iPCroTV.jpg"  />
          <img src="http://i.imgur.com/iPCroTV.jpg"/>
          <a href="http://i.imgur.com/VDkxULI.png" />
          <img src="http://i.imgur.com/VDkxULI.png"/>
          <a href="http://i.imgur.com/g22ZZ5T.png" />
          <img src="http://i.imgur.com/g22ZZ5T.png"/>
        </div>
        <div id="project-two-text">
        <p>FORGET ME NOT - A To Do List Application in Android</p>
        <p>FEATURES: Add a task as well as task details to the main task list. Save tasks using shared preferences and view all previously saved tasks. Swipe navigation.  </p>
        </div>
      </div>



      <div id="project-three">
        <div className='photo-viewer'>
          <a href= "http://i.imgur.com/Mex9eQX.png" />
          <img className='focus-photo' src="http://i.imgur.com/Mex9eQX.png"/>
        </div>
        <div className="thumbnail" onClick={props.handleThumbnailClick}>

          <a href="http://i.imgur.com/Sm0R5it.png"  />
          <img src="http://i.imgur.com/Sm0R5it.png"/>
          <a href="http://i.imgur.com/Mex9eQX.png" />
          <img src="http://i.imgur.com/Mex9eQX.png"/>
          <a href="http://i.imgur.com/qLzGJej.png" />
          <img src="http://i.imgur.com/qLzGJej.png"/>
        </div>
        <div id="project-two-text">
        <p>GROUP PROJECT: DIVER DASHBOARD - an application tailored for a submariners written in vanilla javaScript</p>
        <p>FEATURES: journal which handles CRUD actions through communicating with its related database.  Displays previous time stamped entries in a dropdown. Access to Google news API with information displayed in a content viewer. Access to Google Maps API to display current location of user.  Date and time widget which continually updates. Sonar sound and Minesweeper for ultimate imersion.  </p>
        </div>
      </div>








    </div>
    )
}



export default Project;