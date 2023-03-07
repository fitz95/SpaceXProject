import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Routes, Route, Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';
import { fetchMissions } from './redux/missionsSlice';
import { fetchRockets } from './redux/rocketsSlice';
import Profile from './components/Profile';
import RocketLists from './components/RocketLists';
import Missions from './pages/Missions';

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
        <Route path="/missions" element={<Missions />} />
        <Route path="/my-profile" element={<Profile />} />
      </Routes>
      <Outlet />
    </>
  );
}

export default App;
