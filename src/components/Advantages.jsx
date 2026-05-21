import React from 'react'
import ico1 from '../assets/advantages/1.svg'
import ico2 from '../assets/advantages/2.svg'
import ico3 from '../assets/advantages/3.svg'
import ico4 from '../assets/advantages/4.svg'
import ico5 from '../assets/advantages/5.svg'
import ico6 from '../assets/advantages/6.svg'
import { useTranslation } from 'react-i18next'
import { useApi } from '../hooks/useApi'
import { fetchServices } from '../api/endpoints'
import { useLocale } from '../utils/locale'
import { mediaUrl } from '../api/client'
import { NavLink } from 'react-router-dom'
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const fallbackIcons = [ico1, ico2, ico3, ico4, ico5, ico6]

export default function Advantages() {
  const sectionRef = useRef(null);

  useEffect(() => {

    gsap.from(sectionRef.current, {
      opacity: 0,
      y: 80,
      duration: 1,

      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%",
      }
    });

  }, []);

  const { t } = useTranslation()
  const { data, loading } = useApi(fetchServices)
  const p = useLocale()
  const services = data || []

  return (
    <section ref={sectionRef}  className='Advantages'>
      <div className="container">
        <div className='center-title'>
          <h2>{t("advantagesTitle")}</h2>
          <p>{t("advantagesInfo")}</p>
          <NavLink to='/our-services'>
            <button>{t("more")}</button>
          </NavLink>
        </div>
        <div className="row">
          {!loading && services.map((s, i) => (
            <div className="col-md-4 block" key={s.id}>
              <div className="card1">
                <img src={s.icon ? mediaUrl(s.icon) : fallbackIcons[i % fallbackIcons.length]} alt={p(s, 'title')} />
                <h3>{p(s, 'title')}</h3>
                <p>{p(s, 'description')}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
