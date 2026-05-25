import React from 'react'
import AboutHeader from '../components/AboutHeader'
import CompanySection from '../components/CompanySection'
import AboutAdvantages from '../components/AboutAdvantages'
import AboutImage from '../components/AboutImage'
import Colleagues from '../components/Colleagues'
import Reputation from '../components/Reputation'

export default function About() {
  return (
    <>
      <AboutHeader/>
      <CompanySection/>
      <AboutAdvantages/>
      <Reputation/>
      <Colleagues/>
    </>
  )
}
