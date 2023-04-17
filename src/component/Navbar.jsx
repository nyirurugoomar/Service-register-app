import React,{useState, useEffect} from 'react'
import {AiOutlineClose,AiOutlineMenu} from 'react-icons/ai'
import {FaFacebook, FaInstagram, FaLinkedinIn} from 'react-icons/fa'
import {GrLanguage} from 'react-icons/gr'
import { useTranslation } from 'react-i18next';
import i18next from 'i18next';

import { NavLink } from "react-router-dom";
// import logo from '../assets/logo.png'

function Navbar() {
    const [nav, setNav] = useState(false)
    const [shadow, setShadow] = useState(false)
    

  

    const {i18n, t} = useTranslation(["navbar"]);

  useEffect(() =>{
    if(localStorage.getItem("i18nextLng")?.length > 2){
      i18next.changeLanguage("en");
    }
  },[]);

  const handleLanguageChange = (e) =>{
    i18n.changeLanguage(e.target.value);
  };

  
    
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
const [showPopup, setShowPopup] = useState(false);
    
  

  

  

  const handleTogglePopup = () => {
    setShowPopup(!showPopup);
  };
  return (
    <>

<div className="relative ">
      
      {showPopup && (
        
        <div className="absolute z-10 top-20 h-[33rem]  w-[30rem] bg-white rounded-lg p-4 right-[20rem] shadow-2xl">
          <div onClick={handleTogglePopup} className='rounded-full shadow-lg shadow-white p-3 cursor-pointer  '>
              <AiOutlineClose size={"30px"}/>
            </div>
          <div className='pt-4'>
             
             
            <form action="">
            <div className="text-center mx-20 pb-4">
              <h1 className='text-center text-3xl pb-4'>Login</h1>
                <label className="block text-start text-black font-bold  mb-2" htmlFor="username">
                Phone Number (Rwanda)
                </label>
                <input
                  className="appearance-none border border-[#D9D9D9] rounded-xl px-2 w-full py-2  text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  type="email"
                  placeholder="Enter Number"
                />
              </div>
              <div className="text-center mx-20">
                <label className="block text-start text-black font-bold  mb-2" htmlFor="username">
                Password
                </label>
                <input
                  className="appearance-none border border-[#D9D9D9] rounded-xl px-2 w-full py-2  text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  type="password"
                  placeholder="Enter Password"
                />
                <h1 className='text-start mt-2 font-bold text-[#08AEEA]'>Forgot password?</h1>
              </div>
              <div className='text-center mt-4'>
                <button className='bg-[#08AEEA] p-4 w-[20rem] rounded-xl text-xl text-white '>Login</button>
                <h1 className='mt-2 font-semibold'>Don't have an account?
                <NavLink  to='signup'>
                  <span className='text-[#08AEEA]'>Create one</span>
                </NavLink>
                </h1>
              </div>
            </form>
          </div>
          
        </div>
      )}
    </div>
    
    <div className={shadow ? 'fixed w-full h-20 shadow-xl z-[100]  bg-[#08AEEA]': 'fixed w-full h-20 z-[100] bg-[#08AEEA] '}>
        <div className='flex justify-between items-center w-full h-full px-10 2xl:px-16 '>
        {/* <NavLink to="/" > */}
            <a href="/">
              <h1 className='cursor-pointer'>{t("Logo")}</h1>
            </a>
            {/* </NavLink> */}
        
         
          <div>
            <ul className='hidden md:flex mr-8 '>
                   {/* <NavLink  to='/' > */}
                    <li className='ml-10 text-sm uppercase cursor-pointer hover:bg-[#54bfe6] hover:rounded text-white p-4 font-bold 'onClick={handleTogglePopup} >{t("login")}</li>
                    {/* </NavLink> */}
                    {/* <NavLink  to='/check/signup'> */}
                      <a href="/auth/signup">
                          <li className='ml-10 text-sm uppercase cursor-pointer  text-white p-4 font-bold hover:bg-[#54bfe6] hover:rounded '>{t("signup")}</li>
                     </a>
                    {/* </NavLink> */}
                     
                    

                    {/* <NavLink  to='/' > */}
                    <li className='ml-10 p-4 flex '>
                      <GrLanguage size={'20px'}  color={'white'} className='mx-2 '/>
                     
                      <select className='text-white bg-transparent border-0' value={localStorage.getItem("i18nextLng")} onChange={handleLanguageChange}>
                        <option value="en">🇬🇧 English</option>
                        <option value="fr">🇫🇷 Francais</option>
                        <option value="kiny">🇷🇼 Kinyarwanda</option>
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
                    <li className='ml-10 text-sm uppercase cursor-pointer text-white p-4 font-bold '>{t("login")}</li>
                    {/* </NavLink> */}
                    {/* <NavLink  to='/' > */}
                    <li className='ml-10 text-sm uppercase cursor-pointer  text-white p-4 font-bold '>{t("signup")}</li>
                    {/* </NavLink> */}

                    {/* <NavLink  to='/' > */}
                    <li className='p-4 flex '>
                      <GrLanguage size={'20px'}  color={'white'} className='mx-2 '/>
                     
                      <select className='text-white bg-transparent' value={localStorage.getItem("i18nextLng")} onChange={handleLanguageChange}>
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
    </>
  )
}

export default Navbar