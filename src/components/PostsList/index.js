import React from 'react';

import { Container } from './styles';
import Post from './Post';

import posts from './posts';

export default function PostsList () {
    
      return (
        
        <Container >

                {posts.map((post) => (
                  <Post
                     Key= {post.id}
                     title= {post.title}
                     decription={post.description}
                   />
                ))}
                 
          </Container>
          
        
        
        
    );
}



