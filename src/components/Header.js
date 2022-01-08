import './css/nav.css';
function Header() {

  return (
    <div >
     <ul>
       
        <li><a href="#news">Contact</a></li>
        <li><a href="#contact">Projects</a></li>
        <li><a href="#about">About</a></li>
        <li><a class="active" href="#home">Home</a></li>
    </ul>
    </div>
  );
}

export default Header;
