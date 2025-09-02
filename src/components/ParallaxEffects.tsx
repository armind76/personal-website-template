import './App.css'
import moon from './assets/moon.png'
import cloud2 from './assets/cloud3.png'
import cloud1 from './assets/cloud2.png'
import mountains from './assets/mountain.png'
import { useParallax ,ParallaxProvider } from 'react-scroll-parallax'


function App() {
	return (
		<ParallaxProvider>
		<div className = "h-screen">hi</div>
		<CloudsMoon />
		<Ground />
		</ParallaxProvider>
	)
}


const CloudsMoon = () => {
	const moonParallax = useParallax({   
		translateX:['-300px','100px'],
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
		<div className = 'relative h-screen w-screen'>
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


const Ground = ()=> {
	const parallax = useParallax({   
		opacity:[0,1],
		speed: -10
	});

return (
	<div className = 'h-screen relative'>
	<img 
	ref={parallax.ref as React.RefObject<HTMLImageElement>}
	src={mountains}
	className='absolute bottom-0 w-screen'
	/>
	</div>
)

}
export default App
