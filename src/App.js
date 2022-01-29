import React from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';

import GlobalStyle from './styles/global';
import Layout from './components/Layout';
import {ThemeProvider, ThemeContext } from './contexts/ThemeContext';
import themes from './styles/themes';

class App extends React.Component {
     state = {
       change: false,
     };
      componentDidMount() {
        console.log('componentDidMount executed');
      }



      render() { 
        console.log(' josé Rildo diz: tudo posso quando quero');     
       return (
            <ThemeProvider>
               <button onClick={() => this.setState({changed: true})}>Change state</button>
               <ThemeContext.Consumer>
                 {({ theme}) => (
                  < StyledThemeProvider theme={themes[theme] || themes.dark}>
                     <GlobalStyle />
                     <Layout /> 
                  </ StyledThemeProvider >
                 )}

               </ThemeContext.Consumer>     
            </ThemeProvider>
         );
    }
}



export default App;
 

    

   

    
           
              
        
   

   