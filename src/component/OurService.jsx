import React from 'react'
import {useTranslation} from 'react-i18next'

function OurService() {
    const {t} = useTranslation(["common"])
  return (
    <>
    <div className='h-full w-screen mb-40'>
        <div className='text-center'>
            <h1 className='pt-4 text-3xl font-[500]'>{t("services")}</h1>
        </div>
        <div className=''>
            <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-4 mt-10 mx-10'>
                <div className='rounded-3xl border-[1px] cursor-pointer  border-[#dadada] hover:bg-[#08AEEA] text-center p-2 text-black hover:text-white'>Accreditation for Foreign Media
</div>
                <div className='rounded-3xl border-[1px] cursor-pointer  border-[#dadada] hover:bg-[#08AEEA]  text-center p-2 hover:text-white'>Criminal Record Certificate
</div>
                <div className='rounded-3xl border-[1px] cursor-pointer  border-[#dadada] hover:bg-[#08AEEA]  text-center p-2 hover:text-white'>Transport License
</div>
                <div className='rounded-3xl border-[1px] cursor-pointer  border-[#dadada] hover:bg-[#08AEEA]  text-center p-2 text-black hover:text-white'>Transport Authorization</div>
            </div>

            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4 mx-10'>
                <div className='rounded-3xl border-[1px] cursor-pointer  border-[#dadada] hover:bg-[#08AEEA] text-center p-2 text-black hover:text-white'>
Community Based Health Insurance(Mutuelle)</div>
                <div className='rounded-3xl border-[1px] cursor-pointer  border-[#dadada] hover:bg-[#08AEEA]  text-center p-2 text-black hover:text-white'>Various Notary Services</div>
                <div className='rounded-3xl border-[1px] cursor-pointer  border-[#dadada] hover:bg-[#08AEEA]  text-center p-2 text-black hover:text-white'>Publish in the Official Gazette</div>  
            </div>
            <div className='grid md:grid-cols-2 lg:grid-cols-5 gap-4 mt-4 mx-10'>
                <div className='rounded-3xl border-[1px] cursor-pointer  border-[#dadada] hover:bg-[#08AEEA] text-center p-2 text-black hover:text-white'>Purchase an Official Gazette</div>
                <div className='rounded-3xl border-[1px] cursor-pointer  border-[#dadada] hover:bg-[#08AEEA]  text-center p-2 text-black hover:text-white'>Driving License Exam Results</div>
                <div className='rounded-3xl border-[1px] cursor-pointer  border-[#dadada] hover:bg-[#08AEEA]  text-center p-2 text-black hover:text-white'>Application for Driving License</div>
                <div className='rounded-3xl border-[1px] cursor-pointer  border-[#dadada] hover:bg-[#08AEEA]  text-center p-2 text-black hover:text-white'>Sporadic Registration</div>
                <div className='rounded-3xl border-[1px] cursor-pointer  border-[#dadada] hover:bg-[#08AEEA]  text-center p-2 text-black hover:text-white'>Application for National ID</div>  
            </div>

            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4 mx-10'>
                <div className='rounded-3xl border-[1px] cursor-pointer  border-[#dadada] hover:bg-[#08AEEA] text-center p-2 text-black hover:text-white'>Certificate of Nationality</div>
                <div className='rounded-3xl border-[1px] cursor-pointer  border-[#dadada] hover:bg-[#08AEEA]  text-center p-2 text-black hover:text-white'>Certificate of Being Alive</div>
                <div className='rounded-3xl border-[1px] cursor-pointer  border-[#dadada] hover:bg-[#08AEEA]  text-center p-2 text-black hover:text-white'>Certificate of Full Identity</div>
                
            </div>
        </div>
        
    </div>
    </>
  )
}

export default OurService