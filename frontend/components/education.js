const Education = ({ education }) => (
  <div className="card resume-card">
    <div className="card-body">
      <h3>Education</h3>
      {education.map(({ major, college, dates, id, url }) => (
        <div key={id}>
          <h4>{major}</h4>
          <div className="company-container">
            <h5>
              <a href={url} target="_blank" rel="noopener noreferrer">
                {college}
              </a>
            </h5>
            <p> {dates}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
)

export default Education
