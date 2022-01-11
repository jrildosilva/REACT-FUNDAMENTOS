import React from 'react';

import { Container } from './styles';

export default function Header({onToggletheme, selectedTheme}) {
       return (
           <Container>
             <h1>JSRildo'S Blog </h1>
             <button 
             type="button" 
             onClick={onToggletheme}
             >
                 {selectedTheme === 'dark' ? '🌞' : ''}
              
             </button>
           
           </Container>
       );
}





