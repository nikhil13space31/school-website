import { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Submitting...');
    try {
      const response = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        setStatus('Message Sent! We will reach out to you shortly.');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus('Failed to send message. Please try again.');
      }
    } catch (err) {
      console.error(err);
      setStatus('Network Error.');
    }
  };

  return (
    <div className="page-wrapper pt-32 pb-16">
      <div className="container">
        <div className="text-center mb-12 animate-fade-in-up">
          <h1>Contact Us</h1>
          <div className="divider"></div>
          <p className="mt-4 text-text max-w-2xl mx-auto" style={{ fontWeight: 600, fontSize: '1.1rem' }}>
            We'd love to hear from you. Please fill out the form below or reach us directly.
          </p>
        </div>

        <div className="grid-3 animate-fade-in-up delay-100" style={{ gap: '2rem' }}>
          
          {/* Contact Details */}
          <div className="glass p-8 rounded-lg shadow-sm border border-border">
            <h3 className="mb-6 text-xl text-primary">Get In Touch</h3>
            <ul className="space-y-6">
              <li className="flex items-center gap-4">
                <div className="bg-primary-light p-3 rounded-full text-white">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-bold">Our Campus</h4>
                  <p className="text-text font-medium">123 Education Lane, Learning Village</p>
                </div>
              </li>
              <li className="flex items-center gap-4">
                <div className="bg-primary-light p-3 rounded-full text-white">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="font-bold">Phone</h4>
                  <p className="text-text font-medium">+1 (555) 123-4567</p>
                </div>
              </li>
              <li className="flex items-center gap-4">
                <div className="bg-primary-light p-3 rounded-full text-white">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="font-bold">Email</h4>
                  <p className="text-text font-medium">admissions@srikoti.edu</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Contact Form */}
          <div className="glass p-8 rounded-lg shadow-md border border-accent" style={{ gridColumn: 'span 2' }}>
            <h3 className="mb-6 text-xl">Send a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid-2" style={{ gap: '1rem' }}>
                <div>
                  <label className="block text-sm font-bold mb-1">Full Name</label>
                  <input 
                    type="text" 
                    required 
                    className="w-full p-3 rounded bg-white/80 border border-gray-300 focus:outline-primary"
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold mb-1">Email Address</label>
                  <input 
                    type="email" 
                    required 
                    className="w-full p-3 rounded bg-white/80 border border-gray-300 focus:outline-primary"
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-bold mb-1">Message</label>
                <textarea 
                  required 
                  rows="5"
                  className="w-full p-3 rounded bg-white/80 border border-gray-300 focus:outline-primary"
                  placeholder="How can we help you?"
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                ></textarea>
              </div>
              
              <button disabled={status === 'Submitting...'} type="submit" className="btn btn-primary w-full flex items-center justify-center gap-2">
                <Send size={18} /> {status === 'Submitting...' ? 'Sending...' : 'Send Message'}
              </button>
              
              {status && status !== 'Submitting...' && (
                <div className={`mt-4 p-3 rounded text-center font-bold ${status.includes('Failed') || status.includes('Error') ? 'bg-red-100 text-red-700' : 'bg-green-100 text-green-700'}`}>
                  {status}
                </div>
              )}
            </form>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Contact;
