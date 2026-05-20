import React from 'react'
import AboutHeader from '../components/AboutHeader'
import CompanySection from '../components/CompanySection'
import AboutAdvantages from '../components/AboutAdvantages'
import AboutImage from '../components/AboutImage'
import Colleagues from '../components/Colleagues'

export default function About() {
  return (
    <>
      <AboutHeader/>
      <CompanySection/>
      <AboutAdvantages/>
      <AboutImage/>
      <Colleagues/>
    </>
  )
}
