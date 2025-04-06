export default function Hero() {
  return (
    <section>
      <h1>Joshua Thompson</h1>
      <h2>Data Scientist | Optimization Specialist | Engineer</h2>

      <p style={{ marginTop: "1rem", maxWidth: "700px" }}>
        Data Science professional with 7 years of progressive experience and a strong engineering background. Proven ability to deliver insights that drive business outcomes. Skilled in Python, R, SQL, and Azure, with hands-on experience in machine learning, statistical methods, and AI tools as well as integrating and analyzing complex datasets to support product strategy, market research, and operations optimization.
      </p>

      <h3 style={{ marginTop: "2rem" }}>Technical Skills</h3>
      <ul>
        <li>Python, R, SQL</li>
        <li>Machine Learning, Simulation, Optimization</li>
        <li>Azure Cloud Services</li>
        <li>Discrete Event Simulation</li>
        <li>Git, GitHub</li>
      </ul>

      <h3 style={{ marginTop: "2rem" }}>Certifications</h3>
      <ul>
        <li>Microsoft Certified: Azure Data Scientist Associate (In Progress)</li>
      </ul>

      <div style={{ marginTop: "2rem" }}>
        <a
          href="/assets/Joshua%20Thompson-%20Resume.pdf"
          className="button"
          target="_blank"
          rel="noopener noreferrer"
        >
          📄 View Resume
        </a>

        <a
          href="/assets/Customer_Churn_Report-short.pdf"
          className="button"
          style={{ marginLeft: "1rem" }}
          target="_blank"
          rel="noopener noreferrer"
        >
          📊 View Churn Project
        </a>
      </div>
    </section>
  );
}
