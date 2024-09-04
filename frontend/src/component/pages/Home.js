import React from 'react'
import Hero from '../components/Hero'
import WhyUs from '../components/WhyUs'

export default function Home() {
  return (
    <section className='m-0 py-5 px-2 user-select-none' id='Home'>
        <Hero />
        <WhyUs />
    </section>
  )
}
