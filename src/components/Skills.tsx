import {useParallax} from 'react-scroll-parallax'
import mountains from '../assets/mountain.png' 
const Skills = () => {
	
	function listDisplay(title:string ,args: string[]){
		return (
		<div className="p-4">
		<div className="relative w-80 flex flex-col rounded-lg bg-slate-300 shadow-sm border border-slate-200">
		<div className = 'text-xl  text-gray-600 bg-gray-200'><h3 className = 'ml-6'>{title}</h3></div>
		{args.map((x) => 	
		<div
		className="border-b-1 border-gray-200 text-slate-800 flex w-full items-center rounded-md p-3 transition-all hover:bg-slate-100 focus:bg-slate-100 active:bg-slate-100"
		>
		{x}
		</div>
		)}
		</div>
		</div>
		)
	}



	const languages = [
		'C++',
		'Python',
		'Java',
		'C#',
		'JavaScript',
		'HTML',
		'CSS'
	]
	const tools= [
		'SQL',
		'git',
		'Linux',
		'Bash',
		'React',
		'Angular',
		'TailwindCSS',

	]
		


	return (
		<div className = 'relative h-screen z-10'>
		<h3 className = 'w-full text-3xl font-mono-bold text-[#dec800] ml-4'>Skills</h3>
		<div className="grid z-10 md:grid-cols-2 gap-6 ml-6 mr-6 h-screen items-center place-items-center">
		{listDisplay('Langues',languages)}
		{listDisplay('Tools and Technologies',tools)}
		</div>
		<Ground />
		</div>
	)


}

const Ground = ()=> {
	const parallax = useParallax({   
		opacity:[0,0.5]
	});

return (
	<div className = 'static z-0'>
	<img 
	ref={parallax.ref as React.RefObject<HTMLImageElement>}
	src={mountains}
	className='absolute bottom-0 left-0 right-0 w-screen'
	/>
	</div>
)
}
export default Skills
