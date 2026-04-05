import { CheckCircle } from 'lucide-react';

const Admissions = () => {
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

        <div className="grid-3 animate-fade-in-up delay-100">
          <div className="glass p-8 rounded-lg shadow-sm border border-border">
            <h3 className="mb-4 text-xl">1. Inquire</h3>
            <p className="text-text mb-4" style={{ fontWeight: 600, fontSize: '1.05rem' }}>
              Fill out our online inquiry form to receive more information about SRI KOTI E.M. HIGH SCHOOL and our programs.
            </p>
            <button className="btn btn-outline text-primary border-primary w-full">Request Info</button>
          </div>

          <div className="glass p-8 rounded-lg shadow-md border border-accent" style={{ transform: 'scale(1.05)' }}>
            <h3 className="mb-4 text-xl">2. Apply</h3>
            <p className="text-text mb-4" style={{ fontWeight: 600, fontSize: '1.05rem' }}>
              Submit your online application along with required transcripts, recommendations, and standardized test scores.
            </p>
            <button className="btn btn-primary w-full">Start Application</button>
          </div>

          <div className="glass p-8 rounded-lg shadow-sm border border-border">
            <h3 className="mb-4 text-xl">3. Visit</h3>
            <p className="text-text mb-4" style={{ fontWeight: 600, fontSize: '1.05rem' }}>
              Schedule a campus tour or attend an open house to experience our community firsthand.
            </p>
            <button className="btn btn-outline text-primary border-primary w-full">Schedule Visit</button>
          </div>
        </div>

        <div className="mt-16 glass p-8 rounded-lg shadow-md animate-fade-in-up delay-200">
          <h2 className="mb-6 text-center">Important Deadlines</h2>
          <ul className="space-y-4 max-w-2xl mx-auto">
            <li className="flex items-center gap-4">
              <CheckCircle className="text-accent" />
              <div>
                <strong>Early Action Application Deadline:</strong> November 1
              </div>
            </li>
            <li className="flex items-center gap-4">
              <CheckCircle className="text-accent" />
              <div>
                <strong>Regular Decision Application Deadline:</strong> January 15
              </div>
            </li>
            <li className="flex items-center gap-4">
              <CheckCircle className="text-accent" />
              <div>
                <strong>Financial Aid Application Deadline:</strong> February 1
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Admissions;
