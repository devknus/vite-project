import React from 'react'
const Rentproperty = () => {
  return (
    <div className=' flex '>
      <div>
        <div className='px-5 right pt-10 pb-5'>
          <div className='rounded-lg box w-72 h-96 bg-white border shadow-xl sticky border-gray-300 '>
            <div className=' px-10 pt-7 '>

              <h1 className=' text-xl font-bold'> Guest User </h1>
              <h1 className=' font-semibold '> your Recent Activity  </h1>
              <p className=' text-sm pb-10'>  your property is best in Delhi so that is called  i am choice Kamal Associates </p>
              <div className=' bg-blue-600  flex  justify-center items-center  rounded-md'>
                <button className=' p-2 text-white '> Login/Register </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className='flex justify-center gap-2 pt-10 items-center'>
          <div className='bg-white border border-gray-300  shadow-2xl  w-full rounded-md'>
            <div className=' flex h-60'>
              <div className='  flex-col flex h-60 '>
                <img className=' w-[1000%]  h-40 pt-5 px-3 rounded-3xl' src="home.jpeg" alt="logo" />
                <div className=' flex  px-4 justify-start gap-10 pt-3 items-center '>
                  <div className='  '>
                    <img className='  rounded-md w-10' src="Owner.png " alt="logo" />
                  </div>
                  <div className=' '>
                    <h1 className=' font-semibold '>   Posting By </h1>
                    <h1 className=' text-blue-800 '>   Owner  </h1>

                  </div>
                </div>
              </div>
              <div className=' '>
                <p className='pt-4 text-md '> 1 BHK Ready to Occupy Flat for sale in Surya Apartment Delhi Sector ..... </p>
                <div className=' flex justify-center items-center gap-16 pt-4 '>

                  <div className=' gap-1 '>
                    <img className='  w-14 ' src="Bed.png" alt=" logo " />
                    <h1> Bedroom </h1>
                  </div>


                  <div className=' gap-1 '>
                    <img className='w-14 ' src="Bath.png" alt="logo" />
                    <h1> Bathroom </h1>
                  </div>

                  <div className=' gap-1 '>
                    <img className='w-14 ' src=" Balconiess.png" alt="logo" />
                    <h1> Balconies </h1>
                  </div>

                  <div className=' gap-1 '>
                    <img className='w-14 ' src="Carparking.png" alt="logo" />
                    <h1> Parking </h1>
                  </div>


                </div>
              </div>
            </div>
            <div className=' flex justify-center items-center gap-10  pb-10 '>

              <div className=' flex-col justify-center items-center '>
                <h1 className='  font-semibold '> Transaction Type </h1>
                <h1> Sale </h1>

              </div>

              <div className=' flex-col   justify-center items-center  '>
                <h1 className=' font-semibold '> Status  </h1>
                <h1> Ready to Move  </h1>
              </div>

              <div className='  flex-col justify-center items-center  '>
                <h1 className=' font-semibold '> Additional Room  </h1>
                <h1> 1 Servant Room </h1>
              </div>

              <div className='flex-col  justify-center items-center  '>
                <h1 className=' font-semibold '> Facing  </h1>
                <h1> North East </h1>
              </div>
            </div>

          </div>
          <div className='bg-white border border-gray-300  h-80 w-96  pt-5 rounded-md'>
            <p className='flex px-8  text-2xl font-bold'> $ 4.85cr </p>
            <p className='flex  px-8  text-sm '> $ 23,150 per sqft </p>

            <div class=" space-x-4 pt-7 px-4 ">
              <button class="bg-blue-500 text-white p-3 rounded hover:bg-blue-700">
                Contact
              </button>
              <button class="bg-transparent border-2 border-blue-500  text-blue-500 py-2 px-6 rounded hover:text-black ">
                Enquiry Now
              </button>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}
export default Rentproperty; 