import Head from 'next/head';

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>Joshua Thompson | Data Science & Analytics</title>
        <meta
          name="description"
          content="Portfolio of Joshua Thompson - Data Scientist specializing in ML, optimization, and analytics."
        />
      </Head>

      <header style={{ padding: '1rem 2rem', borderBottom: '1px solid #eee' }}>
        <h1 style={{ margin: 0 }}>Joshua Thompson</h1>
      </header>

      <main style={{ padding: '2rem' }}>
        {children}
      </main>

      <footer style={{ textAlign: 'center', padding: '2rem', borderTop: '1px solid #eee', marginTop: '3rem', fontSize: '0.9rem', color: '#888' }}>
        <p>© {new Date().getFullYear()} Joshua Thompson</p>
      </footer>
    </>
  );
}
