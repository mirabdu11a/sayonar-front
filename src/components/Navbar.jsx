import React, { useRef, useState } from 'react'
import location from '../assets/nav-location.svg'
import logo from '../assets/logo.svg'
import gmail from '../assets/nav-gmail.svg'
import line from '../assets/line.svg'

import flagRu from '../assets/flags/ru.svg'
import flagEn from '../assets/flags/gb.svg'
import flagZh from '../assets/flags/cn.svg'

import { NavLink } from 'react-router-dom'
import { LANGUANGE } from '../locale'
import { useTranslation } from 'react-i18next'
import { useLanguage } from '../context'

export default function Navbar() {

  const dropdownRef = useRef(null)

  const { changeLanguage } = useLanguage()
  const { i18n } = useTranslation()
  const { t } = useTranslation()

  const [open, setOpen] = useState(false)

  const [lang, setLang] = useState(
    localStorage.getItem(LANGUANGE) || 'ru'
  )

  const languages = {
    ru: { name: "Русский", flag: flagRu },
    en: { name: "English", flag: flagEn },
    zh: { name: "中文", flag: flagZh },
  }

  const changeLocale = (lng) => {
    setLang(lng)

    localStorage.setItem(LANGUANGE, lng)

    i18n.changeLanguage(lng)

    if (changeLanguage) {
      changeLanguage(lng)
    }

    setOpen(false)
  }

  return (
    <nav className='Navbar'>

      <div className="nav-head">
        <div className="container">

          <div className='nav-head__body'>

            <div className='d-flex'>

              <div className='first'>
                <img src={location} alt="location" />
                г. Ташкент, Мирабадский район, ул. Афросиаб, 15/2
              </div>

              <img src={line} alt="line" />

              <div>
                <img className='second' src={gmail} alt="email" />
                hello@sayonar.uz
              </div>

            </div>

            <li className="lang-switch" ref={dropdownRef}>

              <button
                onClick={() => setOpen(!open)}
                className="lang-btn"
              >
                <img src={languages[lang]?.flag} alt={lang} />

                <span>
                  {languages[lang]?.name}
                </span>

                <i className={`arrow-icon ${open ? 'up' : 'down'}`}></i>
              </button>

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
                <li><NavLink to='/our-services'>Услуги</NavLink></li>
                <li><NavLink to='/news'>Новости</NavLink></li>
                <li><NavLink to='/contact'>Контакты</NavLink></li>
              </ul>

            </div>

            <button>Связаться</button>

          </div>

        </div>

      </div>

    </nav>
  )
}