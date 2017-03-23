import React from 'react';
import Header from '../Components/Header.jsx';
import TitleScreen from '../Components/TitleScreen.jsx';
import Project from '../Components/Project.jsx';
import SketchBook from '../Components/SketchBook.jsx';
import AboutMe from "../Components/AboutMe.jsx";
import Contact from "../Components/Contact.jsx";





class PortfolioContainer extends React.Component {

  constructor(props){
    super(props)
    this.handleThumbnailClick = this.handleThumbnailClick.bind(this);
    this.state = {tumblrData: []}
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
      const request = new XMLHttpRequest();
      request.open('GET', "https://api.tumblr.com/v2/blog/ulalalol.tumblr.com/posts/photo?api_key=Y4MWOe7dLGpGuJ60KLVgOM17kIzzvzYTQaHtLvzhPkqyKiGKZp");
      
      request.onload = () => {
        if (request.status !== 200) return;{
          var jsonString = request.responseText;
          var tumblrResponse = JSON.parse(jsonString);
          console.log(tumblrResponse)
          this.setState({tumblrData: tumblrResponse}) 
      }
    }
    request.send()
  }

  render () {
    return (
      <div>
        <Header />
        <TitleScreen />
        <AboutMe />
        <Project 
        handleThumbnailClick ={this.handleThumbnailClick}
        />
        <Contact />

      </div>
      )
  }
}

export default PortfolioContainer;