import { Link, useLocation } from 'react-router-dom';
import { School, Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => setIsOpen(false);

  return (
    <header className={`navbar ${scrolled ? 'navbar-scrolled glass-dark' : ''}`}>
      <div className="container navbar-container">
        <Link to="/" className="navbar-logo" onClick={closeMenu} style={{ alignItems: 'center' }}>
          <img src={`${import.meta.env.BASE_URL}logo.png`} alt="SRI KOTI E.M. HIGH SCHOOL Logo" className="logo-img" />
          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <span style={{ lineHeight: 1 }}>SRI KOTI E.M. HIGH SCHOOL</span>
            <span style={{ fontFamily: '"Times New Roman", Times, serif', fontStyle: 'italic', fontSize: '0.85rem', fontWeight: 400, opacity: 0.9, marginTop: '2px' }}>Learning for Life</span>
          </div>
        </Link>
        
        {/* Desktop Menu */}
        <nav className="navbar-menu desktop-menu">
          <Link to="/" className={location.pathname === '/' ? 'active' : ''}>Home</Link>
          <Link to="/student-life" className={location.pathname === '/student-life' ? 'active' : ''}>Student Life</Link>
          <Link to="/about" className={location.pathname === '/about' ? 'active' : ''}>About</Link>
          <Link to="/admissions" className={location.pathname === '/admissions' ? 'active' : ''}>Admissions</Link>
          <Link to="/contact" className={location.pathname === '/contact' ? 'active' : ''}>Contact</Link>
          <button className="btn btn-primary ml-auto">Apply Now</button>
        </nav>

        {/* Mobile Toggle */}
        <button className="mobile-toggle" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`mobile-menu glass-dark ${isOpen ? 'open' : ''}`}>
        <nav className="mobile-nav">
          <Link to="/" onClick={closeMenu}>Home</Link>
          <Link to="/student-life" onClick={closeMenu}>Student Life</Link>
          <Link to="/about" onClick={closeMenu}>About</Link>
          <Link to="/admissions" onClick={closeMenu}>Admissions</Link>
          <Link to="/contact" onClick={closeMenu}>Contact</Link>
          <button className="btn btn-primary mt-4" onClick={closeMenu}>Apply Now</button>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
