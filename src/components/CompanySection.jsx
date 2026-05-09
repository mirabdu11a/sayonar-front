import React from 'react'

export default function CompanySection() {
  return (
    <section className='CompanySection'>
      <div className="container">
        <div className="section-tittle">
          <div className='first-block col-md-3'>
            <div className="disc"></div>
            <p>Работаем с фокусом на результат</p>
          </div>
          <div className='second-block'>
            <h2 className='col-md-9'>Каждый проект - это рост вашего бизнеса и расширение рынка</h2>
            <p>Обеспечиваем поставки продукции во все ключевые каналы продаж по всему Узбекистану</p>
            <button>Получить предложение</button>

            <div className='rows'>
              <h4>Дистрибуция товаров</h4>
              <p>Обеспечиваем поставки продукции во все ключевые каналы продаж по всему Узбекистану</p>
            </div>

            <div className='rows'>
              <h4>Логистика и складские решения</h4>
              <p>Организуем эффективную доставку, хранение и управление запасами</p>
            </div>

            <div className='rows'>
              <h4>Продвижение и развитие бренда</h4>
              <p>Помогаем увеличивать узнаваемость и продажи через маркетинговые инструменты</p>
            </div>

            <div className='rows'>
              <h4>Полный цикл сотрудничества</h4>
              <p>От выхода на рынок до масштабирования продаж -сопровождаем на каждом этапе</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
