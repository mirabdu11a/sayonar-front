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

  // The gallery is the single source of truth. Fall back to the legacy
  // single `image` only when a news has no gallery images yet.
  const gallery = (item.images && item.images.length)
    ? item.images.map((img) => img.image)
    : (item.image ? [item.image] : [])
  const [hero, ...rest] = gallery

  return (
    <section className='MoreNews'>
      <div className="container">
        <div className='more-info'>{t("newsTopTitle")}</div>
        <h2>{title}</h2>
        {tizer && <p className='news-tizer'>{tizer}</p>}
        {hero && <img className='first-img' src={mediaUrl(hero)} alt={title} />}
        {description && (
          <div
            className='news-body'
            dangerouslySetInnerHTML={{ __html: description }}
          />
        )}
        {rest.length > 0 && (
          <div className='news-gallery'>
            {rest.map((src, i) => (
              <img key={i} src={mediaUrl(src)} alt={title} />
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
