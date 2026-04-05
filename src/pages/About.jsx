const About = () => {
  return (
    <div className="page-wrapper pt-32 pb-16">
      <div className="container">
        <div className="text-center mb-12 animate-fade-in-up">
          <h1>About Our Academy</h1>
          <div className="divider"></div>
        </div>
        
        <div className="grid-3 animate-fade-in-up delay-100">
          <div style={{ gridColumn: 'span 2' }}>
            <h2 className="mb-4">Our History</h2>
            <p className="mb-4 text-text" style={{ fontWeight: 600, fontSize: '1.05rem' }}>
              Established in 2016, SRI KOTI E.M. HIGH SCHOOL is dedicated to cultivating a tradition of excellence, 
              preparing our students for impactful lives of purpose, service, and leadership. Over the past decade, 
              we have continuously adapted to the dynamic challenges of our modern world, all while staying deeply 
              rooted in our foundational core values.
            </p>
            <p className="mb-8 text-text" style={{ fontWeight: 600, fontSize: '1.05rem' }}>
              Situated in the heart of Learning Village, our campus offers a vibrant and deeply inspiring 
              environment. Here, every student is encouraged to boldly explore their passions, innovate, 
              and unlock their boundless potential.
            </p>

            <h2 className="mb-4">Our Mission</h2>
            <div className="glass p-6 rounded-lg border border-border">
              <p className="font-heading text-xl italic text-primary-light">
                "To inspire a lifelong love of learning, foster intellectual curiosity, 
                and cultivate the character necessary to lead and serve in a global society."
              </p>
            </div>
          </div>
          
          <div>
              <img 
                src={`${import.meta.env.BASE_URL}history.jpeg`} 
                alt="Campus History" 
              className="rounded-lg shadow-md w-full h-auto object-cover"
              style={{ aspectRatio: '1391 / 680' }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
