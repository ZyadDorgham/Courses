import { FaSearch, FaUserCircle, FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import './Navbar.css';
import { memo } from 'react';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-brand">
          <span className="brand-icon">📚</span>
          <span className="brand-name">EduCourses</span>
        </div>

        <div className="nav-links">
          <Link to="/" className="nav-link active">Home</Link>
          <Link to="/courses" className="nav-link">Courses</Link>
          <Link to="/category" className="nav-link">Categories</Link>
          <Link to="/details" className="nav-link">Course Details</Link>
          <Link to="/dashboard" className="nav-link">Dashboard</Link>
        </div>

        <div className="navbar-actions">
          <button className="profile-btn" aria-label="Profile">
            <FaUserCircle />
          </button>
          <button className="mobile-menu-btn" aria-label="Menu" onClick={toggleMenu}>
            <FaBars />
          </button>
        </div>
      </div>

      <div className={`mobile-menu ${isMobileMenuOpen ? 'open' : ''}`}>
        <div className="mobile-menu-header">
          <span className="brand-name">EduCourses</span>
          <button className="mobile-close-btn" aria-label="Close menu" onClick={closeMenu}>
            <FaTimes />
          </button>
        </div>
        <div className="mobile-nav-links">
          <Link to="/" className="mobile-nav-link active" onClick={closeMenu}>Home</Link>
          <Link to="/courses" className="mobile-nav-link" onClick={closeMenu}>Courses</Link>
          <Link to="/categories" className="mobile-nav-link" onClick={closeMenu}>Categories</Link>
          <Link to="/my-courses" className="mobile-nav-link" onClick={closeMenu}>My Course Details</Link>
          <Link to="/wishlist" className="mobile-nav-link" onClick={closeMenu}>Wishlist</Link>
          <Link to="/dashboard" className="mobile-nav-link" onClick={closeMenu}>Dashboard</Link>
        </div>
        <div className="mobile-actions">
          <button className="mobile-search-btn" onClick={closeMenu}>
            <FaSearch /> Search
          </button>
          <button className="mobile-profile-btn" onClick={closeMenu}>
            <FaUserCircle /> Profile
          </button>
        </div>
      </div>
    </nav>
  );
};

export default memo(Navbar);