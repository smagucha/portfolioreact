import Nav from './Header';
import Footer from './Footer';
import './css/form.css';
function Contact(){
	return (
		<div >
            <Nav/>
            <div className ='maincontent' > 
            <div className='formdiv'>
            	<form >
            		<p><label>your fullname</label>
            		<input type="text" name="name"/></p>
            		<p><label>email</label>
            		<input type="email" name="user_email"/></p>
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