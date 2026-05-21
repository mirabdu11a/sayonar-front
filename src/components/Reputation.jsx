import React from 'react'
import { useTranslation } from "react-i18next";
import { useModal } from '../context/ModalContext';
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function Reputation() {
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
  const { openModal } = useModal();

  return (
    <section className='Reputation'>
      <div className="container">
        <div ref={sectionRef}  className="reputation-block">
          <div  className="reputation-info">
            <h2>{t("reputationTitle")}</h2>
            <p>{t("reputationInfo")}</p>

            <button onClick={openModal}>
              {t("connectUs")}
            </button>

          </div>
        </div>
      </div>
    </section>
  )
}