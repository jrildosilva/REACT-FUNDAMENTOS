import React from 'react';

import { Container } from './styles';

export default function Footer({ onToggletheme }) {
    return (
        <Container>
           <span>JSRildo's Blog, tudo posso quando quero</span>
           <button 
           type="button"
           onClick={onToggletheme}
           >
            🌞
           </button>
        </Container>
    );
}