import React from 'react'
import { Link } from 'react-router-dom';
const Hero = () => {
    return (
        <div className=' '>
            <div className="relative">

                <div>
                    <img pt-20 src="newbackimg.jpeg" alt="Description" className="w-full h-auto" />
                </div>

                <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                    <div className='pb-60'>
                        <div>
                            <div className=' relative '>
                                <div className=' pb-10'>
                                    <div className='bg-slate-300  border border-gray-400 rounded-2xl w-[800px] h-40 pt-5 opacity-80'>
                                        <div className=' px-3  flex justify-center items-center pt-3 '>
                                            <div className='  '>
                                                <div className=' flex justify-center items-center '>
                                                    <div className='   rounded-2xl space-x-20 flex bg-white border border-gray-400  h-24 w-[700px]  justify-center items-center'>

                                                        <Link to={'/flat'}>
                                                            <img className=' w-10 ' src="buildings.png" alt="logo" />
                                                            <h1 className=' px-2' > Flat </h1>
                                                        </Link>
                                                        <Link to={'/pg'}>
                                                           <div className=' px-3'>
                                                           <img className='  w-10 ' src="bunk.png" alt="logo" />
                                                          </div>
                                                           <h1 className=''> PG/hostals </h1>
                                                        </Link>

                                                        <Link to={'/rent'}>
                                                            <img className='w-10' src="house.png" alt="logo" />
                                                            <h1 className=' px-1'> Rent </h1>
                                                        </Link>

                                                        <Link to={'/loan'}>
                                                            <img className=' w-10 ' src="loanji.png" alt="logo" />
                                                            <h1 className=' px-2 '> Loan </h1>
                                                        </Link>

                                                        <Link to={'/documents'}>
                                                            <div className=' px-4 '>
                                                            <img className='w-10' src="document.png" alt="logo" />
                                                            </div>
                                                            <h1> Documents </h1>
                                                        </Link>
                                                    </div>
                                                </div>

                                                <div className="bg-white border border-gray-400  shadow-md rounded-lg px-6 py-4 flex items-center space-x-2  w-[1000px] max-w-4xl mt-4">
                                                    <input type="text" placeholder='Search by BHK "2 BHK for Sale in Delhi"' className="flex-1 px-4 py-2 outline-none bg-gray-100 rounded-md  border border-gray-300 " />
                                                    <button className="bg-purple-700 border font-bold  hover:bg-purple-600 border-gray-500  text-white px-4 py-2 rounded-md">Near Me</button>
                                                    <select className="bg-gray-100 border border-gray-300 text-gray-700 px-4 py-2 rounded-md">
                                                        <option>Budget</option>
                                                        <option>₹20L - ₹50L</option>
                                                        <option>₹50L - ₹1Cr</option>
                                                    </select>
                                                    <select className="bg-gray-100 border border-gray-300  text-gray-700 px-4 py-2 rounded-md">
                                                        <option>Property Type</option>
                                                        <option>Apartment</option>
                                                        <option>Villa</option>
                                                    </select>
                                                    <button className="bg-green-600 text-white  hover:bg-green-500  font-bold  px-6 py-2 rounded-lg">Search</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Hero;






















