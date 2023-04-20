import React from 'react'
import OurService from './OurService'
import Search from './Search'
import initialDetails from './initialDetails';

function Home() {
  return (
    <>
   <Search details={initialDetails}/>
    <OurService/>
    
    </>
  )
}

export default Home