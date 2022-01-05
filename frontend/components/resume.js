const Resume = ({ work }) => (
  <div className="card resume-card">
    <div className="card-body">
      <h3>Work History</h3>
      {work.map(({ type, title, company, dates, id, url, desc }, index) => (
        <div key={id}>
          <h4>{title}</h4>
          <div className="company-container">
            <h5>
              <a href={url} target="_blank" rel="noopener noreferrer">
                {company}
              </a>
            </h5>
            <p> {dates}</p>
          </div>
          <ul>
            {desc.map(({ bullets, id }, index) => (
              <li key={id}>{bullets}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  </div>
)

export default Resume
