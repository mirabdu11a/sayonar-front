import React from 'react'
import { useLocale } from '../utils/locale'
import { mediaUrl } from '../api/client'
import { useTranslation } from "react-i18next";

export default function MoreNews({ item }) {
   const { t } = useTranslation();
  
  const p = useLocale()
  if (!item) return null

  const title = p(item, 'title')
  const tizer = p(item, 'tizer')
  const description = p(item, 'description')

  return (
    <section className='MoreNews'>
      <div className="container">
        <div className='more-info'>{t("newsTopTitle")}</div>
        <h2>{title}</h2>
        {tizer && <p className='news-tizer'>{tizer}</p>}
        <img className='first-img' src={mediaUrl(item.image)} alt={title} />
        {description && (
          <div
            className='news-body'
            dangerouslySetInnerHTML={{ __html: description }}
          />
        )}
      </div>
    </section>
  )
}
