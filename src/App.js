import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'


import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle.js'


const Home = lazy(() => import('./pages/Home'))
const About = lazy(() => import('./pages/About'))
const Contact = lazy(() => import('./pages/Contact'))
const Project = lazy(() => import('./pages/Project'))
const Expertise = lazy(() => import('./pages/Expertise'))



function App() {
  
  return (
    <Suspense>

      <BrowserRouter>

        <Routes>

          <Route path='/' element={<Home />} />
          <Route path='/About' element={<About />} />
          <Route path='/Contact' element={<Contact />} />
          <Route path='/Project' element={<Project />} />
          <Route path='/Expertise' element={<Expertise />} />
          
         


        </Routes>
      </BrowserRouter>
    </Suspense>
  );
}

export default App;
