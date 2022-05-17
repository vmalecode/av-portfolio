import { Link, useNavigate } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
    <div className="navbarWrapper">
        <div className="navbarTitle">Aaron Van Der Male</div>
        <nav className="navbar">
            <ul>
                <li><Link to='/'>Education & Experience</Link ></li>
                <li><Link to='/projects'>Projects</Link ></li>
            </ul>
        </nav>
    </div>
    </>
  )
}

export default Navbar