import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/navBar';
import Home from './pages/home';
import Childcare from './pages/childcare';
import Activities from './pages/activities';
import Support from './pages/support';
import Preschool from './pages/preschool';
import Concerns from './pages/concerns';
import './App.css';

function App() {
    return (
        <div className="App">
            <NavBar />
            
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/childcare" element={<Childcare />} />
                <Route path="/activities" element={<Activities />} />
                <Route path="/support" element={<Support />} />
                <Route path="/preschool" element={<Preschool />} />
                <Route path="/concerns" element={<Concerns />} />
            </Routes>
        </div>
    );
    
}

export default App;