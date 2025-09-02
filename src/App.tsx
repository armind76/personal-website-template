import './App.css'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Projects from './components/Projects'
import Sky from './components/Sky'
import Skills from './components/Skills'
import Contact from './components/Contact'
import {Element} from 'react-scroll'
import {ParallaxProvider} from 'react-scroll-parallax'

function App() {
	return (
		<ParallaxProvider>
		<div>
		<Navbar /> 
		<Element name ="Home">
		<Home/>
		</Element>
		<Element name="Project">
		<Projects/>
		</Element>
		<Element name ="Skills">
		<Skills />
		</Element>
		<Element name ="Contact">
		<Contact/>
		</Element>
		<Sky />
		</div>
		</ParallaxProvider>
	)
}

export default App
