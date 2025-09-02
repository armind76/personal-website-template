import {FiAlignRight, FiX} from 'react-icons/fi';
import {useState} from 'react';
import {Link} from 'react-scroll';

const Navbar = () => {
	const [nav, setNav] = useState(false); 
	const handleNav = () => {
		setNav(!nav);
		
	}
	return (
		<div className = "sticky z-20 top-0 flex justify-between items-center h-15 w-screen mx-auto px-4 text-white bg-black">
		<h1 className = 'w-full text-3xl font-mono-bold text-[#dec800]'>Armin</h1>  
		<ul className = 'hidden md:flex'>	
			<Link to="Home" smooth={true} duration={500}    className = 'p-4 cursor-pointer'>Home</Link>
			<Link to="Project" smooth={true} duration={500} className = 'p-4 cursor-pointer'>Project</Link>
			<Link to="Skills" smooth={true} duration={500}  className = 'p-4 cursor-pointer'>Skills</Link>
			<Link to="Contact" smooth={true} duration={500} className = 'p-4 cursor-pointer'>Contact</Link>
		</ul>
		<div onClick= {handleNav} className = 'block md:hidden'>
			{!nav ? <FiAlignRight size = {20}/> : <FiX size = {20}/>}
		</div>
		<div className = {nav ? 'fixed left-0 top-0 w-[40%] h-full border-r border-r-gray-900 ease-in-out duration-500 bg-gray-900' :  'fixed left-[-100%] ease-in-out duration-500'}>
		<ul className ='pt-24 '>	
			<li className = 'p-4 border-b border-gray-600 cursor-pointer'>
			<Link to="Home" smooth={true} duration={500}>Home</Link>
			</li>
			<li className = 'p-4 border-b border-gray-600 cursor-pointer'>
			<Link to="Project" smooth={true} duration={500} >Project</Link>
			</li>
			<li className = 'p-4 border-b border-gray-600 cursor-pointer'>
			<Link to="Skills" smooth={true} duration={500} >Skills</Link>
			</li>
			<li className = 'p-4 border-b border-gray-600 cursor-pointer'>
			<Link to="Contact" smooth={true} duration={500}>Contact</Link>
			</li>
		</ul>
		</div> 
		</div>
	)
}

export default Navbar
