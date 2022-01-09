import Nav from './Header';
import Footer from './Footer';
import './css/form.css';
import emailjs from 'emailjs-com'

const Contact =() =>{
	function sendEmail(e){
	e.preventDefault();
	emailjs.sendForm('service_qn1u783','template_aehly3p',e.target,'user_UuAa4NbrvYOzVpzJBGtvU').then(res =>{
		console.log(res);
	}).catch(err=> console.log(err));
}
	return (
		<div >
            <Nav/>
            <div className ='maincontent' > 
            <div className='formdiv'>
            	<form onSubmit={sendEmail}>
            		<p><label>your fullname</label>
            		<input type="text" name="name"/></p>
            		<p><label>email</label>
            		<input type="email" name='user_name'/></p>
            		<p><label>Message</label>
            		<textarea name="message" id="textneso" cols="30" rows="10"></textarea></p>
            		<p><input type="submit" value='send email' /></p>
            	</form>
            	</div>
            </div>
            <Footer/>
        </div>
		);
}

export default Contact;