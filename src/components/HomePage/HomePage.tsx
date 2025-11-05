import React from 'react'
import Hero from './Hero/Hero'
import WebPlans from './WebPlans/WebPlans'

const HomePage = () => {
  return (
    <div>
        <Hero />
        <div className='my-10'>
            <WebPlans />
        </div>
    </div>
  )
}

export default HomePage