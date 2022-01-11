import React from 'react';

import Header from '../Header';
import PostsList from '../PostsList';
import Footer from '../Footer';

export default function Layout({ 
    onToggletheme, 
    selectedTheme  
    }) {
    return (
        <>
          <Header 
            onToggletheme={onToggletheme} 
            selectedTheme={selectedTheme}
          />
          <PostsList />
          <Footer 
            onToggletheme={onToggletheme} 
            selectedTheme={selectedTheme}
          />
        
        </>
    );
}