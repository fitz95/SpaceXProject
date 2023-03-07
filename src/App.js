import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Routes, Route, Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';
import { fetchMissions } from './redux/missionsSlice';
import { fetchRockets } from './redux/rocketsSlice';
import Profile from './components/Profile';
import RocketLists from './components/RocketLists';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMissions());
    dispatch(fetchRockets());
  }, [dispatch]);

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<RocketLists />} />
        <Route path="/missions" element={<div>Mission</div>} />
        {/* <Route path="/rockets" element={<RocketLists />} /> */}
        <Route path="/my-profile" element={<Profile />} />
      </Routes>
      <Outlet />
    </>
  );
}

export default App;
