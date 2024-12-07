import React from 'react'
const Circlebox = () => {
    return (
        <div>
            <div className='flex px-24 pb-10'>
            <h1 className='font-semibold text-gray-700 text-3xl'> Popular Location  in <span className=' text-blue-600'>
                Delhi NCR</span></h1>
            </div>
              <div className='flex px-24 pb-20'>
               
                <div className=' flex items-center p-10 justify-center  bg-white border border-gray-300 shadow-2xl rounded-md space-x-10  pt-8 '>
                    {/* test */}
                    <div className="max-w-sm mx-auto bg-green-100 p-6 rounded-lg  shadow-lg border border-gray-200">
                        <div className='flex justify-center items-center'>
                            <img className=' bg-gray-400 p-2 rounded-md w-10' src="mapin.png" alt="logo" />
                        </div>

                        <p className="text-gray-600  pt-3 mb-4">Delhi Overview </p>
                        <p className='text-sm text-gray-500'> Know whats great & upcoming Project </p>

                        <div className='pt-5'>
                            <button className='  text-white px-3 py-2 rounded-xl bg-blue-600'> Explore </button>
                        </div>
                    </div>
                    {/* end */}

                    <div className=' px-10 '>
                        <div className='flex justify-center items-center'>
                            <img src="home1.JPG" className="w-24  h-28 p-1 bg-gray-300 rounded-xl object-cover" alt="Profile Image"/>
                            <p className='px-5'> South Delhi   <span className=' text-sm text-gray-600 '><br /> 28+ Property</span> </p>
                        </div>
                        <div className=' pt-20  flex  justify-center items-center '>
                            <img src="home1.JPG" className="w-24 h-28  p-1 bg-gray-300 rounded-xl object-cover" alt="Profile Image" />
                            <p className=' px-5'> Dwarika  <span className=' text-sm text-gray-600 '><br /> 28+ Property</span> </p>

                        </div>
                    </div>



                    <div className='  px-10   ' >
                        <div className=' flex  justify-center items-center '>
                            <img src="home1.JPG" className="w-24  h-28 p-1 bg-gray-300 rounded-xl object-cover" alt="Profile Image" />
                            <p className=' px-5'> Gurugram  <span className=' text-sm text-gray-600 '><br /> 28+ Property</span> </p>
                        </div>
                        <div className=' pt-20  flex  justify-center items-center '>
                            <img src="home1.JPG" className="w-24 h-28  p-1 bg-gray-300 rounded-xl object-cover" alt="Profile Image" />
                            <p className=' px-5'> Uttam Nagar   <span className=' text-sm text-gray-600 '><br /> 28+ Property</span> </p>
                        </div>
                    </div>


                    <div className='  px-10   ' >
                        <div className=' flex  justify-center items-center '>
                            <img src="home1.JPG" className="w-24  h-28 p-1 bg-gray-300 rounded-xl object-cover" alt="Profile Image" />
                            <p className=' px-5'> Mohan Garden   <span className=' text-sm text-gray-600 '><br /> 28+ Property</span> </p>
                        </div>
                        <div className=' pt-20  flex  justify-center items-center '>
                            <img src="home1.JPG" className="w-24 h-28  p-1 bg-gray-300 rounded-xl object-cover" alt="Profile Image" />
                            <p className=' px-5'> Dwarika Mor   <span className=' text-sm text-gray-600 '><br /> 28+ Property</span> </p>
                        </div>
                    </div>


                    <div className='  px-10   ' >
                        <div className=' flex   justify-center items-center '>
                            <img src="home1.JPG" className="w-24  h-28 p-1 bg-gray-300 rounded-xl object-cover" alt="Profile Image" />
                            <p className=' px-5'> Nawada  <span className=' text-sm text-gray-600 '><br /> 28+ Property</span> </p>
                        </div>
                        <div className=' pt-20  flex  justify-center items-center '>
                            <img src="home1.JPG" className="w-24 h-28  p-1 bg-gray-300 rounded-xl object-cover" alt="Profile Image" />
                            <p className=' px-5'> Om Vihar  <span className=' text-sm text-gray-600 '><br /> 28+ Property</span> </p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}
export default Circlebox;
