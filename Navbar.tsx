import Image from "next/image";
import logo from "../assets/Logo.png";

const Navbar = () => {
	return (
		<div className='w-full py-4 px-[220px] bg-[#043873] flex justify-between items-center'>
			<div className='relative w-[191px] h-[34px]'>
				<Image src={logo} alt='Logo' layout="fill" objectFit="contain" />
			</div>
			<div className='w-[737.5px] h-[60px] flex justify-between items-center'>
				<div className='w-[549px] h-[23px]'>
					<ul className='flex flex-row justify-between text-white'>
						<li>Products</li>
						<li>Solutions</li>
						<li>Resources</li>
						<li>Pricing</li>
					</ul>
				</div>
				<div className='w-[126px] h-[60px]'>
					<button className='px-10 py-4 rounded-lg bg-[#FFE492]'>Login</button>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
