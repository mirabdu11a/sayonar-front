import React from 'react'
import { useTranslation } from "react-i18next";

export default function CompanySection() {
  const { t } = useTranslation();
  return (
    <section className='CompanySection'>
      <div className="container">
        <div className="section-tittle">
          <div className='first-block col-md-3'>
            <div className="disc"></div>
            <p>{t("companySectionInfo")}</p>
          </div>
          <div className='second-block'>
            <h2 className='col-md-9'>{t("companySectionTitle")}</h2>
            <p>{t("companySectionInfo2")}</p>
            <button>{t("recieveButton")}</button>

            <div className='rows'>
              <h4>{t("companySectionRowTitle1")}</h4>
              <p>{t("companySectionRowInfo1")}</p>
            </div>

            <div className='rows'>
              <h4>{t("companySectionRowTitle2")}</h4>
              <p>{t("companySectionRowInfo2")}</p>
            </div>

            <div className='rows'>
              <h4>{t("companySectionRowTitle3")}</h4>
              <p>{t("companySectionRowInfo3")}</p>
            </div>

            <div className='rows'>
              <h4>{t("companySectionRowTitle4")}</h4>
              <p>{t("companySectionRowInfo4")}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
