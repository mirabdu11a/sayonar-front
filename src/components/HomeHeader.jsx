import React from 'react'
import heroIMG from '../assets/images/hero.webp'

export default function HomeHeader() {
  return (
    <header className='HomeHeader'>
      <div className="header-body">
        <div className='header-infoblock1'>
          <div className="container">
            <div className="col-6 block">

              <h2>SAYONAR - Созидание Успеха</h2> 
              <p>Компания «SAYONAR» — дистрибьютор продуктов Лидеров своих категорий в FMCG сегменте на рынке Республики Узбекистан.</p>
            </div>

          </div>
        </div>
        <div className='header-infoblock2'>
          <div className="container">
            <div className="col-6 block">
              <p>Добро пожаловать на сайт нашей Компании! <br /><br /> Наши сотрудники имеют колоссальный опыт по импорту и дистрибуции потребительских товаров. <br /> <br />Наша миссия - Обеспечить Потребителя высококачественными продуктами,сделав их максимально доступными каждому.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="hero-image">
        <img src={heroIMG} alt="hero img" />
      </div>
      <div className="img-info">
        <div>

          <h4>Зафар Ходжиматов</h4>
          <p>Основатель и Генеральный Директор Компании</p>
        </div>
      </div>
    </header>
  )
}
