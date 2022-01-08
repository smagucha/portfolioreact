import './css/nav.css';
import { Link } from "react-router-dom";
function Header() {
  return (
    <div >
     <ul>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/projects">Projects</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/">Home</Link></li>
    </ul>
    </div>
  );
}

export default Header;





