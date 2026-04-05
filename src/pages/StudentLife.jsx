const StudentLife = () => {
  return (
    <div className="page-wrapper pt-32 pb-16">
      <div className="container">
        <div className="text-center mb-12 animate-fade-in-up">
          <h1>Student Life</h1>
          <div className="divider"></div>
        </div>
        
        <div className="glass p-8 rounded-lg shadow-md border border-border animate-fade-in-up delay-100">
          <h2 className="mb-6 text-primary">Culturals</h2>
          <div className="grid-3 items-center" style={{ gap: '3rem' }}>
            <div style={{ gridColumn: 'span 2' }}>
              <p className="text-text mb-4" style={{ fontWeight: 600, fontSize: '1.05rem' }}>
                Our cultural programs are a vibrant cornerstone of student life at SRI KOTI E.M. HIGH SCHOOL.
                Students are seamlessly encouraged to celebrate diversity and showcase their immense artistic 
                talents through music, dance, drama, and fine arts.
              </p>
              <p className="text-text" style={{ fontWeight: 600, fontSize: '1.05rem' }}>
                Annual cultural fests, dynamic clubs, and regular campus events provide the perfect 
                platform for boundless creative expression and building lifelong memories together.
              </p>
            </div>
            <div>
              <img 
                src="/culturals.jpeg" 
                alt="Student Culturals" 
                className="rounded-lg shadow-md w-full h-auto object-cover"
                style={{ aspectRatio: '1391 / 680' }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentLife;
