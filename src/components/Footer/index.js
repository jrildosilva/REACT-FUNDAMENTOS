import React from 'react';

import { Container } from './styles';

export default function Footer({ onToggleTheme, selectedTheme }) {
    return (
        <Container>
           <span>JSRildo's Blog, tudo posso quando quero</span>
           <button 
           type="button"
           onClick={onToggleTheme}
           >
             {selectedTheme == 'dark' ? '🌞' : '😎'}
           </button>
        </Container>
    );
}