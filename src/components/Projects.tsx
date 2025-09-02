import { AiFillGithub } from "react-icons/ai"
import {useParallax} from 'react-scroll-parallax'
import moon from '../assets/moon.png'
import cloud2 from '../assets/cloud3.png'
import cloud1 from '../assets/cloud2.png'
import projectList from '../data/projects.json'

const Projects = () => {
	return (
	<div className = 'relative'>
		<h3 className = 'font-mono-bold text-3xl ml-4 text-[#dec800]'>Projects</h3>
		<div className = 'max-w-[1240px] mx-auto grid md:grid-cols-2'>
		{projectList.map((x)=><Card title={x.title} description = {x.description} link={x.github_link} />)}
		<CloudsMoon/> 
		</div>
	</div>

	)

}
function Card  ({ title,description,link }: { title: string,description:string, link:string }){
	return(
		<div className = 'z-10 bg-gray-300 grid items-center border gap-2 p-4 shadow-lg h-80 w-130 mx-auto mt-5 rounded-lg hover:scale-105 duration-300'>
		<h3 className = 'font-bold'>{title}</h3>
		<div className = 'text-gray-600 text-sm'>{description}</div>
		<a href={link}>
		<AiFillGithub />
		</a>
		</div>

	)

}
const CloudsMoon = () => {
	const moonParallax = useParallax({   
		translateX:['-300px','10px'],
		translateY:['-50px','10px']
	});
	const cloudParallax = useParallax({   
		opacity:[0,1],
		translateX:['-300px','400px']
	});
	const cloud2Parallax = useParallax({   
		opacity:[0,1],
		translateX:['300px','-1500px']
	});
	const cloud3Parallax = useParallax({   
		opacity:[0,1],
		translateX:['300px','-50px']
	});
	const cloud4Parallax = useParallax({   
		opacity:[0,1],
		translateX:['-300px','500px']
	});
	return (
		<div className = 'absolute z-0 h-full w-full top-30'>
		<img 
		ref={moonParallax.ref as React.RefObject<HTMLImageElement>} 
		src ={moon} 
		className='absolute top-0 left-5 h-[30%]'
		/>
		<img 
		src = {cloud2}
		className='absolute bottom-40 left-5 h-[40%]'
		ref={cloudParallax.ref as React.RefObject<HTMLImageElement>} 
		/>
		<img 
		src = {cloud1}
		className='absolute bottom-10 left-50 h-[40%]'
		ref={cloud4Parallax.ref as React.RefObject<HTMLImageElement>} 
		/>
		<img 
		src = {cloud1}
		className='absolute bottom-10 right-3 h-[40%]'
		ref={cloud2Parallax.ref as React.RefObject<HTMLImageElement>} 
		/>
		<img 
		src = {cloud2}
		className='absolute bottom-1 right-50 h-[40%]'
		ref={cloud3Parallax.ref as React.RefObject<HTMLImageElement>} 
		/>
		</div>

	
);
}
export default Projects
