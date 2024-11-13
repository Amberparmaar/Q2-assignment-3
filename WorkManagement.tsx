
import React from "react";
import Image from "next/image";
import image1 from "../assets/image1.png";

const Project = () => {
	return (
		<><div className="w-full h-auto">

			<div className="px-[140px] py-[220px] gap-[24px] flex items-center">
				<div className="w-[672px] flex flex-col gap-4">
					<h1 className="font-bold text-black text-[70px] leading-[87.14px] tracking-[-0.02em]">
						Project-Management
					</h1>
					<p className="w-full text-[18px] text-black leading-[30px]">
						Images, videos, PDFs and audio files are supported. Create math
						expressions and diagrams directly from the app. Take photos with
						the mobile app and save them to a note.
					</p>
					<button className="w-[201px] h-[63px] rounded-md px-10 py-5 bg-[#4F9CF9] mt-5">
						Get Started
					</button>
				</div>
				<div className="w-[748px] h-[547px] bg-[#C4DEFD]"></div>
			</div>

			<div className="w-[1480px] h-[661px] gap-[50px] flex items-center">
				<Image src={image1} alt="img" className="w-[748px] h-[547px]" />
				<div className="w-[670px] flex flex-col gap-6 ml-10">
					<h1 className="font-bold text-black text-[70px] leading-[87.14px] tracking-[-0.02em]">
						Work Together
					</h1>
					<p className="w-full text-[18px] text-black leading-[30px]">
						With Whitespace, share your notes with your colleagues and
						collaborate on them. You can also publish a note to the internet
						and share the URL with others.
					</p>
					<button className="w-[201px] h-[63px] rounded-md px-10 py-5 bg-[#4F9CF9] mt-5">
						Try it Now
					</button>
				</div>
			</div>
			</div>
		</>
	);
};

export default Project;
