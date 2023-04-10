import React from 'react'

function Signup() {
  return (
    <>
    <div  className='w-full lg:h-screen pt-20'>
      <div className='max-w-[1240px] m-auto px-2 py-16 w-full '>
        <div className='md:grid lg:grid-cols-5 gap-8'>
          {/* left */}
          <div className=' col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4 bg-[#08AEEA]'>
            <div className='lg:p-4 h-full'>
              <div>
                <h2 className='py-2 font-bold text-[3rem] mx-4 text-white'>New Account Setup</h2>
                <p className='text-white font-bold mx-4'>Follow this registration process to help us create your account</p>
                <p className='py-4'>
                I am available for work, either as a freelancer or full-time employee.
                </p>
              </div>
              <div>
                <p className='uppercase pt-8'>Let's meet up.</p>
               
              </div>
            </div>
          </div>

          {/* right */}
          <div className='col-span-3 md:w-[35rem] md:h-full shadow-xl shadow-gray-400 rounded-xl lg:p-4'>
            <div className='p-4 mx-20'>
              <h1 className='text-center font-bold'>New Account Setup</h1>
                <form
                  action=""
                   
                  
                >
                <div className='grid md:grid-cols-1 gap-4 w-full py-2'>
                  <div className='flex flex-col'>
                    <label className='uppercase text-sm py-2 font-bold '>ID Number*</label>
                    <input
                      className='border-2 rounded-lg p-3 flex border-gray-300'
                      type='number'
                      name='id number'
                      placeholder='ID Number'
                    />
                  </div>
                  <div className='flex flex-col'>
                    <label className='uppercase text-sm py-2 font-bold'>
                    Phone Number (Rwanda)
                    </label>
                    <input
                      className='border-2 rounded-lg p-3 flex border-gray-300'
                      type='number'
                      name='phone'
                      placeholder='Phone Number'
                    />
                  </div>
                </div>
                <button type="submit" className='w-40   p-4 text-gray-100 mt-4 bg-[#5651e5]'>
                  Next
                </button>
                </form>
            </div>
          </div>
          
        </div>
        <div className='flex justify-center py-12'>
          {/* <Link href='/'> */}
           
              {/* <div className='rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
                <RiArrowUpSFill
                  className='text-[#5651e5]'
                  size={50}
                />
              </div> */}
          
          {/* </Link> */}
        </div>
        
      </div>
    </div>
     
    </>
  )
}

export default Signup