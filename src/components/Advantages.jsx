import React from 'react'
import ico1 from '../assets/advantages/1.svg'
import ico2 from '../assets/advantages/2.svg'
import ico3 from '../assets/advantages/3.svg'
import ico4 from '../assets/advantages/4.svg'
import ico5 from '../assets/advantages/5.svg'
import ico6 from '../assets/advantages/6.svg'
import { useTranslation } from "react-i18next";

export default function Advantages() {
  const { t } = useTranslation();
  return (
    <section className='Advantages'>
      <div className="container">
        <div className='center-title'>
          <h2>{t("advantagesTitle")}</h2>
          <p>{t("advantagesInfo")}</p>
          <button>{t("more")}</button>
        </div>
        <div className="row">
          <div className="col-md-4 block">
            <div className="card1">
              <img src={ico1} alt="icon" />
              <h3>{t("advantagesCardTitle1")}</h3>
              <p>{t("advantagesCardInfo1")}</p>
            </div>
          </div>

          <div className="col-md-4 block">
            <div className="card1">
              <img src={ico2} alt="icon" />
              <h3>{t("advantagesCardTitle2")}</h3>
              <p>{t("advantagesCardInfo2")}</p>
            </div>
          </div>

          <div className="col-md-4 block">
            <div className="card1">
              <img src={ico3} alt="icon" />
              <h3>{t("advantagesCardTitle3")}</h3>
              <p>{t("advantagesCardInfo3")}</p>
            </div>
          </div>

          <div className="col-md-4 block">
            <div className="card1">
              <img src={ico4} alt="icon" />
              <h3>{t("advantagesCardTitle4")}</h3>
              <p>{t("advantagesCardInfo4")}</p>
            </div>
          </div>

          <div className="col-md-4 block">
            <div className="card1">
              <img src={ico5} alt="icon" />
              <h3>{t("advantagesCardTitle5")}</h3>
              <p>{t("advantagesCardInfo5")}</p>
            </div>
          </div>

          <div className="col-md-4 block">
            <div className="card1">
              <img src={ico6} alt="icon" />
              <h3>{t("advantagesCardTitle6")}</h3>
              <p>{t("advantagesCardInfo6")}</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
