import React from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';

import GlobalStyle from './styles/global';
import Layout from './components/Layout';
import {ThemeProvider, ThemeContext } from './contexts/ThemeContext';
import themes from './styles/themes';

class App extends React.Component {
      render() {      
       return (
            <ThemeProvider>
               <ThemeContext.Consumer>
                 {({ theme,handleToggleTheme, }) => (
                   < StyledThemeProvider theme={themes[theme] || themes.dark}>
                   <GlobalStyle />
                   <Layout 
                     onToggleTheme={handleToggleTheme}
                     selectedTheme={theme}
                   /> 
                </ StyledThemeProvider >
                 )}

               </ThemeContext.Consumer>     
            </ThemeProvider>
         );
    }
}



export default App;
 

    

   

    
           
              
        
   

   