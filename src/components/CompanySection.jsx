import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

import { useTranslation } from "react-i18next";
import { useModal } from '../context/ModalContext';


export default function CompanySection() {
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
    <section  className='CompanySection'>
      <div className="container">
        <div className="section-tittle">
          <div ref={sectionRef} className='first-block col-md-3'>
            <div className="disc"></div>
            <p>{t("companySectionInfo")}</p>
          </div>
          <div ref={sectionRef}  className='second-block'>
            <h2 className='col-md-9'>{t("companySectionTitle")}</h2>
            <p>{t("companySectionInfo2")}</p>
            <button  onClick={openModal}>{t("recieveButton")}</button>

            <div  className='rows'>
              <h4>{t("companySectionRowTitle1")}</h4>
              <p>{t("companySectionRowInfo1")}</p>
            </div>

            <div  className='rows'>
              <h4>{t("companySectionRowTitle2")}</h4>
              <p>{t("companySectionRowInfo2")}</p>
            </div>

            <div  className='rows'>
              <h4>{t("companySectionRowTitle3")}</h4>
              <p>{t("companySectionRowInfo3")}</p>
            </div>

            <div  className='rows'>
              <h4>{t("companySectionRowTitle4")}</h4>
              <p>{t("companySectionRowInfo4")}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
