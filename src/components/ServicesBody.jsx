import React from 'react'
import ico1 from '../assets/advantages/1.svg'
import ico2 from '../assets/advantages/2.svg'
import ico3 from '../assets/advantages/3.svg'
import ico4 from '../assets/advantages/4.svg'
import ico5 from '../assets/advantages/5.svg'
import ico6 from '../assets/advantages/6.svg'

export default function ServicesBody() {
  return (
    <section className='ServicesBody'>
      <div className="container">
        <div className="row">
          <div className="col-md-6 title">
            <h2>Наши возможности</h2>
            <p>Комплексные решения в области дистрибуции, логистики и развития продаж для вашего бизнеса</p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4 block">
            <div className="card1">
              <img src={ico1} alt="icon" />
              <h3>Дистрибьюция</h3>
              <p>Мы предлагаем услуги дистрибьюции товаров через все возможные каналы, обеспечивая эффективную доставку от производителя до потребителя.</p>
            </div>
          </div>

          <div className="col-md-4 block">
            <div className="card1">
              <img src={ico2} alt="icon" />
              <h3>Логистика</h3>
              <p>Наша логистика обеспечивает эффективную доставку и управление запасами, оптимизируя цепочки поставок для эффективного бизнеса.</p>
            </div>
          </div>

          <div className="col-md-4 block">
            <div className="card1">
              <img src={ico3} alt="icon" />
              <h3>Маркетинговое продвижение</h3>
              <p>Команда профессионалов и экспертов могут обеспечить продвижение любого продукта «под ключ»</p>
            </div>
          </div>

          <div className="col-md-4 block">
            <div className="card1">
              <img src={ico4} alt="icon" />
              <h3>Мерчандайзинг</h3>
              <p>Наши услуги мерчандайзинга направлены на создание привлекательного представления товаров в точках продажи для увеличения их видимости и продаж.</p>
            </div>
          </div>

          <div className="col-md-4 block">
            <div className="card1">
              <img src={ico5} alt="icon" />
              <h3>Работа со специальными каналами</h3>
              <p>Мы являемся экспертами по работе со специальными каналами, обеспечивая эффективное продвижение продуктов всеми доступными способами.</p>
            </div>
          </div>

          <div className="col-md-4 block">
            <div className="card1">
              <img src={ico6} alt="icon" />
              <h3>Ввод нового продукта на рынок с нуля</h3>
              <p>Мы поможем вам успешно ввести новый продукт на рынок, обеспечив экспертную поддержку от исследования и маркетинга до организации всех цепочек дистрибьюции в более 20 000 торговых точек по всему Узбекистану</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
