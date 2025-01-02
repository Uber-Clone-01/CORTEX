import React from 'react';
import { Route, Routes } from 'react-router-dom';
import 'aos/dist/aos.css'; 

import Home from './components/Home';

import LocomotiveScroll from 'locomotive-scroll';
import Login from './components/Login';
import Signup from './components/SignUp';
import Features from './components/Features';
import Contact from './components/Contact';
import About from './components/About';
import HomeScreen from './components/HomeScreen';
import Project from './components/Project';
import Whiteboard from './components/Whiteboard';

import { UserProvider } from './context/user.context'; 


function App() {
  const locomotiveScroll = new LocomotiveScroll();

  return (
    <UserProvider> {/* Wrap your routes with UserProvider */}
     
      <div className='w-full min-h-screen bg-zinc-900 text-white'>
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/features' element={<Features />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/about' element={<About />} />
          <Route path='/homescreen' element={<HomeScreen />} />
          <Route path='/home' element={<Home />} />
          <Route path='/project' element={<Project />} />
          <Route path='/whiteboard' element={<Whiteboard/>}/>
        </Routes>
       
      </div>
    </UserProvider> 
  );
}

export default App;




