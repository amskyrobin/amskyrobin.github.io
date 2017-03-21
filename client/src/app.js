import React from 'react';
import ReactDOM from 'react-dom';
import PortfolioContainer from './Containers/PortfolioContainer.jsx';


window.onload = function() {
  ReactDOM.render(
    <PortfolioContainer />, 
    document.getElementById('app')
    )
}
