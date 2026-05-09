import React from 'react'
import HomeHeader from '../components/HomeHeader'
import HomeAbout from '../components/HomeAbout'
import AboutSection from '../components/AboutSection'
import Advantages from '../components/Advantages'
import Reputation from '../components/Reputation'
import PartnersSection from '../components/PartnersSection'
import Strategiya from '../components/Strategiya'
import Colleagues from '../components/Colleagues'
import Clients from '../components/Clients'
import HomeNews from '../components/HomeNews'

export default function Home() {
  return (
    <>
      <HomeHeader/>
      <HomeAbout/>
      <AboutSection/>
      <Advantages/>
      <Reputation/>
      <PartnersSection/>
      <Strategiya/>
      <Colleagues/>
      <Clients/>
      <HomeNews/>
    </>
  )
}
