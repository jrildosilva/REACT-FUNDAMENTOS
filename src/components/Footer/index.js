import React,{ useContext } from 'react';


import { ThemeContext } from '../../contexts/ThemeContext';
import { Container } from './styles';

export default function Footer() {
    const { theme, handleToggleTheme } = useContext(ThemeContext);

    return (
      
        <Container>
           <span>JSRildo's Blog, tudo posso quando quero</span>
           <button 
           type="button"
           onClick={handleToggleTheme}
           >
             {theme == 'dark' ? '🌞' : '😎'}
           </button>
        </Container>
    );
}