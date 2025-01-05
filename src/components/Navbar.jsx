import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Navbar(){
  const [home, setHome] = useState(true);

  const toggleHome = () => {
    home ? setHome(false) : setHome(true)
  } 
  return(
    <div className="navbar">
      <div className="nb-element">
        <h1>Final Project</h1>
        <Link to={home ? "/BackOffice" : "/"} onClick={toggleHome}>
          {home ? "Back office" : "Home"}
        </Link>
      </div>
    </div>
  )
}