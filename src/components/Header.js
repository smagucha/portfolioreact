import './css/nav.css';
import React, {useState, useEffect} from 'react';
import { Link } from "react-router-dom";

export default function Header() {
  const [toggleMenu, setToggleMenu] = useState(false)
  const [screenWidth, setScreenWidth] = useState(window.innerWidth)


  const toggleNav = () => {
    setToggleMenu(!toggleMenu)
  }

  useEffect(() => {

    const changeWidth = () => {
      setScreenWidth(window.innerWidth);
    }

    window.addEventListener('resize', changeWidth)

    return () => {
        window.removeEventListener('resize', changeWidth)
    }

  }, [])

  return (
    <nav>
      {(toggleMenu || screenWidth > 500) && (
       <ul>
       <li><Link to="/">Home</Link></li>
       <li><Link to="/about">About</Link></li>
       <li><Link to="/projects">Projects</Link></li>
      <li><Link to="/contact">Contact</Link></li> 
    </ul>
      )}

      <button onClick={toggleNav} className="btn">Menu</button>
    </nav>
  )
}

