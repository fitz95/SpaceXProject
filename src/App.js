import { Routes, Route, Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';

function App() {
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
