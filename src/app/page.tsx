'use client';

export default function Home() {
  return (
    <div className="dark:bg-zinc-900 dark:text-white bg-white text-black min-h-screen transition-colors duration-300">
      

      {/* Navbar */}
      <nav style={{ position: 'sticky', top: 0, background: '#fff', padding: '1rem', boxShadow: '0 1px 4px rgba(0,0,0,0.1)', zIndex: 100 }}>
        <div className="max-w-7xl mx-auto flex justify-between px-4">
          <span style={{ fontWeight: 'bold', fontSize: '1.50rem' }}>AI CyberCoach</span>
          <div style={{ display: 'flex', gap: '1.5rem' }}>
            <a href="#signup">Sign up</a>
            <a href="#how">Log in</a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section style={{ padding: '4rem 1rem', textAlign: 'center', background: '#f5f5f7' }}>
        <h1 style={{ fontSize: '2.75rem', marginBottom: '1rem' }}>Your AI-Powered Cybersecurity Coach</h1>
        <p style={{ fontSize: '1.2rem', marginBottom: '1.5rem' }}>
          The Smarter Way to Pass CompTIA Security+ SY0-701 — AI-Powered Support. Zero Guesswork. Real Results.
        </p>
        <a href="#cta" style={{ padding: '0.80rem 1.75rem', backgroundColor: '#0070f3', color: '#fff', borderRadius: '6px', textDecoration: 'none' }}>
          
          Get Started
        </a>
      </section>

  {/* Kickstart Your Cybersecurity Career with Security+ */}
      <section id="how" style={{ padding: '2rem 1rem', background: '#fafafa' }}>
        <div className="max-w-4xl mx-auto text-center">
          <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Kickstart Your Cybersecurity Career with Security+</h2>
          <p style={{ fontSize: '1.2rem', lineHeight: 1.6 }}>
            No experience? No problem. Build a rock-solid foundation with CompTIA Security+ and enter today’s fastest-growing industry.
          </p>
        </div>
      </section>


      {/* Feature Highlights */}
 <section id="features" style={{ padding: '2rem 0.5rem' }}>
  <div
    style={{
      maxWidth: '960px',
      margin: '0 auto',
      display: 'flex',
      justifyContent: 'center',
      flexWrap: 'wrap',
      gap: '1rem',
      textAlign: 'center',
    }}
  >
    {[
      {
        title: 'Personalized Learning Paths',
        description:
          'A study plan that adapts to your strengths and weaknesses in real time.',
      },
      {
        title: 'Smart Progress Tracking',
        description:
          'Track your scores, mastery, and readiness — all in one dashboard.',
      },
      {
        title: 'On-Demand AI Coach',
        description:
          'Ask questions anytime and get instant, clear explanations tailored to you.',
      },
    ].map(({ title, description }) => (
      <div
        key={title}
        style={{
          flex: '1 1 260px',
          maxWidth: '280px',
          padding: '1.25rem 1rem',
          border: '1px solid #ccc',
          borderRadius: '8px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'flex-start',
          backgroundColor: '#fff',
          boxShadow: '0 1px 3px rgba(0,0,0,0.03)',
        }}
      >
        <div style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>✅</div>
        <h3 style={{ fontSize: '1.1rem', marginBottom: '0.5rem', fontWeight: '600' }}>
          {title}
        </h3>
        <p style={{ fontSize: '0.95rem', lineHeight: '1.4', margin: 0 }}>{description}</p>
      </div>
    ))}
  </div>
</section>

      {/* Why Choose Cybersecurity */}
<section id="why-cybersecurity" className="py-16 px-4 bg-zinc-100 dark:bg-zinc-800 text-center">
  <h2 className="text-3xl font-semibold mb-6">Why Choose Cybersecurity?</h2>
  <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-6">
    <div className="p-6 bg-white dark:bg-zinc-900 rounded-lg shadow-md">
      <h3 className="text-xl font-bold mb-2">💰 High Salaries</h3>
      <p>Cybersecurity pro's can start at $70K+ and grow to $250K+ in senior roles. It Pays to Protect.</p>
    </div>
    <div className="p-6 bg-white dark:bg-zinc-900 rounded-lg shadow-md">
      <h3 className="text-xl font-bold mb-2">🔒 Unmatched Job Security</h3>
      <p>With rising threats and digital expansion, cybersecurity roles aren’t going away anytime soon.</p>
    </div>
    <div className="p-6 bg-white dark:bg-zinc-900 rounded-lg shadow-md">
      <h3 className="text-xl font-bold mb-2">🚀 Fast Career Growth</h3>
      <p>Whether you're entry-level or a veteran, cybersecurity offers diverse paths to advance quickly.</p>
    </div>
  </div>
</section>

      {/* Footer */}
      <footer style={{ padding: '1.5rem 1rem', textAlign: 'center', fontSize: '0.9rem', color: '#666' }}>
        © {new Date().getFullYear()} AI CyberCoach. All rights reserved.
      </footer>
    </div>
  );
}
