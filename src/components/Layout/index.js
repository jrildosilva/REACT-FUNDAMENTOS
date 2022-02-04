import React from 'react';
import { BrowserRouter, Link } from 'react-router-dom';
import Header from '../Header';

import Footer from '../Footer';

import Routes from '../../Routers';

import { Nav } from './styles';

export default function Layout() {
  return (
    <BrowserRouter>
      <Header />
      <Nav>
        <Link to="/">Home</Link>
        <Link to="/posts">Posts</Link>
        <Link to="/posts/1232244555">Post</Link>
      </Nav>
      <Routes />
      <Footer />
    </BrowserRouter>
);
}


