import './css/footer.css';
import linkedin from './img/linkedin.png';
import email from './img/email.png';
import github from './img/github.png';
import twitter from './img/twitter.png';
function Footer(){

	return (
		<div className='footer'>
        <a href="mailto: smagucha@gmail.com"><img src={email}/></a>
        <a href="https://www.linkedin.com/in/smagucha/"><img src={linkedin} /></a>
        <a href="https://github.com/smagucha"><img src={github} /></a> 
        <a href="https://twitter.com/smagucha"><img src={twitter} /></a> 

        </div>
		);
}

export default Footer;