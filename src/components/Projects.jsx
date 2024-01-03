import Project from './Project'
import { projectsList } from './ProjectsInfo'
const Projects = () => {
  return (
    <>
      <div className="main">
        <div className="NameContainer">
          <h1 className="Name">Projects</h1>
        </div>
        <div className="projectsWrapper">
          {projectsList.map((a) => {
            return <Project project={a} />
          })}
        </div>
      </div>
    </>
  )
}

export default Projects