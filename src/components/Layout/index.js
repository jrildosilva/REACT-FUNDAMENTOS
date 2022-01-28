import React from 'react';
import PropTypes from 'prop-types';
import Header from '../Header';
import PostsList from '../PostsList';
import Footer from '../Footer';


export default function Layout({ 
      onToggleTheme,  selectedTheme,
       
    }) {
     
     
     
     return (
        <>
          <Header 
            onToggleTheme={onToggleTheme} 
            selectedTheme={selectedTheme}
          />
          <PostsList />
          <Footer 
            onToggleTheme={onToggleTheme} 
            selectedTheme={selectedTheme}
          />
         
        </>
    );
}

Layout.propTypes = {
  selectedTheme: PropTypes.string.isRequired,
};
