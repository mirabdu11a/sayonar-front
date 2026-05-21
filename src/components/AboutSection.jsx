import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
import ico1 from '../assets/aboutIco1.svg'
import ico2 from '../assets/aboutIco2.svg'
import img1 from '../assets/images/aboutSection1.webp'
import img2 from '../assets/images/aboutSection2.webp'
import img3 from '../assets/images/aboutSection3.webp'
import { useTranslation } from "react-i18next";
import { NavLink } from 'react-router-dom'

export default function AboutSection() {
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

  const { t } = useTranslation();
  return (
    <section ref={sectionRef} className='AboutSection'>
      <div className="container">
        <div className="section-tittle">
          <div className='first-block col-md-3'>
            <div className="disc"></div>
            <p>{t("aboutSectionInfo")}</p>
          </div>
          <div className='second-block'>
            <h2 className='col-md-9'>{t("aboutSectionTitle")}</h2>
            <p>{t("aboutSectionInfo2")}</p>
            <NavLink to='/about'>

              <button>{t("more")}</button>
            </NavLink>
            <div className='about-advantages'>

              <div className='about-advantages-body'>
                <div className='d-flex'>
                  <img src={ico1} alt="icon" />
                  <h4>{t("aboutAdvantage1")}</h4>
                </div>
                <p>{t("aboutAdvantageInfo1")}</p>
              </div>

              <div className='about-advantages-body'>
                <div className='d-flex'>
                  <img src={ico2} alt="icon" />
                  <h4>{t("aboutAdvantage2")}</h4>
                </div>
                <p>{t("aboutAdvantageInfo2")}</p>
              </div>

            </div>
          </div>
        </div>

        <div className="section-images row">
          <div className="col-md-4">
            <img src={img1} alt="about images" />
          </div>

          <div className="col-md-4">
            <img src={img2} alt="about images" />
          </div>

          <div className="col-md-4">
            <img src={img3} alt="about images" />
          </div>
        </div>
      </div>
    </section>
  )
}
