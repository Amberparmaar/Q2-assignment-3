
import Image from "next/image";
import Navbar from "../app/components/Navbar"
import Hero from "../app/components/Hero"
import Project from "../app/components/WorkManagement";
import Customise from "../app/components/Customise";
import Extension from "../app/components/Extension";
import Work from '../app/components/Work'
import Sponsors from "./components/Sponsors";
import Footer from "./components/Footer";
export default function Home() {
	return (
		<div>
			<Navbar />
			<Hero/>
      <Project/>
	  <Extension/>
	  <Customise/>
	  <Work/>
	  <Sponsors/>
	  <Footer/>
		</div>
	);
}