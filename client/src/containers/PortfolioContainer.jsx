import React from 'react';
import Header from '../Components/Header.jsx';
import TitleScreen from '../Components/TitleScreen.jsx';


class PortfolioContainer extends React.Component {

  constructor(props){
    super(props)
  }


  render () {
    return (
      <div>
        <Header />
        <TitleScreen />
      </div>
      )
  }
}

export default PortfolioContainer;