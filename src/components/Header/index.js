import React, { Component } from 'react';


import { Container } from './styles';
export default class Header extends Component {
  render() {
    const { onToggleTheme, seLectedTheme } = this.props;
    return (
      <Container>
        <h1>JSRildo'S Blog </h1>
         <button 
         type="button" 
         onClick={onToggleTheme}
         >
            {seLectedTheme === 'dark' ? '🌞' : '😎'}
          
        </button>
       
       </Container>
    );
  }

}
//export default function Header({onToggleTheme, selectedTheme }) {
      
   //    );
//}





