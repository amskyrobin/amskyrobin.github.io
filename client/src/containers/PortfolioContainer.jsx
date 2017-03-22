import React from 'react';
import Header from '../Components/Header.jsx';
import TitleScreen from '../Components/TitleScreen.jsx';
import Project from '../Components/Project.jsx';


class PortfolioContainer extends React.Component {

  constructor(props){
    super(props)
    this.handleThumbnailClick = this.handleThumbnailClick.bind(this);
  }

  handleThumbnailClick (event) {
    const focusPicture = document.getElementById('photo-viewer')
    const thumbnail = document.getElementById('thumbnail')

 
      if(event.target.tagName == "img"){
        focusPicture.src = event.target.src;
        console.log("im being clicked")
      }
    }

  render () {
    return (
      <div>
        <Header />
        <TitleScreen />
        <Project 
        handleThumbnailClick ={this.handleThumbnailClick}
        />
      </div>
      )
  }
}

export default PortfolioContainer;