import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

import { useTranslation } from "react-i18next";

export default function AboutHeader() {
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
    <header className='AboutHeader'>
      <div className="container">
        <div className='header-info'>
          <div ref={sectionRef} className='d-flex'>
            <div>
              <h3>{t("aboutHeaderTitle")}</h3>
              <h1 >{t("aboutHeaderTitle2")}</h1>
            </div>
            <p>{t("aboutHeaderInfo")}</p>
          </div>
        </div>
      </div>
    </header>
  )  
}
