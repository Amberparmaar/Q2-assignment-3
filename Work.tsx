import React from 'react';

function Work() {
  return (
    <div className='w-full h-[574px] py-[140px] px-[220px] bg-[#043873]'>
      <div className='w-full max-w-[1481px] h-[294px] mx-auto gap-[60px] text-center'>
        <div className='w-full max-w-[1064px] mx-auto text-white'>
          <h2 className='font-bold text-[64px] leading-[77.45px] tracking-[-0.02em] mb-6'>
            Your work, everywhere you are
          </h2>
          <p className='font-normal text-lg leading-[30px] tracking-[-0.02em]'>
            Access your notes from your computer, phone, or tablet by synchronizing with various services, including Whitespace, Dropbox, and OneDrive. The app is available on Windows, macOS, Linux, Android, and iOS. A terminal app is also available!
          </p>
        </div>
        <div className='text-center mt-8'>
          <button className='rounded-lg py-3 px-10 bg-[#4F9CF9] text-white font-medium'>
            Try Taskeys
          </button>
        </div>
      </div>
    </div>
  );
}

export default Work;
