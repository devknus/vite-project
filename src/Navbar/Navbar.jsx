import React, { useState } from 'react'
import { Link } from 'react-router-dom';
const Navbar = () => {
    const [isBuy, setbuyOpen]   = useState(false);
    const [isSale, setsaleOpen] = useState(false);
    const [isRent, setrentOpen] = useState(false);
    const [isService, setserviceOpen] = useState(false);
    const [isPost, setpostOpen] = useState(false)

    const toggleDropbuydown = () => {
        setbuyOpen(!isBuy)
    };
    const toggleDropsaledown = () => {
        setsaleOpen(!isSale)
    };
    const toggleDroprentdown = () => {
        setrentOpen(!isRent)
    }
    const toggleDropservicesdown = () => {
        setserviceOpen(!isService)
    }
    const toggleDroppostdown = () => {
        setpostOpen(!isPost)
    }
    return (
        <div className='bg-gray-200  border border-gray-300'>
            <div className='flex justify-between px-10 '>
                <div className=' flex justify-start items-center gap-3' >
                    <img className=' w-10 rounded-full ' src="public/KamalA.jfif" alt="Logo" />
                    <h1 className=' text-blue-700 font-bold'> Kamal <span className=' text-orange-700'> Associates </span> </h1>
                </div>

                <div className='flex justify-normal pt-2 space-x-5'>

                    <div className=' cursor-pointer font-semibold hover:bg-blue-300 bg-gray-200  m-3  border border-gray-300 w-20  h-10 rounded-md '>
                        <Link to={'/'} className=' flex justify-center items-center h-full'>
                            Home
                        </Link>
                    </div>

                    {/* Buy */}
                    <Link to={'/'} className=' cursor-pointer font-semibold  bg-gray-200  hover:bg-blue-300  m-3  border border-gray-300   w-20  h-10  rounded-md '>
                        <div className=' flex justify-center items-center '>
                            <button
                                onClick={toggleDropbuydown}
                                className="inline-flex justify-center w-full rounded-md shadow-sm  py-2 bg-gray-200 text-sm font-medium text-gray-700 hover:bg-blue-300 focus:outline-none "
                            >
                                Buy

                            </button>
                        </div>
                        {isBuy && (


                            <div className="absolute right-0 z-10 mt-1 p-7 w-[40rem]  rounded-md shadow-lg bg-gray-100 ring-1 ring-black ring-opacity-5 ocus:ring   ">
                                <div className='flex justify-between items-center '>

                                    <div className=' '>

                                        <div className=" flex  py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                                            <Link className="flex px-2 py-2 text-sm text-black hover:bg-gray-100" role="menuitem">Popular Choice </Link>
                                        </div>

                                        <div className=" flex  py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                                            <Link className="flex px-2 py-2 text-sm text-black hover:bg-gray-100" role="menuitem">Owner Property </Link>
                                        </div>

                                        <div className=" flex  py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                                            <Link className="flex px-2 py-2 text-sm text-black hover:bg-gray-100" role="menuitem"> Budget Home </Link>
                                        </div>

                                        <div className=" flex  py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                                            <Link className="flex px-2 py-2 text-sm text-black hover:bg-gray-100" role="menuitem"> Premium Home </Link>
                                        </div>

                                        <div className=" flex  py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                                            <Link className="flex px-2 py-2 text-sm text-black hover:bg-gray-100" role="menuitem"> New Projects  </Link>
                                        </div> </div>


                                    <div className=' '>

                                        <div className=" flex  py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                                            <Link className="flex px-2 py-2 text-sm text-black hover:bg-gray-100" role="menuitem">Popular Type</Link>
                                        </div>

                                        <div className=" flex  py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                                            <Link to={'/1bhkflat'} className="flex px-2 py-2 text-sm text-black hover:bg-gray-100" role="menuitem">1 BHK </Link>
                                        </div>

                                        <div className=" flex  py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                                            <Link to={'/2bhkflat'} className="flex px-2 py-2 text-sm text-black hover:bg-gray-100" role="menuitem">2 BHK </Link>
                                        </div>

                                        <div className=" flex  py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                                            <Link to={'/3bhkflat'} className="flex px-2 py-2 text-sm text-black hover:bg-gray-100" role="menuitem"> 3 BHK </Link>
                                        </div>

                                        <div className=" flex  py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                                            <Link to={'/4bhkflat'} className="flex px-2 py-2 text-sm text-black hover:bg-gray-100" role="menuitem"> 4 BHK </Link>
                                        </div>

                                    </div>
                                    <div className=' '>

                                        <div className=" flex  py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                                            <Link className="flex px-2 py-2 text-sm text-black hover:bg-gray-100" role="menuitem">Budget </Link>
                                        </div>

                                        <div className=" flex  py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                                            <Link className="flex px-2 py-2 text-sm text-black hover:bg-gray-100" role="menuitem"> Under  rupes 50 Lac </Link>
                                        </div>

                                        <div className=" flex  py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                                            <Link className="flex px-2 py-2 text-sm text-black hover:bg-gray-100" role="menuitem">  Under rupes 60 Lac </Link>
                                        </div>

                                        <div className=" flex  py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                                            <Link className="flex px-2 py-2 text-sm text-black hover:bg-gray-100" role="menuitem"> Under rupees 1 Cr </Link>
                                        </div>

                                        <div className=" flex  py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                                            <Link className="flex px-2 py-2 text-sm text-black hover:bg-gray-100" role="menuitem"> Under rupees 2 Cr  </Link>
                                        </div> </div>
                                    <div> <div className=" flex  py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                                        <Link className="flex px-2 py-2 text-sm text-black hover:bg-gray-100" role="menuitem"> Explore </Link>
                                    </div>

                                        <div className=" flex  py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                                            <Link className="flex px-2 py-2 text-sm text-black hover:bg-gray-100" role="menuitem"> Localities in South Delhi </Link>
                                        </div>

                                        <div className=" flex  py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                                            <Link className="flex px-2 py-2 text-sm text-black hover:bg-gray-100" role="menuitem">  Localities in North Delhi </Link>
                                        </div>

                                        <div className=" flex  py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                                            <Link className="flex px-2 py-2 text-sm text-black hover:bg-gray-100" role="menuitem">  Localities in New  Delhi </Link>
                                        </div>

                                        <div className=" flex  py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                                            <Link className="flex px-2 py-2 text-sm text-black hover:bg-gray-100" role="menuitem">  Localities in Gurugao  </Link>
                                        </div> </div>

                                </div>
                            </div>


                        )}

                    </Link>
                    {/* Buy */}

                    {/* sale */}
                    <div className=' cursor-pointer font-semibold  bg-gray-200  hover:bg-blue-300  m-3  border border-gray-300   w-20  h-10  rounded-md '>
                        <div className=' flex justify-center items-center h-full'>
                            <button
                                onClick={toggleDropsaledown}
                                className="inline-flex justify-center w-full rounded-md  shadow-sm px-5 py-2 bg-gray-200 text-sm font-medium text-gray-700 hover:bg-blue-300 focus:outline-none"
                            >
                                Sale

                            </button>
                        </div>
                        {isSale && (


                            <div className="absolute right-0 z-10 mt-2 w-[40rem] px-10  rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                                <div className='flex justify-between items-center'>

                                    <div className=' '>

                                        <div className=" flex  py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                                            <Link className="flex px-2 py-2 text-sm text-black hover:bg-gray-100" role="menuitem">Popular Choice </Link>
                                        </div>

                                        <div className=" flex  py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                                            <Link className="flex px-2 py-2 text-sm text-black hover:bg-gray-100" role="menuitem">Owner Property </Link>
                                        </div>

                                        <div className=" flex  py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                                            <Link className="flex px-2 py-2 text-sm text-black hover:bg-gray-100" role="menuitem"> Budget Home </Link>
                                        </div>

                                        <div className=" flex  py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                                            <Link className="flex px-2 py-2 text-sm text-black hover:bg-gray-100" role="menuitem"> Premium Home </Link>
                                        </div>

                                        <div className=" flex  py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                                            <Link className="flex px-2 py-2 text-sm text-black hover:bg-gray-100" role="menuitem"> New Projects  </Link>
                                        </div> </div>


                                    <div className=' '>

                                        <div className=" flex  py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                                            <Link className="flex px-2 py-2 text-sm text-black hover:bg-gray-100" role="menuitem">Popular Type</Link>
                                        </div>

                                        <div className=" flex  py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                                            <Link className="flex px-2 py-2 text-sm text-black hover:bg-gray-100" role="menuitem">1 BHK </Link>
                                        </div>

                                        <div className=" flex  py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                                            <Link className="flex px-2 py-2 text-sm text-black hover:bg-gray-100" role="menuitem">2 BHK </Link>
                                        </div>

                                        <div className=" flex  py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                                            <Link className="flex px-2 py-2 text-sm text-black hover:bg-gray-100" role="menuitem"> 3 BHK </Link>
                                        </div>

                                        <div className=" flex  py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                                            <Link className="flex px-2 py-2 text-sm text-black hover:bg-gray-100" role="menuitem"> 4 BHK   </Link>
                                        </div>

                                    </div>
                                    <div className=' '>

                                        <div className=" flex  py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                                            <Link className="flex px-2 py-2 text-sm text-black hover:bg-gray-100" role="menuitem">Budget </Link>
                                        </div>

                                        <div className=" flex  py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                                            <Link className="flex px-2 py-2 text-sm text-black hover:bg-gray-100" role="menuitem"> Under  rupes 50 Lac </Link>
                                        </div>

                                        <div className=" flex  py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                                            <Link className="flex px-2 py-2 text-sm text-black hover:bg-gray-100" role="menuitem">  Under rupes 60 Lac </Link>
                                        </div>

                                        <div className=" flex  py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                                            <Link className="flex px-2 py-2 text-sm text-black hover:bg-gray-100" role="menuitem"> Under rupees 1 Cr </Link>
                                        </div>

                                        <div className=" flex  py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                                            <Link className="flex px-2 py-2 text-sm text-black hover:bg-gray-100" role="menuitem"> Under rupees 2 Cr  </Link>
                                        </div> </div>
                                    <div> <div className=" flex  py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                                        <Link className="flex px-2 py-2 text-sm text-black hover:bg-gray-100" role="menuitem"> Explore </Link>
                                    </div>

                                        <div className=" flex  py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                                            <Link className="flex px-2 py-2 text-sm text-black hover:bg-gray-100" role="menuitem"> Localities in South Delhi </Link>
                                        </div>

                                        <div className=" flex  py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                                            <Link className="flex px-2 py-2 text-sm text-black hover:bg-gray-100" role="menuitem">  Localities in North Delhi </Link>
                                        </div>

                                        <div className=" flex  py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                                            <Link className="flex px-2 py-2 text-sm text-black hover:bg-gray-100" role="menuitem">  Localities in New  Delhi </Link>
                                        </div>

                                        <div className=" flex  py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                                            <Link className="flex px-2 py-2 text-sm text-black hover:bg-gray-100" role="menuitem">  Localities in Gurugao  </Link>
                                        </div> </div>

                                </div>
                            </div>


                        )}

                    </div>
                    {/* sale */}


                    {/* Rent */}
                    <div className=' cursor-pointer font-semibold  bg-gray-200  hover:bg-blue-300  m-3  border border-gray-300   w-20  h-10  rounded-md '>
                        <div className=' flex justify-center items-center h-full'>
                            <button
                                onClick={toggleDroprentdown}
                                className="inline-flex justify-center w-full rounded-md shadow-sm px-5 py-2 bg-gray-200 text-sm font-medium text-gray-700 hover:bg-blue-300 focus:outline-none"
                            >
                                Rent

                            </button>
                        </div>
                        {isRent && (


                            <div className="absolute right-0 z-10 mt-2 w-[40rem] px-10  rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                                <div className='flex justify-between items-center'>

                                    <div className=' '>

                                        <div className=" flex  py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                                            <Link className="flex px-2 py-2 text-sm text-black hover:bg-gray-100" role="menuitem">Popular Choice </Link>
                                        </div>

                                        <div className=" flex  py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                                            <Link className="flex px-2 py-2 text-sm text-black hover:bg-gray-100" role="menuitem">Owner Property </Link>
                                        </div>

                                        <div className=" flex  py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                                            <Link className="flex px-2 py-2 text-sm text-black hover:bg-gray-100" role="menuitem"> Budget Home </Link>
                                        </div>

                                        <div className=" flex  py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                                            <Link className="flex px-2 py-2 text-sm text-black hover:bg-gray-100" role="menuitem"> Premium Home </Link>
                                        </div>

                                        <div className=" flex  py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                                            <Link className="flex px-2 py-2 text-sm text-black hover:bg-gray-100" role="menuitem"> New Projects  </Link>
                                        </div> </div>


                                    <div className=' '>

                                        <div className=" flex  py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                                            <Link className="flex px-2 py-2 text-sm text-black hover:bg-gray-100" role="menuitem">Popular Type</Link>
                                        </div>

                                        <div className=" flex  py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                                            <Link className="flex px-2 py-2 text-sm text-black hover:bg-gray-100" role="menuitem">1 BHK </Link>
                                        </div>

                                        <div className=" flex  py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                                            <Link className="flex px-2 py-2 text-sm text-black hover:bg-gray-100" role="menuitem">2 BHK </Link>
                                        </div>

                                        <div className=" flex  py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                                            <Link className="flex px-2 py-2 text-sm text-black hover:bg-gray-100" role="menuitem"> 3 BHK </Link>
                                        </div>

                                        <div className=" flex  py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                                            <Link className="flex px-2 py-2 text-sm text-black hover:bg-gray-100" role="menuitem"> 4 BHK   </Link>
                                        </div>

                                    </div>
                                    <div className=' '>

                                        <div className=" flex  py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                                            <Link className="flex px-2 py-2 text-sm text-black hover:bg-gray-100" role="menuitem">Budget </Link>
                                        </div>

                                        <div className=" flex  py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                                            <Link className="flex px-2 py-2 text-sm text-black hover:bg-gray-100" role="menuitem"> Under  rupes 50 Lac </Link>
                                        </div>

                                        <div className=" flex  py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                                            <Link className="flex px-2 py-2 text-sm text-black hover:bg-gray-100" role="menuitem">  Under rupes 60 Lac </Link>
                                        </div>

                                        <div className=" flex  py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                                            <Link className="flex px-2 py-2 text-sm text-black hover:bg-gray-100" role="menuitem"> Under rupees 1 Cr </Link>
                                        </div>

                                        <div className=" flex  py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                                            <Link className="flex px-2 py-2 text-sm text-black hover:bg-gray-100" role="menuitem"> Under rupees 2 Cr  </Link>
                                        </div> </div>
                                    <div> <div className=" flex  py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                                        <Link className="flex px-2 py-2 text-sm text-black hover:bg-gray-100" role="menuitem"> Explore </Link>
                                    </div>

                                        <div className=" flex  py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                                            <Link className="flex px-2 py-2 text-sm text-black hover:bg-gray-100" role="menuitem"> Localities in South Delhi </Link>
                                        </div>

                                        <div className=" flex  py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                                            <Link className="flex px-2 py-2 text-sm text-black hover:bg-gray-100" role="menuitem">  Localities in North Delhi </Link>
                                        </div>

                                        <div className=" flex  py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                                            <Link className="flex px-2 py-2 text-sm text-black hover:bg-gray-100" role="menuitem">  Localities in New  Delhi </Link>
                                        </div>

                                        <div className=" flex  py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                                            <Link className="flex px-2 py-2 text-sm text-black hover:bg-gray-100" role="menuitem">  Localities in Gurugao  </Link>
                                        </div> </div>

                                </div>
                            </div>


                        )}

                    </div>
                    {/* Rent */}


                    {/* services */}
                    <div className=' cursor-pointer   bg-gray-200  hover:bg-blue-300  m-3  border border-gray-300   w-20  h-10  rounded-md '>
                        <div className=' flex justify-center items-center h-full'>
                            <button
                                onClick={toggleDropservicesdown}
                                className="inline-flex justify-center w-full  font-semibold rounded-md  shadow-sm px-5 py-2 bg-gray-200 text-sm text-gray-700 hover:bg-blue-300 focus:outline-none"
                            >
                                Services

                            </button>
                        </div>
                        {isService && (


                            <div className="absolute right-0 z-10 mt-2 w-[40rem] px-10  rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                                <div className='flex justify-between items-center'>

                                    <div className=' '>

                                        <div className=" flex  py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                                            <Link className="flex px-2 py-2 text-sm text-black hover:bg-gray-100" role="menuitem">Popular Choice </Link>
                                        </div>

                                        <div className=" flex  py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                                            <Link className="flex px-2 py-2 text-sm text-black hover:bg-gray-100" role="menuitem">Owner Property </Link>
                                        </div>

                                        <div className=" flex  py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                                            <Link className="flex px-2 py-2 text-sm text-black hover:bg-gray-100" role="menuitem"> Budget Home </Link>
                                        </div>

                                        <div className=" flex  py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                                            <Link className="flex px-2 py-2 text-sm text-black hover:bg-gray-100" role="menuitem"> Premium Home </Link>
                                        </div>

                                        <div className=" flex  py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                                            <Link className="flex px-2 py-2 text-sm text-black hover:bg-gray-100" role="menuitem"> New Projects  </Link>
                                        </div> </div>


                                    <div className=' '>

                                        <div className=" flex  py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                                            <Link className="flex px-2 py-2 text-sm text-black hover:bg-gray-100" role="menuitem">Popular Type</Link>
                                        </div>

                                        <div className=" flex  py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                                            <Link className="flex px-2 py-2 text-sm text-black hover:bg-gray-100" role="menuitem">1 BHK </Link>
                                        </div>

                                        <div className=" flex  py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                                            <Link className="flex px-2 py-2 text-sm text-black hover:bg-gray-100" role="menuitem">2 BHK </Link>
                                        </div>

                                        <div className=" flex  py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                                            <Link className="flex px-2 py-2 text-sm text-black hover:bg-gray-100" role="menuitem"> 3 BHK </Link>
                                        </div>

                                        <div className=" flex  py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                                            <Link className="flex px-2 py-2 text-sm text-black hover:bg-gray-100" role="menuitem"> 4 BHK   </Link>
                                        </div>

                                    </div>
                                    <div className=' '>

                                        <div className=" flex  py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                                            <Link className="flex px-2 py-2 text-sm text-black hover:bg-gray-100" role="menuitem">Budget </Link>
                                        </div>

                                        <div className=" flex  py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                                            <Link className="flex px-2 py-2 text-sm text-black hover:bg-gray-100" role="menuitem"> Under  rupes 50 Lac </Link>
                                        </div>

                                        <div className=" flex  py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                                            <Link className="flex px-2 py-2 text-sm text-black hover:bg-gray-100" role="menuitem">  Under rupes 60 Lac </Link>
                                        </div>

                                        <div className=" flex  py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                                            <Link className="flex px-2 py-2 text-sm text-black hover:bg-gray-100" role="menuitem"> Under rupees 1 Cr </Link>
                                        </div>

                                        <div className=" flex  py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                                            <Link className="flex px-2 py-2 text-sm text-black hover:bg-gray-100" role="menuitem"> Under rupees 2 Cr  </Link>
                                        </div> </div>
                                    <div> <div className=" flex  py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                                        <Link className="flex px-2 py-2 text-sm text-black hover:bg-gray-100" role="menuitem"> Explore </Link>
                                    </div>

                                        <div className=" flex  py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                                            <Link className="flex px-2 py-2 text-sm text-black hover:bg-gray-100" role="menuitem"> Localities in South Delhi </Link>
                                        </div>

                                        <div className=" flex  py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                                            <Link className="flex px-2 py-2 text-sm text-black hover:bg-gray-100" role="menuitem">  Localities in North Delhi </Link>
                                        </div>

                                        <div className=" flex  py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                                            <Link className="flex px-2 py-2 text-sm text-black hover:bg-gray-100" role="menuitem">  Localities in New  Delhi </Link>
                                        </div>

                                        <div className=" flex  py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                                            <Link className="flex px-2 py-2 text-sm text-black hover:bg-gray-100" role="menuitem">  Localities in Gurugao </Link>
                                        </div> </div>
                                </div>
                            </div>
                        )}
                    </div>
                    {/* services */}


                    {/* blog */}
                    <div className=' cursor-pointer   bg-gray-200  hover:bg-blue-300  m-3  border border-gray-300   w-20  h-10  rounded-md '>
                        <div className=' flex justify-center items-center h-full'>
                            <button

                                className="inline-flex justify-center w-full  font-semibold rounded-md  shadow-sm px-5 py-2 bg-gray-200 text-sm text-gray-700 hover:bg-blue-300 focus:outline-none"
                            >
                                Blog

                            </button>
                        </div>

                    </div>
                    {/* blog */}

                    {/* contact */}
                    <Link to={'/contact'} className=' cursor-pointer   bg-gray-200  hover:bg-blue-300  m-3  border border-gray-300   w-20  h-10  rounded-md '>
                        <div className=' flex justify-center items-center h-full'>
                            <button

                                className="inline-flex justify-center w-full  font-semibold rounded-md  shadow-sm px-5 py-2 bg-gray-200 text-sm text-gray-700 hover:bg-blue-300 focus:outline-none"
                            >
                                Contact

                            </button>
                        </div>

                    </Link>
                    {/* contact */}

                </div>

              {/* post property */}
                 <Link to={'/postproperty'} className=' flex justify-center items-center pt-3'>
                    <div className="relative inline-block text-left ">
                        <div>
                            <button className="text-white bg-[#06b6d4] hover:bg-[#06b5d4b7] focus:ring-4 focus:ring-blue-300 
                                           font-medium rounded-2xl text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700
                                           focus:outline-none dark:focus:ring-blue-800 border border-blue-700 " >
                                           Post Property
                            </button>
                        </div>
                     </div>
                </Link>
            
            </div>
        </div>
    )
}
export default Navbar;




