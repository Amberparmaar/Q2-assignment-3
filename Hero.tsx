import React from "react";

const Hero = () => {
	return (
		<>
			<div className='py-[140px] px-[220px] top-[92px] bg-[#043873] text-white flex justify-between items-center'>
				<div className='w-[656px] h-[361px]'>
					<div className='w-[656px] h-[238px]'>
						<h2 className='font-bold text-[64px] leading-[77.45px] tracking-[-0.02em] mb-6'>
							Get More Done with whitespace
						</h2>
						<p className='font-normal text-lg leading-[30px] tracking-[-0.02em]'>
							Project management software that enables your teams to
							collaborate, plan, analyze and manage everyday tasks
						</p>
					</div>
					<button className="w-[219px] h-[63px] mt-4 p-5 rounded-lg gap-y-2.5 bg-[#4F9CF9]
">Try Whitespace free</button>
				</div>
				<div className='w-[824px] h-[549px] bg-[#C4DEFD] gap-x-1'>
					
				</div>
			</div>


			
			
		</>
	);
};

export default Hero;