import React from 'react'
import AboutHeader from '../components/AboutHeader'
import CompanySection from '../components/CompanySection'
import AboutAdvantages from '../components/AboutAdvantages'
import AboutImage from '../components/AboutImage'
import Comments from '../components/Comments'
import FAQ from '../components/FAQ'

export default function About() {
  return (
    <>
      <AboutHeader/>
      <CompanySection/>
      <AboutAdvantages/>
      <AboutImage/>
      <Comments/>
      <FAQ/>
    </>
  )
}
