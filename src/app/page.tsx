'use client';

export default function Home() {
  return (
    <div className="dark:bg-zinc-900 dark:text-white bg-white text-black min-h-screen transition-colors duration-300">
      {/* Toggle Button for Dark Mode */}
      <button
        onClick={() => {
          document.documentElement.classList.toggle('dark');
        }}
        className="absolute top-4 right-4 px-4 py-2 bg-gray-800 text-white rounded z-50"
      >
        Toggle Dark Mode
      </button>

      {/* Navbar */}
      <nav style={{ position: 'sticky', top: 0, background: '#fff', padding: '1rem', boxShadow: '0 1px 4px rgba(0,0,0,0.1)', zIndex: 100 }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', display: 'flex', justifyContent: 'space-between' }}>
          <span style={{ fontWeight: 'bold', fontSize: '1.25rem' }}>AI CyberCoach</span>
          <div style={{ display: 'flex', gap: '1rem' }}>
            <a href="#features">Features</a>
            <a href="#how">How It Works</a>
            <a href="#cta">Join Waitlist</a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section style={{ padding: '4rem 1rem', textAlign: 'center', background: '#f5f5f7' }}>
        <h1 style={{ fontSize: '2.75rem', marginBottom: '1rem' }}>Your AI-Powered Cybersecurity Coach</h1>
        <p style={{ fontSize: '1.2rem', marginBottom: '1.5rem' }}>
          Adaptive Quizzes, Real-Time AI Support, and Guided Learning to Help You Pass Security+ and Beyond.
        </p>
        <a href="#cta" style={{ padding: '0.75rem 1.75rem', backgroundColor: '#0070f3', color: '#fff', borderRadius: '6px', textDecoration: 'none' }}>
          Join Waitlist
        </a>
      </section>

      {/* Feature Highlights */}
      <section id="features" style={{ padding: '2rem 1rem' }}>
  <div
    style={{
      maxWidth: '900px',
      margin: '0 auto',
      display: 'flex',
      justifyContent: 'space-between',
      flexWrap: 'nowrap',
      gap: '1.5rem',
      textAlign: 'center',
    }}
  >
    {['Adaptive Quizzes', 'Progress Tracking', 'AI Chat Support'].map((title) => (
      <div
        key={title}
        style={{
          flex: '1',
          minHeight: '180px',
          padding: '1.5rem',
          border: '1px solid #ddd',
          borderRadius: '8px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
        }}
      >
        <h3 style={{ fontSize: '1.5rem', marginBottom: '0.75rem', fontWeight: 'bold' }}>
          ✅ {title}
        </h3>
        <p style={{ fontSize: '1rem', margin: 0 }}>
          Brief description about {title.toLowerCase()}.
        </p>
      </div>
    ))}
  </div>
</section>


      {/* How It Works */}
      <section id="how" style={{ padding: '2rem 1rem', background: '#fafafa' }}>
        <div style={{ maxWidth: '700px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>How It Works</h2>
          <p style={{ fontSize: '1rem', lineHeight: 1.6 }}>
            Start with a free diagnostic quiz to assess your knowledge. The platform then crafts a personalized learning path,
            combining smart quizzes with AI chat explanations and spaced repetition. Only pay to unlock full content once you see the value.
          </p>
        </div>
      </section>

      {/* Call-to-Action */}
      <section id="cta" style={{ padding: '2rem 1rem', textAlign: 'center' }}>
        <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Ready to Learn Smarter?</h2>
        <p style={{ marginBottom: '1rem' }}>Join the waitlist and be first to get early access.</p>
        <a
          href="#"
          style={{
            padding: '0.75rem 1.5rem',
            backgroundColor: '#0070f3',
            color: '#fff',
            borderRadius: '6px',
            textDecoration: 'none',
          }}
        >
          Join Waitlist
        </a>
      </section>

      {/* Footer */}
      <footer style={{ padding: '1.5rem 1rem', textAlign: 'center', fontSize: '0.9rem', color: '#666' }}>
        © {new Date().getFullYear()} AI CyberCoach. All rights reserved.
      </footer>
    </div>
  );
}
