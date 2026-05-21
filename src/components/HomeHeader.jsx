import React from 'react'
import heroIMG from '../assets/images/hero.png'
import { useTranslation } from "react-i18next";

export default function HomeHeader() {
  const { t } = useTranslation();
  return (
    <header className='HomeHeader'>
      <div className="header-body">
        <div className='header-infoblock1'>
          <div className="container">
            <div className="col-6 b1 block">

              <h2>{t("homeHeaderTitle")}</h2> 
              <p>{t("homeHeaderInfo")}</p>
            </div>

          </div>
        </div>
        <div className='header-infoblock2'>
          <div className="container">
            <div className="col-6 b2 block">
              <p>{t("homeHeaderInfo2")} <br /><br /> {t("homeHeaderInfo3")} <br /> <br />{t("homeHeaderInfo4")}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="hero-image">
        <img src={heroIMG} alt="hero img" />
      </div>
      <div className="img-info">
        <div>

          <h4>{t("CEOname")}</h4>
          <p>{t("CEOposition")}</p>
        </div>
      </div>
    </header>
  )
}
