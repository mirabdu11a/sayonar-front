import React, { useEffect, useRef, useState } from 'react'
import location from '../assets/nav-location.svg'
import logo from '../assets/logo.svg'
import gmail from '../assets/nav-gmail.svg'
import line from '../assets/line.svg'

import flagRu from '../assets/flags/ru.svg'
import flagEn from '../assets/flags/gb.svg'
import flagZh from '../assets/flags/cn.svg'

import { NavLink } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { useLanguage } from '../context'
import { useModal } from '../context/ModalContext'

export default function Navbar() {
  const [hide, setHide] = useState(false)
  const [open, setOpen] = useState(false)
  const [mobileMenu, setMobileMenu] = useState(false)

  const dropdownRef = useRef(null)

  const { openModal } = useModal()
  const { language: lang, changeLanguage } = useLanguage()
  const { i18n, t } = useTranslation()

  // 1. Skroll bo'lganda navbarni yashirish effekti
  useEffect(() => {
    let lastScroll = 0

    const handleScroll = () => {
      const currentScroll = window.scrollY

      if (currentScroll > lastScroll && currentScroll > 100) {
        setHide(true)
      } else {
        setHide(false)
      }

      lastScroll = currentScroll
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  // 2. Mobil menyu ochilganda orqa fon skrollini o'chirish effekti
  useEffect(() => {
    if (mobileMenu) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }

    // Komponent unmount bo'lganda tozalash
    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileMenu])

  const languages = {
    ru: { name: 'Русский', flag: flagRu },
    en: { name: 'English', flag: flagEn },
    zh: { name: '中文', flag: flagZh },
  }

  const changeLocale = (lng) => {
    i18n.changeLanguage(lng)
    changeLanguage(lng)
    setOpen(false)
  }

  return (
    <nav className={`Navbar ${hide ? 'hide' : ''}`}>

      {/* TOP */}
      <div className="nav-head">
        <div className="container">

          <div className="nav-head__body">

            <div className="nav-info">

              <div className="info-item item1">
                <img src={location} alt="" />
                <span>{t('addres')}</span>
              </div>

              <img className='line' src={line} alt="" />

              <div className="info-item">
                <img src={gmail} alt="" />
                <span>hello@sayonar.uz</span>
              </div>

            </div>

            {/* LANGUAGE */}
            <li className="lang-switch" ref={dropdownRef}>

              <div
                onClick={() => setOpen(!open)}
                className="lang-btn"
              >
                <img src={languages[lang]?.flag} alt={lang} />

                <span>{languages[lang]?.name}</span>

                <i className={`arrow-icon ${open ? 'up' : 'down'}`}></i>
              </div>

              {open && (
                <div className="lang-dropdown">

                  {Object.keys(languages).map((lng) => (

                    <div
                      key={lng}
                      onClick={() => changeLocale(lng)}
                      className={`lang-item ${lang === lng ? 'active' : ''}`}
                    >
                      <img src={languages[lng].flag} alt={lng} />
                      <span>{languages[lng].name}</span>
                    </div>

                  ))}

                </div>
              )}

            </li>

          </div>

        </div>
      </div>

      {/* BOTTOM */}
      <div className="nav-body">

        <div className="container">

          <div className="nav-body__block">

            <NavLink to='/'>
              <img src={logo} alt="logo" className='logo' />
            </NavLink>

            <div className={`nav-menu ${mobileMenu ? 'active' : ''}`}>

              <ul>

                <li>
                  <NavLink onClick={() => setMobileMenu(false)} to='/'>
                    {t('home')}
                  </NavLink>
                </li>

                <li>
                  <NavLink onClick={() => setMobileMenu(false)} to='/about'>
                    {t('about')}
                  </NavLink>
                </li>

                <li>
                  <NavLink onClick={() => setMobileMenu(false)} to='/our-services'>
                    {t('services')}
                  </NavLink>
                </li>

                <li>
                  <NavLink onClick={() => setMobileMenu(false)} to='/news'>
                    {t('news')}
                  </NavLink>
                </li>

                <li>
                  <NavLink onClick={() => setMobileMenu(false)} to='/contact'>
                    {t('contact')}
                  </NavLink>
                </li>

              </ul>

              <button
                onClick={() => {
                  openModal()
                  setMobileMenu(false)
                }}
              >
                {t('connect')}
              </button>

            </div>

            {/* BURGER */}
            <div
              className={`burger ${mobileMenu ? 'active' : ''}`}
              onClick={() => setMobileMenu(!mobileMenu)}
            >
              <span></span>
              <span></span>
              <span></span>
            </div>

          </div>

        </div>

      </div>

    </nav>
  )
}