import { ArrowRight, BookOpen, Users, Trophy } from 'lucide-react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-overlay"></div>
        <div className="container hero-content">
          <h1 className="hero-title animate-fade-in-up">Empowering Minds,<br />Inspiring Futures</h1>
          <p className="hero-subtitle animate-fade-in-up delay-100">
            Join a community dedicated to academic excellence and character development.
          </p>
          <div className="hero-actions animate-fade-in-up delay-200">
            <Link to="/admissions" className="btn btn-primary">
              Begin Your Journey <ArrowRight size={20} className="ml-2" />
            </Link>
            <Link to="/about" className="btn btn-outline ml-4">
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features py-8">
        <div className="container">
          <div className="text-center mb-12">
            <h2>Why Choose SRI KOTI E.M. HIGH SCHOOL?</h2>
            <div className="divider"></div>
          </div>
          
          <div className="grid-3 features-grid">
            <div className="feature-card glass">
              <div className="feature-icon bg-primary-light">
                <BookOpen size={32} className="text-accent" />
              </div>
              <h3>Rigorous Academics</h3>
              <p>Our curriculum is designed to challenge and engage students, preparing them for top-tier universities.</p>
            </div>

            <div className="feature-card glass">
              <div className="feature-icon bg-primary-light">
                <Users size={32} className="text-accent" />
              </div>
              <h3>Exceptional Faculty</h3>
              <p>Learn from passionate educators dedicated to nurturing each student's unique potential.</p>
            </div>

            <div className="feature-card glass">
              <div className="feature-icon bg-primary-light">
                <Trophy size={32} className="text-accent" />
              </div>
              <h3>Holistic Development</h3>
              <p>We emphasize arts, athletics, and leadership alongside academic achievement.</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="cta-section py-8">
        <div className="container text-center cta-content glass-dark">
          <h2>Ready to Take the Next Step?</h2>
          <p className="mb-8">Applications are now open for the upcoming academic year.</p>
          <Link to="/admissions" className="btn btn-primary btn-lg">Apply Today</Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
