import { ReactTyped } from "react-typed"
const Home = () => {
	
	return (
		<div className = 'static h-screen w-full relative'>
		 <div className = 'z-10 h-screen mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center text-white' >
		 	<p className = 'font-bold text-[#dec800] text-4xl' >Armin Doroudi</p>
		 	<p className = 'text-lg'>Software engineer based in NewYork city,</p>
			<Typed />
		 </div>
		</div>
	);

}
const Typed = () => (
  <div>
    <ReactTyped strings={["take a scroll with me to know me better"]} typeSpeed={30} />
	<h1/>
    <ReactTyped
      strings={[
        "Personal projects",
        "Skills",
        "About me",
      ]}
      typeSpeed={40}
      backSpeed={50}
      attr="placeholder"
      loop
    >
      <input className='text-center'type="text" />
    </ReactTyped>
  </div>
);
export default Home
