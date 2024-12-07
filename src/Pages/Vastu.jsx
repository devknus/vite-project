import React from 'react'
import { Link } from 'react-router-dom';

const Vastu = () => {
    return (
        <div>
            <div className=' '>
                <div className="relative">
                    <div className=''>
                        <img pt-20 src=" design.png" alt="Description" className="w-full h-auto" />
                    </div>
                </div>
            </div>

              
            <div className=' flex justify-center items-center pt-10 '>
                <h1 className=' text-3xl  font-bold text-red-700'> Our Services </h1>
            </div>

            {/* 1 box */}
            <div>
                <div className=' flex justify-center items-center'>
                    <div className='flex justify-center items-center'>
                    </div>
                    <div className='pt-2 pb-10'>
                        <div className='flex font-semibold   text-gray-600 text-2xl space-x-10 px-14 pb-5'>
                            <div className='flex justify-center items-center'>
                            </div>
                        </div>
                        <div className='flex pb-10'>
                            <div className=' flex items-center justify-center  space-x-14  pt-5 '>
                                <div className="box-content shadow-xl  rounded-xl  h-60  w-40 p-4  border border-gray-300  bg-white">
                                    <h1 className='text-orange-500  px-5  font-semibold '>Vastu for Flats</h1>
                                    <h1 className=' flex justify-center pt-2 items-center  p-5 text-sm'>

                                        Vastu for Flats
                                        Bring good luck and positivity to your flats by following the right Vastu principles. Make sure that they are always on the northeast and eastern side.

                                    </h1>
                                </div>

                                <div className="box-content  shadow-xl rounded-xl  h-60  w-40 p-4   border border-gray-300  bg-white">
                                    <h1 className='text-orange-500  px-3  font-semibold '>Vastu For Office </h1>
                                    <h1 className=' flex justify-center pt-2 items-center p-5  text-sm'> Make the most of workplace design to boost company profitability and success.Make the most of workplace design to boost company profitability and success.

                                    </h1>

                                </div>
                                <div className="box-content shadow-xl rounded-xl  h-60 w-40 p-4 border border-gray-300 bg-white">
                                    <h1 className=' text-orange-500   px-3   font-semibold '>Vastu for Property</h1>
                                    <h1 className='  flex justify-center pt-2 items-center  p-5 text-sm'> Vastu remedies that improve sales and success for business locations. Vastu remedies that improve sales and success for business locations.
                                    </h1>
                                </div>
                                <div className="box-content shadow-xl rounded-xl  h-60 w-40 p-4 border border-gray-300 bg-white">
                                    <h1 className=' text-orange-500  px-3  font-semibold '>Vastu For Home </h1>
                                    <h1 className='  flex justify-center pt-2 items-center  p-5 text-sm'> Maximizing manufacturing space to increase output and security.Maximizing manufacturing space to increase output and security.
                                    </h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            {/* 1 box */}

            <div className=' '>



                {/* vastu pic  */}

                <div className='flex justify-between items-center  px-20 pb-10 '>
                    <div className='right  space-x-5 '>
                        <img className='  rounded-3xl' src=" vastuji.png " alt=" logo " />
                    </div>




                    <div className='left text-sm font-semibold p-5 rounded-lg '>

                        Vastu Shastra What is Vastu Shastra? Vastu<br></br>
                        is the alignment of the five fundamental el <br></br>
                        ements of nature—Fire, Earth, Space, Water, <br></br>
                        and Wind—with cosmic energies.Vastu is an-<br></br>
                        ancient Vedic architectural and design meth-<br></br>
                        odology that is documented in a number of<br></br>
                        Vastu literature. It comprises of guidelines fo- <br></br>
                        r methodically planning  and erecting buildin-<br></br>
                        gs The fundamental idea of vastu  is that eve-<br></br>
                        ry area has a soul of its own, and if that  soul <br></br>
                        is used  properly, a flow of good energy will  <br></br>
                        always surround it.
                    </div>



                </div>

                {/* contact  */}
                <div>
                    <div className="flex items-center justify-center min-h-screen ">
                        <form className="bg-gray-50 border border-gray-200 p-8 rounded shadow-2xl w-full max-w-md">
                            <h2 className="text-2xl font-bold mb-6 text-center">Contact Us</h2>
                            <div className="mb-4 ">
                                <label className="block text-sm font-medium  text-gray-700" htmlFor="name">Name</label>
                                <input 
                                    type="text"
                                    id="name"
                                    className="mt-1 block w-full p-2 border border-gray-300  rounded focus:outline-none focus:ring focus:ring-blue-300"
                                    placeholder="Your Name"
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-sm font-medium text-gray-700" htmlFor="email">Contact </label>
                                <input
                                    type="number"
                                    id="number "
                                    className="mt-1 block w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-300"
                                    placeholder="Your Number "
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-sm font-medium text-gray-700" htmlFor="message">Message</label>
                                <textarea
                                    id="message"
                                    className="mt-1 block w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-300"
                                    placeholder="Your Message"
                                    rows="4"
                                    required
                                />
                            </div>
                            <button
                                type="submit"
                                className="w-full bg-red-500 text-white p-2 rounded hover:bg-blue-600"
                            >
                                Send Message
                            </button>
                        </form>

                    </div>
                </div>
            </div>
        </div>

    )
}
export default Vastu;