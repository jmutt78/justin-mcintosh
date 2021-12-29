const Resume = ({ work }) => {
  console.log(work)
  return (
    <div className="card">
      <div className="card-body">
        {work.map(({ type, title, company, dates, id, url, desc }, index) => (
          <div key={id}>
            <h4>{title}</h4>
          </div>
        ))}
      </div>
    </div>
  )
}
export default Resume
