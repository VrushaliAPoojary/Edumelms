import React from 'react'
import Hero from '../../components/student/Hero'
import Companies from '../../components/student/Companies'
import CourseSection from '../../components/student/CourseSection'
import TestimonialSections from '../../components/student/TestimonialSections'

const Home = () => {
  return (
    <div className='flex flex-col items-center spacy-y-7 text-center'>
      <Hero/>
      <Companies/>
      <CourseSection/>
      <TestimonialSections/>
    </div>
  )
}

export default Home
