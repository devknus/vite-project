
{/* <img className=' w-96 ' src="manpack.png" alt="logo" />  */ }
import React from 'react'

const Packer = () => {
  return (
    <div>
      <div className="relative">
        <div className=' pb-10 '>
              {/* page 1 */}
          <div pt-10 alt="Description" className=" w-full bg-blue-600  bg-gradient-to-b from-gray-400 border border-gray-500
           to-green-400 h-[500px]" >

            <div className='flex justify-center items-center '>
             <div className='w-[1000px]   pb-32  px-20 right'>
                <img src=" manpack2.png" alt="" />
              </div>
                {/* text */}
              <div className='left px-10 pb-52'>
                <div className=' pt-20  w-[600px] '>
                  <h1 className=' text-black text-3xl px-14 font-bold  '>
                    "The best move you'll ever make."
                  </h1>
                </div>
                <div className=' pt-5  px-20'>
                  <h1 className=' text-lg font-normal '>
                  Moving your residence from one location to another <br />  can take time and effort. To ensure a smooth shift, y<br />ou  must hire the best packers and movers in Delhi. At <br /> At Kamal Associates, we understand that moving invol <br /> ves   more than simply rearranging furniture, appliances,  and closets. Packing up your items feels like a chall <br /> enging  task that adds an extra layer of difficulty. 
                  </h1>
                </div>

                <div className='  px-24 pt-10 '>
                  <button className=' border border-gray-700  px-10 p-4 rounded-lg bg-red-200 hover:bg-green-400 font-bold'>
                    Explore Now
                  </button>
                </div>
              </div>

            </div>
          </div>

              {/* page2 */}
              <div>
                
              </div>


        </div>
      </div>
    </div>
  )
}
export default Packer