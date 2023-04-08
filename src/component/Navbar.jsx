import React,{useState, useEffect} from 'react'
import {AiOutlineClose,AiOutlineMenu} from 'react-icons/ai'
import {FaFacebook, FaInstagram, FaLinkedinIn} from 'react-icons/fa'
import {GrLanguage} from 'react-icons/gr'

// import { NavLink } from "react-router-dom";
// import logo from '../assets/logo.png'

function Navbar() {
    const [nav, setNav] = useState(false)
    const [shadow, setShadow] = useState(false)

    
    const handleNav = () =>{
        setNav(!nav);
    }

useEffect(()=>{
    const handleShadow = () =>{
        if(window.scrollY >= 90){
            setShadow(true);
        }else{
            setShadow(false);
        }
    }
    window.addEventListener('scroll', handleShadow)
},[])
  return (
    <div className={shadow ? 'fixed w-full h-20 shadow-xl z-[100]  bg-[#0B0961]': 'fixed w-full h-20 z-[100] bg-[#08AEEA] '}>
        <div className='flex justify-between items-center w-full h-full px-10 2xl:px-16 '>
        {/* <NavLink to="/" > */}
            {/* <img src=
            {logo}
            alt="/" 
            width='70'  
            height='70'
            
            /> */}
            <h1>LOGO</h1>
            {/* </NavLink> */}
        
         
          <div>
            <ul className='hidden md:flex mr-8 '>
                   {/* <NavLink  to='/' > */}
                    <li className='ml-10 text-sm uppercase cursor-pointer hover:bg-[#54bfe6] hover:rounded text-white p-4 font-bold '>Login</li>
                    {/* </NavLink> */}
                    {/* <NavLink  to='/' > */}
                    <li className='ml-10 text-sm uppercase cursor-pointer  text-white p-4 font-bold hover:bg-[#54bfe6] hover:rounded '>SignUp</li>
                    {/* </NavLink> */}

                    {/* <NavLink  to='/' > */}
                    <li className='ml-10 p-4 flex '>
                      <GrLanguage size={'20px'}  color={'white'} className='mx-2 '/>
                     
                      <select className='text-white bg-transparent'>
                        <option value="en">English</option>
                        <option value="fr">Francais</option>
                        <option value="kiny">Kinyarwanda</option>
                      </select>
                    </li>
                    {/* </NavLink> */}
                
                    
            </ul>
            
            <div onClick={handleNav} className='md:hidden cursor-pointer'>
               <AiOutlineMenu size={25} color='white'/>
            </div>
          </div> 
        </div>
        <div className={nav ? 'md:hidden fixed left-0 top-0 w-full h-screen bg-black/70' : ''}>
           <div className={nav
             ? 'fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#08AEEA] p-10 ease-in duration-500' 
             : 'fixed left-[-100%] top-0  p-10 ease-in duration-500'}>
            <div>
                <div className='flex w-full items-center justify-between'>
                    {/* <Link href='/'> */}
                    {/* <img src=
                     {logo}
                     alt="/" 
                     width='70'  
                     height='70'
            
                     /> */}
                     <h1>LOGO</h1>
                    {/* </Link> */}
                    
                    <div onClick={handleNav} className='rounded-full shadow-lg shadow-white p-3 cursor-pointer'>
                        <AiOutlineClose/>
                    </div>
                </div>
                 
            </div>
            {/* for mobile */}
            <div className='py-2 flex flex-col'>
                <ul className='uppercase'>
                    {/* <NavLink  to='/' > */}
                    <li className='ml-10 text-sm uppercase cursor-pointer text-white p-4 font-bold '>Login</li>
                    {/* </NavLink> */}
                    {/* <NavLink  to='/' > */}
                    <li className='ml-10 text-sm uppercase cursor-pointer  text-white p-4 font-bold '>SignUp</li>
                    {/* </NavLink> */}

                    {/* <NavLink  to='/' > */}
                    <li className='p-4 flex '>
                      <GrLanguage size={'20px'}  color={'white'} className='mx-2 '/>
                     
                      <select className='text-white bg-transparent'>
                        <option value="en">English</option>
                        <option value="fr">Francais</option>
                        <option value="kiny">Kinyarwanda</option>
                      </select>
                    </li>
                    {/* </NavLink> */}
                </ul>
                <div className='pt-10'>
                    
                    <div className='flex items-center justify-between my-4 w-full sm:w-[80%] '>
                        <div className='rounded-full shadow-lg shadow-white p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                         <FaFacebook/>
                        </div>
                        <div className='rounded-full shadow-lg shadow-white p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                         <FaLinkedinIn/>
                        </div>
                        <div className='rounded-full shadow-lg shadow-white p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                         <FaInstagram/>
                        </div>
                         
                    </div>
                </div>
            </div>
           </div>
        </div>
    </div>
  )
}

export default Navbar