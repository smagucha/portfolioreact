import Nav from './Header';
import Footer from './Footer';
import './css/main.css';
function About(){
	return (
		<div >
            <Nav/>
            <div className ='maincontent' > 
            <div className='innerdiv'>
                <h1>About</h1>
                <p>Hi, I'm Magucha. I'm a freelance full-stack developer with 3+ years of web development experience.</p>
                <p>I love to code, solve problems, and learn new things.</p>
                <p>Nowadays, I work with Python / Django on the backend and React on the frontend. </p>
                <p>I've built web and regular websites, e-commerce stores, intranet portals, notification systems.</p>
                <p>If you need my help or looking for a freelance contractor, don't hesitate to contact me</p>
                <h1>Skills</h1>
                <ol>
                    <li>Django</li>
                    <li>React</li>
                    <li>javascript</li>
                    <li>python</li>
                    <li>postgres</li>
                    <li>mysql</li>
                    <li>sqlite3</li>
                </ol>

            </div>
            </div>
            <Footer/>
        </div>
		);
}

export default About;