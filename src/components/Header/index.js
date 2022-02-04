import React, { Component, useContext } from 'react';
import { useHistory } from 'react-router-dom';

import { ThemeContext} from '../../contexts/ThemeContext';

import { Container } from './styles';
export default class Header extends Component {
  
  handleNavigate = ()=> { 
    this.props.history.push('/');
};
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
          <button onClick={this.handleNavigate} style={{color: '#fff'}}>
                Voltar para minha lista home
                </button>
         </Container>
        )}
      </ThemeContext.Consumer>
    );
  }

}





