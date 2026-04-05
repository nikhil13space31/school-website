import { Link } from 'react-router-dom';
import { School, MapPin, Phone, Mail, Lock } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer bg-primary text-surface">
      <div className="container footer-grid grid-3">
        <div className="footer-brand animate-fade-in-up">
          <div className="footer-logo mb-4" style={{ alignItems: 'center' }}>
            <img src={`${import.meta.env.BASE_URL}logo.png`} alt="SRI KOTI E.M. HIGH SCHOOL Logo" className="logo-img-footer" />
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <span className="font-heading text-xl" style={{ lineHeight: 1.1 }}>SRI KOTI E.M. HIGH SCHOOL</span>
              <span style={{ fontFamily: '"Times New Roman", Times, serif', fontStyle: 'italic', fontSize: '1rem', fontWeight: 400, opacity: 0.9, marginTop: '2px' }}>Learning for Life</span>
            </div>
          </div>
          <p className="text-text-light mb-4 text-sm max-w-sm">
            Nurturing the leaders of tomorrow through Knowledge, Obedience, Teaching, and Intelligence.
          </p>
        </div>
        
        <div className="footer-links animate-fade-in-up delay-100">
          <h3 className="text-surface mb-4">Quick Links</h3>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/admissions">Admissions</Link></li>
            <li><Link to="/student-life">Student Life</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
          </ul>
        </div>
        
        <div className="footer-contact animate-fade-in-up delay-200">
          <h3 className="text-surface mb-4">Contact Us</h3>
          <ul className="contact-info">
            <li>
              <div style={{ flexShrink: 0, marginTop: '2px' }}>
                <MapPin size={18} />
              </div>
              <a href="https://www.google.com/maps?q=16.795197910072975,82.16833339403435" target="_blank" rel="noopener noreferrer">
                Main Road, Kajuluru, Kakinada,<br />Andhra Pradesh - 533468
              </a>
            </li>
            <li>
              <div style={{ flexShrink: 0 }}>
                <Phone size={18} />
              </div>
              9949982532
            </li>
            <li>
              <div style={{ flexShrink: 0 }}>
                <Mail size={18} />
              </div>
              srikotiinstitutions@gmail.com
            </li>
          </ul>
          <div className="mt-6">
            <iframe 
              src="https://maps.google.com/maps?q=16.795197910072975,82.16833339403435&z=15&output=embed" 
              width="100%" 
              height="180" 
              style={{ border: 0, borderRadius: '8px' }} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="School Location Map">
            </iframe>
          </div>
        </div>
      </div>
      <div className="footer-bottom py-4 border-t border-white-10">
        <div className="container flex justify-between items-center text-sm text-text-light">
          <p>&copy; {new Date().getFullYear()} SRI KOTI E.M. HIGH SCHOOL. All rights reserved.</p>
          <Link to="/admin" className="flex items-center gap-1 opacity-60 hover:opacity-100 transition-opacity">
            <Lock size={14} /> Staff Login
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
