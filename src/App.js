import React from 'react';

import Post  from './Post';

import Header from './Header';





function App() {
    return (
        <>
            <Header>
               <h2>Posts da semana</h2>
            </Header>

            <hr />

            <Post 
              likes= {20} 
              post={ {
                
                title: 'Título da notícia 01 ',
                subtitle: 'Subtitulo da notícia 01',
            } }
            />  

           <Post
             likes= {10}  
             post={ {
                title: 'Título da notícia 02',
                subtitle: 'Subtitulo da notícia 02',
            } }
           
            />    

           <Post 
              likes= {50} 
              post={ {
                title: 'Título da notícia 03',
                subtitle: 'Subtitulo da notícia 03',
            } }
           
            />

           
            
        </>
    );
}


export default App;
