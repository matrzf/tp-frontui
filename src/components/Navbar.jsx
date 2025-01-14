import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

export default function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    // Vérifie si un token est présent dans le localStorage
    const token = localStorage.getItem('token');
    setIsLoggedIn(!!token);
  }, [location]);

  const handleLogout = () => {
    localStorage.removeItem('token');
    setIsLoggedIn(false);
    navigate('/login');
  };

  // N'affiche pas la Navbar sur les pages login et register
  if (location.pathname === '/login' || location.pathname === '/register') {
    return null;
  }

  return (
    <div className="navbar">
      <div className="nb-element1">
        <h1>Final Project</h1>
      </div>
      <div className="nb-element2">
        {isLoggedIn && <button className='button-log-out' onClick={handleLogout}>Log out</button>}
      </div>
    </div>
  );
}
