import { FaChess } from 'react-icons/fa'
import { MdOutlineDashboardCustomize } from 'react-icons/md'
const Projects = () => {
  return (
    <>
      <div className="main">
        <div className="NameContainer">
          <h1 className="Name">Projects</h1>
        </div>

        <div className="projectsWrapper">
          <div className="Subheader1">
            <div className="Subheader1Label"><MdOutlineDashboardCustomize /> Wordle Clone</div>
            <div className="Subheader2Label">Northeastern University</div>
            <div className="Subheader2Right">March, 2022</div>
            <div className="Subheader3Content">
              <ul>
                <li>A clone of <em>Wordle</em> using React and Redux </li>
                <li>Custom CSS</li>
                <li>Mobile friendly</li>
                <li><a href="https://av-wordle.herokuapp.com/" target="_blank" rel="noopener noreferrer">Live Demo</a></li>
                <li><a href="https://github.com/vmalecode/aaron-vandermale-project2-wordle" target="_blank" rel="noopener noreferrer">Source</a></li>
                <div className="imgWrap">
                  <img src={require('./wordl.gif')} alt="wordl.gif"></img>
                </div>
              </ul>
            </div>
          </div>
          <div className="Subheader1">
            <div className="Subheader1Label"><FaChess /> Chess </div>
            <div className="Subheader2Label">The Odin Project Bootcamp</div>
            <div className="Subheader2Right">January, 2021</div>
            <div className="Subheader3Content">
              <ul>
                <li>A functional game of chess in the CLI</li>
                <li>Utilize OOD principles in Ruby</li>
                <li><a href="https://replit.com/@vmalecode/Ruby-Chess-REPL#main.rb" target="_blank" rel="noopener noreferrer">Live Demo</a></li>
                <li><a href="https://github.com/vmalecode/chess" target="_blank" rel="noopener noreferrer">Source</a></li>
                <div className="imgWrap">
                  <img src={require('./chess.gif')} alt="chess.gif" id='gif'></img>
                </div>
              </ul>
            </div>
          </div>

          <div className="Subheader1">
            <div className="Subheader1Label">Movie Reviews</div>
            <div className="Subheader2Label">Northeastern University</div>
            <div className="Subheader2Right">May, 2022</div>
            <div className="Subheader3Content">
              <ul>
                <li>Fullstack project using MERN stack (Mongo, Express, React, Node) </li>
                <li>Utilizes OAuth bearer tokens for user sign in</li>
                <li>Protected routes to updated, delete reviews</li>
                <li>Encrypted and salted passwords</li>
                <li>Front end runs on React & Redux</li>
                <li><a href="https://avmoviereview.herokuapp.com/" target="_blank" rel="noopener noreferrer">Live Demo</a></li>
                <li>Source availabile on request</li>
                <div className="imgWrap">
                  <img src={require('./movieReview.gif')} alt="movieReview.gif" id='gif'></img>
                </div>
              </ul>
            </div>
          </div>
          <div className="Subheader1">
            <div className="Subheader1Label">Anagrams</div>
            <div className="Subheader2Label">Northeastern University</div>
            <div className="Subheader2Right">August, 2021</div>
            <div className="Subheader3Content">
              <ul>
                <li>C program that finds all English anagrams</li>
                <li>Uses hash table and singly linked list to efficiently return results</li>
                <li>Runs in 3s</li>
                <li><a href="https://github.com/vmalecode/projects/blob/main/anagramsProject.md" target="_blank" rel="noopener noreferrer">Program example execution, documentation</a></li>
                <li>No memory leaks</li>
                <li>Source available on request</li>
                <div className="imgWrap">
                  <img src={require('./anagrams.png')} alt="anagrams.png" id='gif'></img>
                </div>
              </ul>

            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Projects