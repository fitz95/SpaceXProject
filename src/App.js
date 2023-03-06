import { Routes, Route, Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';
import Profile from './components/Profile';

function App() {
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
