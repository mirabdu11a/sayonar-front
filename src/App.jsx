import './App.scss'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import News from './pages/News'
import Services from './pages/Services'
import Contact from './pages/Contact'
import Footer from './components/Footer'
import NewsDetail from './pages/NewsDetail'

import { initReactI18next } from 'react-i18next';
import translationEn from './locale/en'
import translationRu from './locale/ru'
import translationZh from './locale/zh'
import { LANGUANGE } from './locale'

import i18n from "i18next";

i18n.use(initReactI18next).init({
  resources: {
    ru: { translation: translationRu },
    en: { translation: translationEn },
    zh: { translation: translationZh },
  },
  lng: LANGUANGE,
  fallbackLng: LANGUANGE,
});


function App() {
  const changeLang = (value) => {
    i18n.changeLanguage(value); 
  };
  return (
    <>
      <Navbar changeLang={changeLang}/>
      <Routes>
        <Route index element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/our-services' element={<Services />} />
        <Route path='/news' element={<News />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/more' element={<NewsDetail />} />

      </Routes>
      <Footer/>
    </>
  )
}

export default App
