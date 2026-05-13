import React from 'react'
import { useLocale } from '../utils/locale'
import { mediaUrl } from '../api/client'

export default function MoreNews({ item }) {
  const p = useLocale()
  if (!item) return null

  const title = p(item, 'title')
  const description = p(item, 'description')

  return (
    <section className='MoreNews'>
      <div className="container">
        <div className='more-info'>Новости компании</div>
        <h2>{title}</h2>
        <p className='news-tizer'>{description}</p>
        <img className='first-img' src={mediaUrl(item.image)} alt={title} />
      </div>
    </section>
  )
}
