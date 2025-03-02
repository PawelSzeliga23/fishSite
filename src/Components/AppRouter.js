import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';  
import About from './About';
import Header from './Header';
import Login from './Login';

const AppRouter = () => {
    return (
        <Router>
            <div>asdaisdgasdg</div>
            <Header /> 
            <Routes>
                <Route path="/" element={<Home />} /> 
                <Route path="/about" element={<About />} />                
                <Route path="/login" element={<Login />} />                
            </Routes>
        </Router>
    );
};

export default AppRouter;