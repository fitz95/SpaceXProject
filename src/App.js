import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Routes, Route, Outlet } from 'react-router-dom';

import Navbar from './components/Navbar';
import { fetchMissions } from './redux/missionsSlice';

function App() {
  const dispatch = useDispatch();
  const missions = useSelector((state) => state.missions);

  useEffect(() => {
    dispatch(fetchMissions());
  }, [dispatch]);

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<div>Home</div>} />
        <Route path="/missions" element={<div>Mission</div>} />
        <Route path="/my-profile" element={<div>My Profile</div>} />
      </Routes>
      <Outlet />
    </>
  );
}

export default App;
