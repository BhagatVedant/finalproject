import React from 'react';
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/navBar';
import ScrollFix from './components/scrollFix';
import Home from './pages/home';
import Childcare from './pages/childcare';
import Activities from './pages/activities';
import Support from './pages/support';
import Preschool from './pages/preschool';
import Concerns from './pages/concerns';
import Activity from './pages/activity';
import NoPage from './pages/noPage';
import './App.css';


function App() {
    return (
        <div className="App">
            <NavBar />
            
            <ScrollFix />

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/childcare" element={<Childcare />} />
                <Route path="/activities" element={<Activities />} />
                <Route path="/support" element={<Support />} />
                <Route path="/preschool" element={<Preschool />} />
                <Route path="/concerns" element={<Concerns />} />
                <Route path="/:activityID" element={<Activity />} />
                <Route path="*" element={<NoPage />} />
            </Routes>
        </div>
    );
    
}

export default App;