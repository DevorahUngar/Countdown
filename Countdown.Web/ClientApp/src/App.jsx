import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './Pages/Home';
import CalendarThingy from './Pages/Calendar1';
import ReactCalendar from './Pages/Calendar1';

const App = () => {
    return (
        <Layout>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/calendar' element={<ReactCalendar />} />
            </Routes>
        </Layout>
    );
}

export default App;