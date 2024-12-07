import React, { useState } from "react";
const Postproperty = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for contacting us!");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };
  return (
    //    post property 
    <div>
      <div className=' flex justify-center'>
        <div className=' px-16 pt-10 '>
          <h1 className='text-gray-600 text-3xl font-bold'>
            Post,Search,Find,Simplifying Real Estate  <br />
            <span className="text-blue-600"> in Kamal Associates."</span>
          </h1>
          <img className='w-[500px]' src=" img2.png" alt="" />
        </div>
        <div>
          <section className="min-h-screen flex items-center justify-center px-4 py-8">
            <div className="w-full max-w-xl bg-gray-100 border border-gray-200 shadow-2xl  rounded-lg p-8">
              <h2 className="text-xl font-bold  text-gray-500 mb-4"> Start posting your property, its free.</h2>
                 <form action="#" method="POST" class="space-y-6">

                <div className=" flex space-x-5  ">
                  <div>
                    <label for="title" class="block text-sm font-medium text-gray-700">Property Title</label>
                    <input
                      type="text"
                      id="title"
                      name="title"
                      required
                      placeholder="E.g., 2BHK Apartment in Downtown"
                      class="mt-2 w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 outline-none"
                    />
                  </div>


                  <div>
                    <label for="location" class="block text-sm font-medium text-gray-700">Location</label>
                    <input
                      type="text"
                      id="location"
                      name="location"
                      required
                      placeholder="Eg., New Delhi "
                      class="mt-2 w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 outline-none"
                    />
                  </div>
                </div>


                <div className=" flex space-x-5 ">
                  <div>
                    <label for="price" class="block text-sm font-medium text-gray-700">Price (INR)</label>
                    <input
                      type="number"
                      id="price"
                      name="price"
                      required
                      placeholder="E.g., 200000"
                      class="mt-2 w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 outline-none"
                    />
                  </div>


                  <div>
                    <label for="type" class="block text-sm font-medium text-gray-700">Property Type</label>
                    <select
                      id="type"
                      name="type"
                      required
                      className="mt-2 w-full px-4 py-2 border border-gray-300 rounded-lg 
                      focus:ring-blue-500 focus:border-blue-500 outline-none"
                    >
                      <option value="">Select Type</option>
                      <option value="apartment"> 1 BHK </option>
                      <option value="house">2 BHK </option>
                      <option value="commercial">3 BHK </option>
                      <option value="land">4 BHK </option>
                    </select>
                  </div>
                </div>


                <div>
                  <label for="description" className="block text-sm font-medium text-gray-700">Description</label>
                  <textarea
                    id="description"
                    name="description"

                    required
                    placeholder="Write a brief description about the property..."
                    className="mt-2 w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 outline-none"
                  ></textarea>
                </div>


                <div className=" ">
                  <label for="image" className="block text-sm font-medium text-gray-700">Upload Images</label>
                  <input
                    type="file"
                    id="image"
                    name="image"
                    accept="image/*"
                    multiple
                    className="mt-2 w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 outline-none"
                  />
                </div>


                <div class="text-center">
                  <button
                    type="submit"
                    className="w-full  p-3 bg-blue-500 text-white font-bold rounded-lg hover:bg-blue-600 focus:ring-2 focus:ring-blue-300"
                  >
                    Post Property
                  </button>
                </div>


              </form>
            </div>
          </section>



        </div>
      </div>

      <div className=" flex justify-center items-center  ">
        <div className=" text-black text-3xl font-bold   ">  Post your Property in <br />
          <span className=" flex justify-center items-center  "> 3 simple step  </span>  </div>
      </div>

      <div className=" flex justify-center space-x-14 items-center  pt-10 pb-14  ">

        <div className="">
          <div className=" text-2xl  font-semibold  pb-5"> <span className="  text-blue-700 
           font-bold ">01</span>  Add deatails to your property </div>
          <div className=" flex  pt-5   ">
            <img className='w-20 ' src=" file.png " alt="logo " />
            <h1 className=" px-3 ">
              Dimensions: Length and width of the <br /> property boundaries.
              Coordinates: Ex <br /> act GPS or survey points.

            </h1>
          </div>
        </div>

        <div className="">
          <div className=" text-2xl  font-semibold  pb-5  "> <span className=" text-blue-700 
         font-bold ">02</span>  Upload photo and video   </div>
          <div className=" flex  pt-5  ">
            <img className='w-20 ' src=" gallery.png " alt="logo " />
            <h1 className=" px-3 ">
              Dimensions: Length and width of the <br /> property boundaries.
              Coordinates: Ex <br /> act GPS or survey points.

            </h1>
          </div>
        </div>

        <div className=" ">
          <div className=" text-2xl  font-semibold  pb-5 "> <span className=" text-blue-700 
         font-bold  ">03</span>  Add pricing  and Ownership   </div>
          <div className=" flex  pt-5  ">
            <img className='w-20 ' src=" money.png " alt="logo " />
            <h1 className=" px-3  ">
              Dimensions: Length and width of the <br /> property boundaries.
              Coordinates: Ex <br /> act GPS or survey points.
            </h1>
          </div>
        </div>



      </div>
      <div className=" flex px-14  pb-10 ">

        <div className=" p-3 flex justify-center rounded-lg  border border-gray-300  bg-orange-200 w-[600px]">
          <img className=" w-5 " src=" viber.png " alt="" />
          <h1 className=" px-2 font-medium  "> Give a missed call to +91807654356 to get help with your property listing</h1>
        </div>

      </div>

      <div className=" flex px-14  pb-10 ">
        <div className=" p-3 flex   rounded-lg  border border-gray-300  bg-white  w-[600px]">

          <div className=" ">
            <h1 className=" px-4 font-medium "> Scan the QR code or click to post your property via Whatsapp </h1>
            <div className=" pt-3 px-3 ">
              <button className="bg-green-400 rounded-xl border border-gray-400  p-2 px-10 ">
                Post property via whatsapp
              </button>
            </div>
          </div>

          <img className=' w-20 ' src=" qrcode.jpg " alt=" logo " />
        </div>
      </div>

      <div className="flex  px-96  pb-10  pt-10">
        <h1 className=" text-3xl font-bold  text-gray-500 "> Testimonials </h1>
      </div>
      <div className=" ">
        <div className=' flex px-10  items-center '>
          <div className='left pb-10'>
            <div className='px-5  bg-gray-100 border border-gray-300  rounded-xl '>
              <div className='flex justify-center items-center '>
              </div>
              <div className=' pt-3 pb-3 '>
                <div className='flex font-semibold text-gray-600 text-2xl space-x-10 px-14 pb-5'>
                  <div className='flex justify-center items-center'>
                  </div>
                </div>
                <div className='flex pb-10'>
                  <div className=' flex items-center justify-center space-x-5  pt-5 '>


                    <div className="box-content shadow-xl  rounded-xl  h-72  w-64 p-4  border border-gray-300  bg-white">
                      <h1 className=' flex justify-center pt-2 items-center  text-sm'> Rent or Sell: What is Best For Your Property?
                        Are you a homeowner caught in a tough choice between rent vs sell? Deciding whether to rent out your property or sell it can be quite challenging, especially with the current ups and downs i...
                        ent or Sell: What is Best For Your Property?
                        Are you a homeowner caught in a tough choice between rent vs sell? Deciding whether to rent out your property or sell it can be quite challenging, especially with the current ups and downs i...
                      </h1>
                    </div>

                    <div className="box-content  shadow-xl rounded-xl  h-72  w-64 p-4  border border-gray-300  bg-white">

                      <h1 className=' flex justify-center pt-2 items-center  text-sm'> Rent or Sell: What is Best For Your Property?
                        Are you a homeowner caught in a tough choice between rent vs sell? Deciding whether to rent out your property or sell it can be quite challenging, especially with the current ups and downs i...
                        ent or Sell: What is Best For Your Property?
                        Are you a homeowner caught in a tough choice between rent vs sell? Deciding whether to rent out your property or sell it can be quite challenging, especially with the current ups and downs i...
                      </h1>

                    </div>

                    <div className="box-content shadow-xl  rounded-xl  h-72  w-64 p-4 border border-gray-300 bg-white ">
                      <h1 className='  flex justify-center pt-2 items-center  text-sm'> Rent or Sell: What is Best For Your Property?
                        Are you a homeowner caught in a tough choice between rent vs sell? Deciding whether to rent out your property or sell it can be quite challenging, especially with the current ups and downs i...
                        ent or Sell: What is Best For Your Property?
                        Are you a homeowner caught in a tough choice between rent vs sell? Deciding whether to rent out your property or sell it can be quite challenging, especially with the current ups and downs i...
                      </h1>
                    </div>

                    <div className=" bg-white  border border-gray-300 p-2  rounded-full ">
                      <img className=" w-8 " src=" chevron.png " alt="logo " />
                    </div>

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
export default Postproperty;









