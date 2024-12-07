import React from 'react'
import { Link } from 'react-router-dom';
const Vastu = () => {
    return (
        <div>
            <div className='' >
                <div className="relative">
                    <div className=''>
                        <img pt-20 src=" yellowhite.png " alt="Description" className="w-full h-auto" />
                    </div>
                </div>
                {/* box */}
                <div className=' flex'>
                    <div className=' left '>
                        <div>
                            <div className=' flex '>
                                <div className='px-10 left'>
                                    <div className='pb-20 pt-10 '>
                                        <div className=' flex justify-center items-center pb-7  '>
                                            <div className=''>
                                                <h1 className='text-3xl text-yellow-500 font-bold'> Design-Gallery  </h1>
                                            </div>
                                        </div>
                                        <div className='flex  pt-10  space-x-10  px-10 p-3 rounded-xl '>

                                            <div className=' bg-white  shadow-2xl border border-gray-200    w-[200px]  h-40 rounded-xl'>
                                                <Link to={'/livingroom'} className=' px-10  pt-8'>
                                                    <div className=' px-14 pb-4'>
                                                        <img className=' w-14 ' src=" living.png " alt=" Logo " />
                                                    </div>
                                                    <h1 className=' px-12 text-sm font-medium'> Living room  </h1>
                                                </Link>
                                            </div>
                                            <div className=' bg-white  shadow-2xl border border-gray-200    w-[200px]  h-40 rounded-xl'>
                                                <Link to={'/bedroom'} className=' px-10  pt-8'>
                                                    <div className=' px-14 pb-2'>
                                                        <img className='w-16' src="bedroom.png" alt="Logo" />
                                                    </div>
                                                    <h1 className='px-10 text-sm font-medium'> Bedroom Design </h1>
                                                </Link>
                                            </div>
                                            <div className=' bg-white  shadow-2xl border border-gray-200    w-[200px]  h-40 rounded-xl'>
                                                <Link to={'/diningroom'} className=' px-10  pt-8'>
                                                    <div className=' px-14 pb-4'>
                                                        <img className=' w-14 ' src=" dinner.png " alt=" Logo " />
                                                    </div>
                                                    <h1 className=' px-12  text-sm font-medium'> Dining room  </h1>
                                                </Link>
                                            </div>


                                        </div>
                                        <div className=' flex justify-center items-center pt-5 space-x-10  p-3 rounded-xl px-10' >

                                            <div className=' bg-white  shadow-2xl border border-gray-200    w-[200px]  h-40 rounded-xl'>
                                                <Link to={'/onlinerent'} className=' px-10  pt-8'>
                                                    <div className=' px-14 pb-4'>
                                                        <img className='w-14' src=" kitchen.png " alt=" Logo " />
                                                    </div>
                                                    <h1 className=' px-12 text-sm font-medium'> Kitchen Design   </h1>
                                                </Link>
                                            </div>
                                            <div className=' bg-white  shadow-2xl border border-gray-200 w-[200px]  h-40 rounded-xl'>
                                                <Link to={'/bathroom'} className=' px-2  pt-8'>
                                                    <div className=' px-14 pb-4'>
                                                        <img className='  w-16 ' src=" bathroom.png " alt=" Logo " />
                                                    </div>
                                                    <h1 className=' px-10 text-sm font-medium'> Bathroom Design  </h1>
                                                </Link>
                                            </div>
                                            <div className=' bg-white  shadow-2xl border border-gray-200    w-[200px]  h-40 rounded-xl'>
                                                <Link to={'/wardrobe'} className=' px-10  pt-8'>
                                                    <div className=' px-14 pb-4'>
                                                        <img className='  w-16 ' src=" wardrobe.png " alt=" Logo " />
                                                    </div>
                                                    <h1 className=' px-10 text-sm font-medium'> Wardrobe Design  </h1>
                                                </Link>
                                            </div>


                                        </div>
                                        <div className='flex justify-center items-center pt-5  space-x-10 p-3 rounded-xl  pb-10 px-10' >
                                            <div className=' bg-white  shadow-2xl border border-gray-200  w-[200px]  h-40 rounded-xl'>
                                                <Link to={'/packer'} className=' px-10  pt-8'>
                                                    <div className=' px-14 pb-4'>
                                                        <img className=' w-16 ' src=" homeoffice.png " alt=" Logo " />
                                                    </div>
                                                    <h1 className=' px-9 text-sm font-medium'> Home office Design  </h1>
                                                </Link>
                                            </div>
                                            <div className=' bg-white  shadow-2xl border border-gray-200    w-[200px]  h-40 rounded-xl'>
                                                <Link to={'/study'} className=' px-10  pt-8'>
                                                    <div className=' px-14 pb-4'>
                                                        <img className='  w-16 ' src=" study.png " alt=" Logo " />
                                                    </div>
                                                    <h1 className=' px-14 text-sm font-medium'> Study room   </h1>
                                                </Link>
                                            </div>
                                            <div className=' bg-white  shadow-2xl border border-gray-200    w-[200px]  h-40 rounded-xl'>
                                                <Link to={'/kidsroom'} className=' px-10  pt-8'>
                                                    <div className=' px-14 pb-4'>
                                                        <img className='  w-16 ' src=" kids.png " alt=" Logo " />
                                                    </div>
                                                    <h1 className=' px-12 text-sm font-medium'> Kids bedroom  </h1>
                                                </Link>
                                            </div>


                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className=' right pt-20 '>
                        <div className="flex items-center justify-center min-h-screen ">
                            <form className="bg-white p-10 rounded shadow-xl border border-gray-200 w-[450px] ">
                                <h2 className="text-md font-semibold mb-6 text-center">Interior Design Services Executed to Perfection</h2>

                                <div className="mb-4">

                                    <input
                                        type="text"
                                        id="name"
                                        className="mt-1 block w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-300"
                                        placeholder="Your Name"
                                        required
                                    />
                                </div>
                                <div className="mb-4">

                                    <input
                                        type="text"
                                        id="number"
                                        className="mt-1 block w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-300"
                                        placeholder="Phone Number"
                                        required
                                    />
                                </div>
                                <div className="mb-4">

                                    <input
                                        type="text"
                                        id="email"
                                        className="mt-1 block w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-300"
                                        placeholder="Email"
                                        required
                                    />
                                </div>

                                <div className="mb-4">

                                    <input
                                        type="text"
                                        id="city "
                                        className="mt-1 block w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-300"
                                        placeholder="Choose City "
                                        required
                                    />
                                </div>
                                <div className="mb-4">

                                    <input
                                        type="text"
                                        id="type"
                                        className="mt-1 block w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-300"
                                        placeholder=" i'm interest in interior for "
                                        required
                                    />
                                </div>

                                <button

                                    type="submit"
                                    className="w-full bg-orange-600 text-white p-5 rounded font-bold  hover:bg-orange-400"
                                >
                                    Send Message
                                </button>
                            </form>

                        </div>

                    </div>
                </div>

            </div>

            {/* box */}

            <div className=' flex  px-44  pb-7'>
                <h1 className=' text-4xl  text-gray-700  font-semibold  '> Discover the art of interior transformation </h1>
            </div>

            <div className=' flex  justify-center  space-x-5 pb-10 '>


                <div className='flex justify-center items-center border rounded-2xl border-gray-500 w-60 h-60 bg-gray-100'>
                    <div className='   '>
                        <div className=' '>
                            <img className='w-full  rounded-t-2xl ' src="packer.jpg" alt="logo" />
                        </div>
                        <h1 className=' text-xl  font-bold  pt-1 p-2'>Step 1 </h1>
                        <p className=' p-3 pt-1'>Book an appointment </p>
                        <div>
                        </div>
                    </div>

                    <div>

                    </div>
                </div>


                <div className='flex justify-center items-center border rounded-2xl border-gray-500 w-60 h-60 bg-gray-100'>
                    <div className='   '>
                        <div className=' '>
                            <img className='w-full  rounded-t-2xl ' src="packer.jpg" alt="logo" />
                        </div>
                        <h1 className=' text-xl  font-bold  pt-1 p-2'>Step 2 </h1>
                        <p className=' p-3 pt-1'>Meet our designers </p>
                        <div>
                        </div>
                    </div>

                    <div>

                    </div>
                </div>


                <div className='flex justify-center items-center border rounded-2xl border-gray-500 w-60 h-60 bg-gray-100'>
                    <div className='   '>
                        <div className=' '>
                            <img className='w-full  rounded-t-2xl ' src="packer.jpg" alt="logo" />
                        </div>
                        <h1 className=' text-xl  font-bold  pt-1 p-2'>Step 3 </h1>
                        <p className=' p-3 pt-1'> Personalise your designs  </p>
                        <div>
                        </div>
                    </div>

                    <div>

                    </div>
                </div>


                <div className='flex justify-center items-center border rounded-2xl border-gray-500 w-60 h-60 bg-gray-100'>
                    <div className='   '>
                        <div className=' '>
                            <img className='w-full  rounded-t-2xl ' src="packer.jpg" alt="logo" />
                        </div>
                        <h1 className=' text-xl  font-bold  pt-1 p-2'>Step 4 </h1>
                        <p className=' p-3 pt-1'> Move in  </p>
                        <div>
                        </div>
                    </div>

                    <div>

                    </div>
                </div>

            </div>

            <div className=' flex justify-center items-center '>
                <h1 className=' font-semibold  text-3xl  text-blue-600 '> Design Your Dream home  </h1>
            </div>

            <div className=' flex  space-x-96  justify-center  pt-20 '>


                <div className=' '>
                    <div className=" relative ">
                        <div className=" rounded-lg w-96 shadow-md ">
                            <img src=" bedroomimg.jpeg " alt="Description" className=" rounded-md " />

                            <div className=" absolute right-10  top-5 left-20 w-full h-full flex items-center justify-end pb-10">
                                <div className=" shadow-md  font-semibold text-black text-sm border border-gray-300 bg-white p-3 rounded-xl ">
                                    <h1 className=' font-semibold text-lg '> 1 BHK Flat Design </h1>
                                </div>
                            </div>

                            <div className='flex justify-between'>
                                <div className=' flex  pt-5  px-2  justify-around'>

                                </div>
                                <div className=' flex  pt-5  px-2  justify-around '>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>




                <div className=''>
                    <div className='w-96 pt-60'>
                        <img className=' rounded-xl ' src=" bedroomimg.jpeg " alt=" logo " />
                    </div>
                </div>

            </div>

            <div className=' flex  space-x-96  justify-center  pt-20 '>


                <div className=''>
                    <div className='w-96'>
                        <img className='rounded-xl' src="bedroomimg.jpeg " alt=" logo " />
                        <div className=' w-20 h-5'>
                        </div>
                    </div>
                </div>

                <div className=' pb-20 '>
                    <div className=' w-96 pt-60'>
                        <img className=' rounded-xl ' src=" bedroomimg.jpeg" alt=" logo " />
                    </div>
                </div>
            </div>

            <div className='  flex  justify-center   items-center '>
                <div className=' px-20 '>
                    <img className='  w-[1000px]' src="sofaimg.png" alt="" />
                </div>
                <div className=' px-20 text-3xl font-semibold'>
                  <h1>  Home Interiors  </h1> 
                    <div>
                    <p className=' text-lg  font-normal'>Exceptional designs that cater to your aesthetic,
                    functional and aspirational goals.</p>
                    </div>
                   <div className=' pt-5'>
                   <div className='  w-52 rounded-md   font-medium text-lg p-3 bg-pink-600 '>
                   <button className=' px-1  '>
                        <h1 className=' text-white '> Book free consultant </h1>  
                    </button>
                   </div>
                   </div>
                </div>
           </div>
      </div>

    )
}
export default Vastu;