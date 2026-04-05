import { useState } from 'react';
import { CheckCircle, ExternalLink } from 'lucide-react';

const Admissions = () => {
  const [formData, setFormData] = useState({ studentName: '', parentName: '', email: '', phone: '', grade: '1st Standard', referredBy: '' });
  const [status, setStatus] = useState('');

  const handleApply = async (e) => {
    e.preventDefault();
    setStatus('Submitting...');
    try {
      const response = await fetch('http://localhost:5000/api/apply', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        setStatus('Application successfully submitted! We will contact you soon.');
        setFormData({ studentName: '', parentName: '', email: '', phone: '', grade: '1st Standard', referredBy: '' });
      } else {
        setStatus('Failed to submit. Please check your details.');
      }
    } catch (err) {
      console.error(err);
      setStatus('Network connection error.');
    }
  };

  return (
    <div className="page-wrapper pt-32 pb-16">
      <div className="container">
        <div className="text-center mb-12 animate-fade-in-up">
          <h1>Admissions</h1>
          <div className="divider"></div>
          <p className="mt-4 text-text max-w-2xl mx-auto" style={{ fontWeight: 600, fontSize: '1.1rem' }}>
            We are looking for students who are curious, motivated, and ready to contribute to our dynamic community.
          </p>
        </div>

        <div className="grid-3 animate-fade-in-up delay-100" style={{ gap: '2rem' }}>
          
          {/* Informational Cards */}
          <div className="space-y-6">
            <div className="glass p-6 rounded-lg shadow-sm border border-border">
              <h3 className="mb-2 text-xl">1. Inquire</h3>
              <p className="text-text max-w-md mx-auto" style={{ fontWeight: 600, fontSize: '1rem' }}>
                Reach out to schedule a call or request our upcoming information packet.
              </p>
            </div>
            
            <div className="glass p-6 rounded-lg shadow-sm border border-border">
              <h3 className="mb-2 text-xl">2. Visit Campus</h3>
              <p className="text-text max-w-md mx-auto" style={{ fontWeight: 600, fontSize: '1rem' }}>
                Experience our beautiful campus during our Open House events.
              </p>
            </div>

            <div className="mt-8 glass p-6 rounded-lg shadow-sm border border-accent">
              <h3 className="mb-4 text-xl">Important Deadlines</h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <CheckCircle size={18} className="text-accent" />
                  <span className="text-sm"><strong>Early Action:</strong> Nov 1</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle size={18} className="text-accent" />
                  <span className="text-sm"><strong>Regular Decision:</strong> Jan 15</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Actual Application Form */}
          <div className="glass p-8 rounded-lg shadow-md border border-accent" style={{ gridColumn: 'span 2' }}>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl">Official Application Form</h2>
              <ExternalLink className="text-primary" />
            </div>
            
            <form onSubmit={handleApply} className="space-y-4">
              <div className="grid-2" style={{ gap: '1rem' }}>
                <div>
                  <label className="block text-sm font-bold mb-1">Student's Full Name</label>
                  <input type="text" required className="w-full p-3 rounded bg-white/80 border border-gray-300 focus:outline-primary"
                    value={formData.studentName} onChange={(e) => setFormData({...formData, studentName: e.target.value})}
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold mb-1">Parent/Guardian Name</label>
                  <input type="text" required className="w-full p-3 rounded bg-white/80 border border-gray-300 focus:outline-primary"
                    value={formData.parentName} onChange={(e) => setFormData({...formData, parentName: e.target.value})}
                  />
                </div>
              </div>

              <div className="grid-2" style={{ gap: '1rem' }}>
                <div>
                  <label className="block text-sm font-bold mb-1">Parent Email</label>
                  <input type="email" required className="w-full p-3 rounded bg-white/80 border border-gray-300 focus:outline-primary"
                    value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})}
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold mb-1">Phone Number</label>
                  <input type="tel" required className="w-full p-3 rounded bg-white/80 border border-gray-300 focus:outline-primary"
                    value={formData.phone} onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold mb-1">Applying for Grade</label>
                <select className="w-full p-3 rounded bg-white/80 border border-gray-300 focus:outline-primary"
                  value={formData.grade} onChange={(e) => setFormData({...formData, grade: e.target.value})}
                >
                  <option>LKG</option>
                  <option>UKG</option>
                  <option>1st Standard</option>
                  <option>2nd Standard</option>
                  <option>3rd Standard</option>
                  <option>4th Standard</option>
                  <option>5th Standard</option>
                  <option>6th Standard</option>
                  <option>7th Standard</option>
                  <option>8th Standard</option>
                  <option>9th Standard</option>
                  <option>10th Standard</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-bold mb-1">Referred By (Optional)</label>
                <input type="text" className="w-full p-3 rounded bg-white/80 border border-gray-300 focus:outline-primary"
                  placeholder="Name of person or source"
                  value={formData.referredBy} onChange={(e) => setFormData({...formData, referredBy: e.target.value})}
                />
              </div>
              
              <button disabled={status === 'Submitting...'} type="submit" className="btn btn-primary w-full mt-4">
                {status === 'Submitting...' ? 'Processing...' : 'Submit Final Application'}
              </button>

              {status && status !== 'Submitting...' && (
                <div className={`mt-4 p-3 rounded text-center font-bold ${status.includes('Failed') || status.includes('error') ? 'bg-red-100 text-red-700' : 'bg-green-100 text-green-700'}`}>
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

export default Admissions;
