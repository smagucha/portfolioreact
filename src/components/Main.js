import './css/main.css';
import sam from './img/sam.jpg'
function Maincontent(){
	return (
		<div className='maincontent'>
            <div className='leftdiv'>
            <center><img src={sam} /></center>
            </div>
            <div className='rightdiv'>
            <p className='titlename'>Hi, I'm Magucha & I'm a software engineer</p>
            <p className='introself'>I am passionate about building excellent software that improves the lives of those around me.
             I specialize in creating software for clients ranging from individuals and small-businesses all the way to large enterprise corporations. 
             What would you do if you had a software expert available at your fingertips?</p>
            </div>
       
        </div>
		);
}

export default Maincontent;