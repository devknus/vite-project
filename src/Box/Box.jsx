import React from 'react'
import { Link } from 'react-router-dom';
const Box = () => {
       return (
              <div className='flex justify-center items-center'>
                     <div className='px-10 left'>
                            <div className='pb-10 pt-10 '>
                                   <div className=' flex justify-center items-center'>
                                          <div className=''>
                                                 <h1 className='text-3xl  text-gray-500 font-bold'> Everything you Need at One Place <span className='  text-blue-500 '> In-House Services </span></h1>
                                          </div>
                                   </div>

                                   <div className=' flex justify-center pt-10  space-x-2' >

                                            <div className=' bg-white  shadow-2xl border border-gray-200    w-[200px]  h-40 rounded-xl'>
                                                 <Link to={'/loan'} className=' px-10  pt-8'>
                                                        <div className=' px-14 pb-4'>
                                                               <img className='  w-20 ' src=" loan.png " alt=" Logo " />
                                                        </div>
                                                        <h1 className=' px-20 text-sm font-medium'> Loan </h1>
                                                 </Link>
                                          </div>

                                        <div className=' bg-white  shadow-2xl border border-gray-200    w-[200px]  h-40 rounded-xl'>
                                                 <Link to={'/interiors'} className=' px-10  pt-8'>
                                                        <div className=' px-14 pb-4'>
                                                               <img className=' w-20 ' src=" decorator.png " alt=" Logo " />
                                                        </div>
                                                        <h1 className='  px-12  text-sm font-medium'> Home interior </h1>
                                                 </Link>
                                          </div>


                                          <div className=' bg-white  shadow-2xl border border-gray-200    w-[200px]  h-40 rounded-xl'>
                                                 <Link to={'/propertylegal'} className=' px-10  pt-8'>
                                                        <div className=' px-14 pb-4'>
                                                               <img className=' w-20 ' src=" bill.png " alt=" Logo " />
                                                        </div>
                                                        <h1 className=' px-6  text-sm font-medium'> Property Legal Services </h1>
                                                 </Link>
                                          </div>

                                            <div className=' bg-white  shadow-2xl border border-gray-200    w-[200px]  h-40 rounded-xl'>
                                                 <Link to={'/onlinerent'} className=' px-10  pt-8'>
                                                        <div className=' px-14 pb-4'>
                                                               <img className=' w-20 ' src=" agreement.png " alt=" Logo " />
                                                        </div>
                                                        <h1 className=' px-6 text-sm font-medium'> Online Rent Agreement  </h1>
                                                 </Link>
                                          </div>
                                </div>
                                   <div className=' flex justify-center items-center pt-5 space-x-2' >
 

                                          <div className=' bg-white  shadow-2xl border border-gray-200 w-[200px]  h-40 rounded-xl'>
                                                 <Link to={'/sellpro'} className=' px-2  pt-8'>
                                                        <div className=' px-14 pb-4'>
                                                               <img className='  w-20 ' src=" deal.png " alt=" Logo " />
                                                        </div>
                                                        <h1 className=' px-7 text-sm font-medium'> Sell or Rent Property </h1>
                                                 </Link>
                                          </div>

                                           <div className=' bg-white  shadow-2xl border border-gray-200    w-[200px]  h-40 rounded-xl'>
                                                 <Link to={'/propertyreg'} className=' px-10  pt-8'>
                                                        <div className=' px-14 pb-4'>
                                                               <img className='  w-20 ' src=" land.png " alt=" Logo " />
                                                        </div>
                                                        <h1 className=' px-7 text-sm font-medium'> Property Registration </h1>
                                                 </Link>
                                          </div>

                                              
                                          <div className=' bg-white  shadow-2xl border border-gray-200    w-[200px]  h-40 rounded-xl'>
                                                 <Link to={'/packer'} className=' px-10  pt-8'>
                                                        <div className=' px-14 pb-4'>
                                                               <img className='  w-20 ' src=" shipping.png " alt=" Logo " />
                                                        </div>
                                                        <h1 className=' px-7 text-sm font-medium'> Packer and Movers </h1>
                                                 </Link>
                                          </div>


                                         <div className=' bg-white  shadow-2xl border border-gray-200    w-[200px]  h-40 rounded-xl'>
                                                 <Link to={'/painting'} className=' px-10  pt-8'>
                                                        <div className=' px-14 pb-4'>
                                                               <img className='  w-20 ' src=" paint.png " alt=" Logo " />
                                                        </div>
                                                        <h1 className=' px-5 text-sm font-medium'> Homes Painting Service  </h1>
                                                 </Link>
                                          </div>
                                     </div>
                                   <div className=' flex justify-center items-center pt-5 space-x-2' >

                                      <div className=' bg-white  shadow-2xl border border-gray-200    w-[200px]  h-40 rounded-xl'>
                                                 <Link to={'/rent'} className=' px-10  pt-8'>
                                                        <div className=' px-14 pb-4'>
                                                               <img className='  w-20 ' src=" for-rent.png " alt=" Logo " />
                                                        </div>
                                                        <h1 className=' px-12 text-sm font-medium'> Flat For Rent </h1>
                                                 </Link>
                                          </div>
                                        <div className=' bg-white  shadow-2xl border border-gray-200    w-[200px]  h-40 rounded-xl'>
                                                 <Link to={'/valuation'} className=' px-10  pt-8'>
                                                        <div className=' px-14 pb-4'>
                                                               <img className='  w-20 ' src=" valuation.png " alt=" Logo " />
                                                        </div>
                                                        <h1 className=' px-10 text-sm font-medium '> Documantation </h1>
                                                 </Link>
                                          </div>
                                          <div className=' bg-white  shadow-2xl border border-gray-200    w-[200px]  h-40 rounded-xl'>
                                                 <Link to={'/receipt'} className=' px-10  pt-8'>
                                                        <div className=' px-14 pb-4'>
                                                               <img className='  w-20 ' src=" receipt.png " alt=" Logo " />
                                                        </div>
                                                        <h1 className=' px-6 text-sm font-medium'> Rent Receipt Generator </h1>
                                                 </Link>
                                          </div>
                                          <div className=' bg-white  shadow-2xl border border-gray-200    w-[200px]  h-40 rounded-xl'>
                                                 <Link to={'/vastu'} className=' px-10  pt-8'>
                                                        <div className=' px-14 pb-4'>
                                                               <img className='  w-20 ' src=" compass.png " alt=" Logo " />
                                                        </div>
                                                        <h1 className=' px-10 text-sm font-medium'> Vastu Consultant </h1>
                                                 </Link>
                                          </div>

                                   </div>
                            </div>
                     </div>
                     <div className=' px-10 right   pb-16'>
                            <div className='  rounded-lg  box w-72 h-96 bg-white border  shadow-xl  sticky border-gray-300 '>
                                   <div className='  px-10 pt-7 '>

                                          <h1 className=' text-xl font-bold'> Guest User </h1>
                                          <h1 className=' font-semibold '> your Recent Activity  </h1>
                                          <p className=' text-sm pb-10'>  your property is best in Delhi so that is called  i am choice Kamal Associates </p>

                                          <div className=' bg-blue-600  flex  justify-center items-center  rounded-md'>
                                                 <button className=' p-2 text-white  '> Login/Register </button>
                                          </div>
                                   </div>
                            </div>
                     </div>
              </div>
       )
}
export default Box;

