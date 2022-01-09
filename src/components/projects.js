import Nav from './Header';
import Footer from './Footer';


function Project(){
	return (
	<div >
        <Nav/>
        <div className ='maincontent'>
        	<div className='box'>
        		<h3>school management system</h3>
        		<p>A School Management System is an information management system for educational institutions to manage all student's data. 
        		It provides abilities such as registration of students in classes, documenting of grades and analytical marks of each student 
        		and other evaluation elements</p>
        	</div>
        	<div className='box'>
        		<h3>stock management</h3>
        		<p>The purpose of stock management software is to maintain an optimal stock level, 
        		track goods during transport between locations, receive new items,
        		 manage warehouse processes such as picking, packing, and shipping,
        		  prevent product obsolescence and spoilage, and ensure your products are never out of stock.</p>
        	</div>
        	<div className='box'>
        		<h3>library system</h3>
        		<p>A library management system is software that is designed to manage all the functions of a library. 
        		It helps librarian to maintain the database of new books and the books that are borrowed by members along with their due dates.
        		 This system completely automates all your library's activities.</p>
        	</div>
        	<div className='box'>
        		<h3>ecomerce site</h3>
        		<p>An e-commerce website, by definition, is a website that allows you to buy and sell tangible goods, digital products or services online. 
        		Trade, be it barter exchange or buying and selling of goods and services has been prevalent for centuries. </p>
        	</div>
        	<div className='box'>
        		<h3>human resource system</h3>
        		<p>An HRMS, or human resources management system, is a suite of software applications used to manage human resources and
        		 related processes throughout the employee lifecycle. 
        		An HRMS enables a company to fully understand its workforce while staying compliant with changing tax laws and labor</p>
        	</div>
        </div>
        <Footer/>
    </div>
		);
}

export default Project;