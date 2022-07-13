
const Project = ({ project }) => {
  if (project.imgStyle == null) {
    project.imgStyle = 'img'
  }
  return (
    <div className="Subheader1">
      <div className="Subheader1Label">{project.name}</div>
      <div className="Subheader2Label">{project.affiliation}</div>
      <div className="Subheader2Right">{project.date}</div>
      <div className="Subheader3Content">
        <ul>
          {project.bulletPoints.map((a) => {
            return <li>{a}</li>
          })}
          {project.sourceLink ? <li><a href={project.sourceLink} target="_blank" rel="noopener noreferrer">Source</a></li> : <></>}
          {project.demoLink ? <li><a href={project.demoLink} target="_blank" rel="noopener noreferrer">Live Demo</a></li> : <></>}
          <div className="imgWrap">
            <img src={project.img} style={project.customStyle} className={project.imgStyle} alt = ''></img>
          </div>
        </ul>

      </div>
    </div>
  )
}

export default Project