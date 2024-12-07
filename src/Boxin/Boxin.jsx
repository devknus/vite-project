import React from 'react'
const Boxin = () => {
    return (
        <div className=' flex justify-center items-center '>
            <div className=' px-5 right '>
                <div className='  rounded-lg  box w-72 h-96 bg-white border  shadow-xl  sticky border-gray-300 '>
                    <div className='  px-10 pt-7 '>

                        <h1 className=' text-xl font-bold'> Guest User </h1>
                        <h1 className=' font-semibold '> your Recent Activity  </h1>
                        <p className=' text-sm pb-10'>  your property is best in Delhi so that is called 
                            
                         i am choice Kamal Associates </p>

                        <div className='bg-blue-600  flex justify-center items-center  rounded-md'>
                            <button className='p-2 text-white'> Login/Register </button>
                        </div>
                    </div>
                </div>
            </div>

            <div className='right '>
                <div className='px-5'>
                    <div className='flex justify-center items-center '>
                        
                    </div>
                    <div className=' pt-10 pb-10 '>
                        <div className='bg-pink-50 shadow-2xl border border-gray-200 rounded-md p-2'>
                            <div className='flex font-semibold text-gray-600 text-2xl space-x-10 px-14 pb-5'>
                                <div className='flex justify-center items-center'>
                                    <img className=' w-20' src="yellowhouses.png" alt=" logo " />
                                    <p className='  px-5'> BHK  Choice in Mind  </p>

                                </div>
                            </div>
                            <div className='flex pb-10'>
                                <div className=' flex items-center justify-center space-x-5 px-5 pt-5 '>

                                    <div className="box-content shadow-xl  rounded-xl  h-40  w-40 p-4 border-4 bg-white">

                                        <img className='w-20  ' src="blue-house.png " alt=" logo " />
                                        <h1 className=' font-bold flex justify-center pt-2 items-center  text-sm'> 1RK / 1BHK FLAT </h1>

                                    </div>

                                    <div className="box-content  shadow-xl rounded-xl  h-40 w-40 p-4 border-4 bg-white">
                                        <img className='w-20 ' src="blue-house.png " alt=" logo " />
                                        <h1 className=' font-bold flex justify-center pt-2 items-center  text-sm'> 2RK / 2BHK FLAT </h1>

                                    </div>

                                    <div className="box-content shadow-xl   rounded-xl  h-40 w-40 p-4 border-4 bg-white">
                                        <img className='w-20 ' src="blue-house.png " alt=" logo " />
                                        <h1 className=' font-bold flex justify-center pt-2 items-center  text-sm'> 3RK / 3BHK FLAT </h1>

                                    </div>

                                    <div className="box-content shadow-xl   rounded-xl  h-40 w-40 p-4 border-4 bg-white">
                                        <img className='w-20 ' src="blue-house.png " alt=" logo " />
                                        <h1 className=' font-bold flex justify-center pt-2 items-center  text-sm'> 4RK / 4BHK FLAT </h1>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}
export default Boxin;