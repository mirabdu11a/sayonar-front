import React from 'react'
import p from '../assets/images/moreNews.png'

export default function MoreNews() {
  return (
    <section className='MoreNews'>
      <div className="container">
        <div className='more-info'>Новости компании</div>
        <h2>SAYONAR на ярмарке вакансий для выпускников вузов</h2>
        <p className='news-tizer'>Компания представила карьерные возможности и познакомила молодых специалистов с работой в сфере дистрибуции и логистики</p>
        <img className='first-img' src={p} alt="" />

        <div className="row">
          <div className="col-md-4 data-block">
            <p>29 августа 2025 • SAYONAR</p>
          </div>
          <div className="col-md-8 more-texts">
            <h3>О событии</h3>
            <p>В течение трёх дней компания SAYONAR принимала участие в ярмарке вакансий для выпускников высших учебных заведений, организованной Национальным банком Республики Узбекистан.
Мероприятие стало важной площадкой для диалога между бизнесом и молодыми специалистами, стремящимися начать карьеру в ведущих компаниях страны.</p>
            <img src={p} alt="" />
          </div>
        </div>
      </div>
    </section>
  )
}
