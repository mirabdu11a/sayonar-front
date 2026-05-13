import React from 'react'
import { useTranslation } from "react-i18next";

export default function AboutHeader() {
  const { t } = useTranslation();
  return (
    <header className='AboutHeader'>
      <div className="container">
        <div className='header-info'>
          <div className='d-flex'>
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
