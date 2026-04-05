import { School, MapPin, Phone, Mail } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer bg-primary text-surface">
      <div className="container footer-grid grid-3">
        <div className="footer-brand animate-fade-in-up">
          <div className="footer-logo mb-4" style={{ alignItems: 'center' }}>
            <img src="/logo.png" alt="SRI KOTI E.M. HIGH SCHOOL Logo" className="logo-img-footer" />
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
            <li><a href="/about">About Us</a></li>
            <li><a href="/admissions">Admissions</a></li>
            <li><a href="/academics">Academics</a></li>
            <li><a href="/student-life">Student Life</a></li>
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
      <div className="footer-bottom text-center text-sm text-text-light py-4 border-t border-white-10">
        <p>&copy; {new Date().getFullYear()} SRI KOTI E.M. HIGH SCHOOL. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
