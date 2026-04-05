const About = () => {
  return (
    <div className="page-wrapper pt-32 pb-16">
      <div className="container">
        <div className="text-center mb-12 animate-fade-in-up">
          <h1>About Our Academy</h1>
          <div className="divider"></div>
        </div>

        {/* Our History — side-by-side: text left, image right */}
        <div className="animate-fade-in-up delay-100" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', alignItems: 'center', marginBottom: '4rem' }}>
          <div>
            <h2 className="mb-4">Our History</h2>
            <p className="mb-4 text-text" style={{ fontWeight: 600, fontSize: '1.05rem' }}>
              Established in 2016, SRI KOTI E.M. HIGH SCHOOL is dedicated to cultivating a tradition of excellence, 
              preparing our students for impactful lives of purpose, service, and leadership. Over the past decade, 
              we have continuously adapted to the dynamic challenges of our modern world, all while staying deeply 
              rooted in our foundational core values.
            </p>
            <p className="text-text" style={{ fontWeight: 600, fontSize: '1.05rem' }}>
              Situated in the heart of Learning Village, our campus offers a vibrant and deeply inspiring 
              environment. Here, every student is encouraged to boldly explore their passions, innovate, 
              and unlock their boundless potential.
            </p>
          </div>

          {/* Image fills container at a consistent height */}
          <div style={{ borderRadius: '0.75rem', overflow: 'hidden', boxShadow: '0 8px 32px rgba(0,0,0,0.18)', height: '360px' }}>
            <img
              src={`${import.meta.env.BASE_URL}history.jpeg`}
              alt="Campus History"
              style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
            />
          </div>
        </div>

        {/* Our Mission — full width card below */}
        <div className="glass p-8 rounded-lg border border-border animate-fade-in-up delay-200">
          <h2 className="mb-4 text-center">Our Mission</h2>
          <p className="font-heading text-xl italic text-primary-light text-center max-w-3xl mx-auto">
            "To inspire a lifelong love of learning, foster intellectual curiosity, 
            and cultivate the character necessary to lead and serve in a global society."
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;

