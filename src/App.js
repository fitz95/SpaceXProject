import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Routes, Route, Outlet } from 'react-router-dom';

import Navbar from './components/Navbar';
import { fetchMissions } from './redux/missionsSlice';
import Profile from './components/Profile';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMissions());
  }, [dispatch]);

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<div>Home</div>} />
        <Route path="/missions" element={<div>Mission</div>} />
        <Route path="/my-profile" element={<Profile />} />
      </Routes>
      <Outlet />
    </>
  );
}

export default App;