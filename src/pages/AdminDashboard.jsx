import { useState, useEffect } from 'react';
import { Database, UserCheck, Mail } from 'lucide-react';

const AdminDashboard = () => {
  const [applications, setApplications] = useState([]);
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('applications');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [appRes, contRes] = await Promise.all([
          fetch('http://localhost:5000/api/admin/applications'),
          fetch('http://localhost:5000/api/admin/contacts')
        ]);
        
        const appData = await appRes.json();
        const contData = await contRes.json();
        
        setApplications(appData);
        setContacts(contData);
      } catch (err) {
        console.error('Failed to fetch admin data:', err);
      } finally {
        setLoading(false);
      }
    };
    
    fetchData();
  }, []);

  if (loading) {
    return <div className="pt-32 text-center pb-32"><h2>Loading Secure Dashboard...</h2></div>;
  }

  return (
    <div className="page-wrapper pt-32 pb-16">
      <div className="container max-w-5xl">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1>Admin Dashboard</h1>
            <p className="text-text mt-2" style={{ fontWeight: 600 }}>Staff Gateway for Managing School Inquiries</p>
          </div>
          <Database size={48} className="text-primary opacity-50" />
        </div>

        {/* Dashboard Tabs */}
        <div className="flex gap-4 mb-8">
          <button 
            className={`btn ${activeTab === 'applications' ? 'btn-primary' : 'btn-outline border-border'}`}
            onClick={() => setActiveTab('applications')}
          >
            <UserCheck size={18} className="inline mr-2" />
            Admission Applications ({applications.length})
          </button>
          <button 
            className={`btn ${activeTab === 'contacts' ? 'btn-primary' : 'btn-outline border-border'}`}
            onClick={() => setActiveTab('contacts')}
          >
            <Mail size={18} className="inline mr-2" />
            Contact Messages ({contacts.length})
          </button>
        </div>

        {/* Data Views */}
        <div className="glass p-6 rounded-lg shadow-md border border-border">
          {activeTab === 'applications' && (
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-border">
                    <th className="p-3">Student</th>
                    <th className="p-3">Parent</th>
                    <th className="p-3">Grade</th>
                    <th className="p-3">Referred By</th>
                    <th className="p-3">Contact</th>
                    <th className="p-3">Date</th>
                    <th className="p-3">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {applications.length === 0 ? (
                    <tr><td colSpan="7" className="p-4 text-center">No applications received yet.</td></tr>
                  ) : (
                    applications.map(app => (
                      <tr key={app.id} className="border-b border-border opacity-90 hover:opacity-100">
                        <td className="p-3 font-bold">{app.studentName}</td>
                        <td className="p-3">{app.parentName}</td>
                        <td className="p-3">{app.grade}</td>
                        <td className="p-3">{app.referredBy || '-'}</td>
                        <td className="p-3">
                          <div className="text-sm">{app.email}</div>
                          <div className="text-sm text-text-light">{app.phone}</div>
                        </td>
                        <td className="p-3 text-sm">{new Date(app.submittedAt).toLocaleDateString()}</td>
                        <td className="p-3">
                          <span className="bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded font-bold">{app.status}</span>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          )}

          {activeTab === 'contacts' && (
            <div className="space-y-4">
              {contacts.length === 0 ? (
                <div className="p-4 text-center">No messages received yet.</div>
              ) : (
                contacts.map(msg => (
                  <div key={msg.id} className="p-4 rounded border border-border bg-white/50">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h4 className="font-bold">{msg.name}</h4>
                        <a href={`mailto:${msg.email}`} className="text-primary text-sm">{msg.email}</a>
                      </div>
                      <span className="text-xs text-text-light">{new Date(msg.submittedAt).toLocaleDateString()}</span>
                    </div>
                    <p className="whitespace-pre-wrap">{msg.message}</p>
                  </div>
                ))
              )}
            </div>
          )}
        </div>

      </div>
    </div>
  );
};

export default AdminDashboard;
