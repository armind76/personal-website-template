import ShootingStars from './Shootingstar'
const Sky = () => {

	const stars = Array.from({length:250}).map((_,index) => {
		const top = Math.random()*300;
		const left = Math.random()*100;
		
		return <div 
				key={index} 
				className = 'w-px h-px bg-white rounded-full absolute top-1/2 left-1/2'
				style={{
					top:`${top}%`,
					left:`${left}%`,
				}}
				/>
	});


	return (
		<div className = 'h-full w-full z-0'> {stars} <ShootingStars /> </div>
	)

}
export default Sky
