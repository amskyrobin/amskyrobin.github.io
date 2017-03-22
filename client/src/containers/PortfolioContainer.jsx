import React from 'react';
import Header from '../Components/Header.jsx';
import TitleScreen from '../Components/TitleScreen.jsx';
import Project from '../Components/Project.jsx';
import SketchBook from '../Components/SketchBook.jsx';
import AboutMe from "../Components/AboutMe.jsx";


class PortfolioContainer extends React.Component {

  constructor(props){
    super(props)
    this.handleThumbnailClick = this.handleThumbnailClick.bind(this);
  }

  handleThumbnailClick (event) {
    const focusPicture = document.getElementById('focus-photo')
    const thumbnail = document.getElementById('thumbnail')

        console.log("im being clicked - " + event.target.src)
 
      if(event.target.tagName === "IMG"){
        focusPicture.src = event.target.src;
        console.log("Inside the if statement")
      }
    }


    tumblrRequest(){

    }

  render () {
    return (
      <div>
        <Header />
        <TitleScreen />
        <Project 
        handleThumbnailClick ={this.handleThumbnailClick}
        />
        <SketchBook />
      </div>
      )
  }
}

export default PortfolioContainer;