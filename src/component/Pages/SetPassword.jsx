import React,{useState} from 'react'
import { useHistory } from 'react-router-dom';

function SetPassword() {
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('')

  const history = useHistory();
  
  const handlePasswordChange = (event) =>{
    setPassword(event.target.value)
  };

  const handleConfirmPasswordChange = (event) =>{
    setPasswordConfirm(event.target.value)
  };

  const handleSubmit = (event) =>{
    event.preventDefault();
    console.log(`Password: ${password}, ConfirmPassword: ${passwordConfirm}`)
    //navigation to nextpage
    history.push('/Dashboard')
  };
  const isSubmitDisabled = !(password && passwordConfirm)
  return (
    <>
      <div  className='w-full lg:h-screen pt-20'>
      <div className='max-w-[1240px] m-auto px-2 py-16 w-full '>
        <div className='md:grid lg:grid-cols-5 gap-8'>
          {/* left */}
          <div className=' col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4 bg-[#08AEEA]'>
            <div className='lg:p-4 h-full'>
              <div className='pb-8'>
                <h2 className='py-2 font-bold text-[3rem] mx-4 text-white'>New Account Setup</h2>
                <p className='text-white mx-4 font-bold'>Follow this registration process to help us create your account</p>
              </div>
              {/* Stepper*/}


                <ol class="relative ml-40 p-4 text-gray-500 border-l border-gray-200 dark:border-gray-700 dark:text-gray-400 ">                  
                    <li class="mb-10 ml-6">            
                        <span class="absolute flex items-center justify-center w-8 h-8 bg-gray-100 rounded-full -left-4 ring-4 ring-white dark:ring-gray-900 dark:bg-gray-700">
                            <p className=''>1</p>
                        </span>
                        <h3 class="font-medium leading-tight text-gray-700">Submit required information</h3>
                      
                    </li>
                    <li class="mb-10 ml-6">
                        <span class="absolute flex items-center justify-center w-8 h-8 bg-gray-100 rounded-full -left-4 ring-4 ring-white dark:ring-gray-900 dark:bg-gray-700">
                          <p className=''>2</p>
                        </span>
                        <h3 class="font-medium leading-tight text-gray-700">Account Verification</h3>
                        
                    </li>
                    <li class=" ml-6">
                        <span class="absolute flex items-center justify-center w-8 h-8 bg-green-200 rounded-full -left-4 ring-4 ring-white dark:ring-gray-900 dark:bg-green-900">
                            <p className='text-white'>3</p>
                        </span>
                        <h3 class="font-medium leading-tight text-white">Set your password</h3>
                        
                    </li>
                    
                </ol>

                      
              {/* <Stepper/> */}

              
              
            </div>
          </div>

          {/* right */}
          <div className='col-span-3 md:w-[35rem] md:h-full shadow-xl shadow-gray-400 rounded-xl lg:p-4'>
            <div className='p-4 mx-20'>

              <h1 className='text-center font-bold'>New Account Setup</h1>
                <form onSubmit={handleSubmit}>
                <div className='grid md:grid-cols-1 gap-4 w-full py-2'>
                  <div className='flex flex-col'>
                    <label htmlFor='password' className='uppercase text-sm py-2 font-bold '>Password</label>
                    <input
                      className='border-2 rounded-lg p-3 flex border-gray-300'
                      type='password'
                      id='password'
                      name='password'
                      placeholder='Enter your password'
                      value = {password}
                      onChange = {handlePasswordChange}

                    />
                  </div>
                  <div className='flex flex-col'>
                    <label htmlFor='confirmPassword' className='uppercase text-sm py-2 font-bold'>
                    Confirm Password
                    </label>
                    <input
                      className='border-2 rounded-lg p-3 flex border-gray-300'
                      type='password'
                      id='confirmPassword'
                      name='confirmPassword'
                      placeholder='Corfirm Password'
                      value={passwordConfirm}
                      onChange = {handleConfirmPasswordChange}

                    />
                  </div>
                </div>

                <button disabled = {isSubmitDisabled} type="submit" className='w-40   p-4 text-gray-100 mt-4 bg-[#5651e5]'>
                  Submit
                </button>
                </form>
            </div>
          </div>
          
        </div>
        <div className='flex justify-center py-12'>
          
        </div>
        
      </div>
    </div>
    </>
  )
}

export default SetPassword