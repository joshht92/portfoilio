import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Joshua Thompson Portfolio</title>
        <meta name="description" content="Portfolio of Joshua Thompson" />
      </Head>
      
      <main style={{ maxWidth: '800px', margin: '0 auto', padding: '2rem' }}>
        <h1>Joshua Thompson</h1>
        <h2 style={{ color: '#555' }}>Data Science & Optimization Projects</h2>
        
        <p>
          BS in Industrial Engineering, MS in Business Analytics.<br />
          Passionate about building data-driven solutions for complex business challenges.
        </p>
        
        <section>
          <h3>Contact</h3>
          <ul>
            <li>Email: <a href="mailto:jthompson_01@outlook.com">jthompson_01@outlook.com</a></li>
            <li>GitHub: <a href="https://github.com/joshht92" target="_blank">joshht92</a></li>
            <li>LinkedIn: <a href="https://www.linkedin.com/in/joshua-thompson-b89913105" target="_blank">Joshua Thompson</a></li>
          </ul>
        </section>
        
        <section>
          <h3>Projects</h3>
          <p>Check out my recent data science and optimization projects.</p>
          <ul>
            <li><a href="#project1">Project One</a> – short description</li>
            <li><a href="#project2">Project Two</a> – short description</li>
          </ul>
        </section>
        
        <section>
          <h3>Resume</h3>
          <p>
            <a href="/resume.pdf" target="_blank">View My Resume (PDF)</a>
          </p>
        </section>
      </main>
    </>
  );
}
