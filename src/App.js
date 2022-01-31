import React from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';

import GlobalStyle from './styles/global';
import Layout from './components/Layout';
import {ThemeProvider, ThemeContext } from './contexts/ThemeContext';
import themes from './styles/themes';

class App extends React.Component {
     state = {
       changed: false,
     };
      componentDidMount() {
        console.log('componentDidMount executed');
      }

      componentDidUpdate(prevProps, prevState ) {
           console.log('componentUpdate',{
              currentState: this.state,
              prevState,
              prevProps,

           });
      }
      componentDidCatch(error, info) {
        console.log('I cam, eu acredito',{error, info});
      }
      
      shouldComponentUpdate(nextProps, nextState) {
        console.log('shouldCoponentUpdate',{
          currentState: this.state,
          nextState,
          nextProps,
        });
        return true;
      }

      componentWillUnmount() {

      }

      render() { 
        console.log(' Método renderizou: tudo posso quando quero');     
       return (
            <ThemeProvider>
               <ThemeContext.Consumer>
                 {({ theme, handleToggleTheme}) => (
                  < StyledThemeProvider theme={themes[theme] || themes.dark}>
                     <GlobalStyle />
                     <button onClick={handleToggleTheme}>
                       Change state
                     </button>
                      { theme === 'dark' &&  <Layout /> }
                      <br/><br/><br/><br/><br/><br/><br/><br/><br/>
                      <br/><br/><br/><br/><br/><br/><br/><br/><br/>
                      <br/><br/><br/><br/><br/><br/><br/><br/><br/>
                      <br/><br/><br/><br/><br/><br/><br/><br/><br/>
                      <br/><br/><br/><br/><br/><br/><br/><br/><br/>
                      <br/><br/><br/><br/><br/><br/><br/><br/><br/>
                </ StyledThemeProvider >
              )}

               </ThemeContext.Consumer>     
            </ThemeProvider>
         );
    }
}



export default App;
 

    

   

    
           
              
        
   

   