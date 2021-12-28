import React from 'react';

import Post  from './Post';

import Header from './Header';

const posts = [
   { title: 'Title#01', subtitle: 'Sub#01', likes: 20},
   { title: 'Title#02', subtitle: 'Sub#02', likes: 10},
   { title: 'Title#03', subtitle: 'Sub#03', likes: 50},
   { title: 'Title#04', subtitle: 'Sub#04', likes: 75},
   { title: 'Title#05', subtitle: 'Sub#05', likes: 52},
];





function App() {
    return (
        <>
            <Header>
               <h2>Posts da semana</h2>
            </Header>

            <hr />

          {posts.map(post => (
              
              <Post
                key={post.title}
                likes= {post.likes}
                post={{
                    title: post.title,
                    subtitle: post.subtitle,
                }}
                />
          ))}   
        </> 


    );
}


export default App;
