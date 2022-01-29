import React, { Component, useContext } from 'react';

import { ThemeContext} from '../../contexts/ThemeContext';

import { Container } from './styles';
export default class Header extends Component {
  render() {
   return (
      <ThemeContext.Consumer>
        {(value) => (
          <Container>
          <h1>JSRildo'S Blog </h1>
            <button 
             type="button" 
             onClick={value.handleToggleTheme}
            >
              {value.theme === 'dark' ? '🌞' : '😎'}
            
          </button>
         
         </Container>
        )}
      </ThemeContext.Consumer>
    );
  }

}





