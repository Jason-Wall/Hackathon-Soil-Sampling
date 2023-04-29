import React from 'react'

function Hero() {
  return (
    <div className='w-full h-full max-w-5xl justify-center mx-auto'>
    <div id="hero" className="max-w-full bg-hl1 py-20">
      <div className='max-w-5xl mx-auto flex flex-col'>
        {/* Main Container */}
        <div className='max-w-5xl w-full mx-auto relative'>
          {/*Overlay*/}
          <div className='absolute max-w-7xl w-full mx-auto h-full max-h-[500px] bg-prim1/60 hover:bg-prim1/70 flex 
          flex-row justify-between rounded-3xl'>
            <div className='flex flex-col m-6'>
              <p className='text-violet-400 text-2xl  md:text-3xl lg:text-4xl p-1 pt-12 pl-16 mx-auto 
              justify-center font-extrabold'>
                Upload CSV file and get your Soil data visualized</p>
            </div>
          </div>
          <img 
            className='w-full max-h-[500px] object-cover rounded-3xl'
            src="https://images.pexels.com/photos/2203683/pexels-photo-2203683.jpeg" alt="soil" 
          />


        

        </div>
      </div>
    </div>
    </div>
  )
}

export default Hero