import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
      <div className="navbarWrapper">
        <div className="navbarTitle">Aaron Van Der Male</div>
        <nav className="navbar">
          <ul>
            <li><a href='https://github.com/vmalecode' target='_blank' rel='noopener noreferrer'>Github</a></li>
            <li><Link to='/projects'>Demo Projects</Link ></li>
          </ul>
        </nav>
      </div>
    </>
  )
}

export default Navbar