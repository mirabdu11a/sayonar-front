import React from 'react'
import { useTranslation } from "react-i18next";

export default function Reputation() {
  const { t } = useTranslation();
  return (
    <section className='Reputation'>
      <div className="container">
        <div className="reputation-block">
          <div className="reputation-info">
            <h2>{t("reputationTitle")}</h2>
            <p>{t("reputationInfo")}</p>
            <button>{t("connectUs")}</button>
          </div>
        </div>
      </div>
    </section>
  )
}
