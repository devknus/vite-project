import React from 'react'
const Listrent1 = () => {
    return (
        <div>
            <div className='flex justify-center px-10 gap-10 pt-9 items-center'>
                <div className='bg-gray-200 w-full rounded-md'>
                    <div className='flex h-60'>
                        <div className='  flex-col flex h-60 '>
                            <img className='w-[90%] h-48 pt-5 px-5 rounded-3xl' src="home.jpeg" alt="logo" />

                            <div className=' flex  px-6 justify-start gap-6   pt-3 pb-6 items-center '>
                                <div className='  '>
                                    <img className='  rounded-md w-10' src="Owner.png " alt="logo" />
                                </div>
                                <div className='  '>
                                    <h1 className='   font-semibold '> Posting By </h1>
                                    <h1 className=' text-blue-800 '> Owner </h1>

                                </div>
                            </div>
                        </div>
                        <div className=' '>
                            <p className='pt-4 text-lg'> 1 BHK Ready to Occupy Flat for sale in Surya Apartment Delhi Sector ..... </p>


                            <div className=' flex justify-between items-center  pt-4'>

                                <div className=' flex  justify-center  items-center gap-3 '>
                                    <img className='w-10' src="Bed.png" alt="" />
                                    <h1> Bedroom </h1>
                                </div>


                                <div className=' flex justify-center items-center gap-3 '>
                                    <img className='w-10' src="Bath.png" alt="" />
                                    <h1> Bathroom</h1>
                                </div>

                                <div className=' flex justify-center items-center gap-3 '>
                                    <img className='w-10' src=" Balconiess.png" alt="" />
                                    <h1> Balconies </h1>
                                </div>

                                <div className=' flex justify-center items-center gap-3 '>
                                    <img className='w-10' src="Carparking.png" alt="" />
                                    <h1> Parking </h1>
                                </div>
                            </div>
                            <div className=' flex justify-between items-center  pt-10'>

                                <div className='    flex-col   justify-center items-center  '>
                                    <h1 className=' font-semibold '> Transaction Type </h1>
                                    <h1> Sale </h1>
                                </div>

                                <div className='   flex-col   justify-center items-center  '>
                                    <h1 className=' font-semibold '> Status  </h1>
                                    <h1> Ready to Move  </h1>
                                </div>

                                <div className='   flex-col   justify-center items-center  '>
                                    <h1 className=' font-semibold '> Additional Room  </h1>
                                    <h1> 1 Servant Room </h1>
                                </div>

                                <div className='flex-col  justify-center items-center  '>
                                    <h1 className=' font-semibold '> Facing  </h1>
                                    <h1> North East </h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='bg-gray-200 h-60 w-96  pt-10 rounded-md'>
                    <p className='flex px-8  text-2xl font-bold'> $ 4.85cr </p>
                    <p className='flex  px-8  text-sm '> $ 23,150 per sqft </p>

                    <div class="flex space-x-4  px-7 pt-7">
                        <button class="bg-blue-500 text-white py-1 px-2 rounded hover:bg-blue-700">
                            Contact
                        </button>
                        <button class="bg-transparent border-2 border-blue-500  text-blue-500 py-2 px-6 rounded hover:text-white">
               Enquiry Now
             </button>
           </div>
         </div>
       </div>
        </div>
    )
}
export default Listrent1;