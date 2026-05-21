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
import { useModal } from '../context/ModalContext';

export default function Navbar() {
  const [hide, setHide] = useState(false)
  const { openModal } = useModal();

  useEffect(() => {
    let lastScroll = 0

    const handleScroll = () => {
      const currentScroll = window.scrollY

      if (currentScroll > lastScroll && currentScroll > 100) {
        // pastga scroll
        setHide(true)
      } else {
        // tepaga scroll
        setHide(false)
      }

      lastScroll = currentScroll
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])
  
  const dropdownRef = useRef(null)

  const { language: lang, changeLanguage } = useLanguage()
  const { i18n } = useTranslation()
  const { t } = useTranslation()

  const [open, setOpen] = useState(false)

  const languages = {
    ru: { name: "Русский", flag: flagRu },
    en: { name: "English", flag: flagEn },
    zh: { name: "中文", flag: flagZh },
  }

  const changeLocale = (lng) => {
    i18n.changeLanguage(lng)
    changeLanguage(lng)
    setOpen(false)
  }

  return (
    <nav className={`Navbar ${hide ? "hide" : ""}`}>

      <div className="nav-head">
        <div className="container">

          <div className='nav-head__body'>

            <div className='d-flex'>

              <div className='first'>
                <img src={location} alt="location" />
                {t('addres')}
              </div>

              <img src={line} alt="line" />

              <div>
                <img className='second' src={gmail} alt="email" />
                hello@sayonar.uz
              </div>

            </div>

            <li className="lang-switch" ref={dropdownRef}>

              <div
                onClick={() => setOpen(!open)}
                className="lang-btn"
              >
                <img src={languages[lang]?.flag} alt={lang} />

                <span>
                  {languages[lang]?.name}
                </span>

                <i className={`arrow-icon ${open ? 'up' : 'down'}`}></i>
              </div>

              {open && (
                <div className="lang-dropdown">

                  {Object.keys(languages).map((lng) => (

                    <div
                      key={lng}
                      onClick={() => changeLocale(lng)}
                      className={`lang-item ${lang === lng ? "active" : ""}`}
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

      <div className="nav-body">

        <div className="container">

          <div className="nav-body__block">

            <div className='nav-links'>

              <img src={logo} alt="logo" />

              <ul>
                <li><NavLink to='/'>{t('home')}</NavLink></li>
                <li><NavLink to='/about'>{t('about')}</NavLink></li>
                <li><NavLink to='/our-services'>{t('services')}</NavLink></li>
                <li><NavLink to='/news'>{t('news')}</NavLink></li>
                <li><NavLink to='/contact'>{t('contact')}</NavLink></li>
              </ul>

            </div>

            <button onClick={openModal}>{t('connect')}</button>

          </div>

        </div>

      </div>

    </nav>
  )
}