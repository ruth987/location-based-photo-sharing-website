import React from 'react'
import { Navbar } from '@/components/custom/Navbar'
import { RandomPost } from '@/components/custom/RandomPost'
import { Hero } from '@/components/custom/Hero'

const page = () => {
  return (
    <div>
        <Navbar />
        <Hero />
        <RandomPost />

    </div>
  )
}

export default page