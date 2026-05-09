import React from 'react'
import s1 from '../assets/s1.svg'
import s2 from '../assets/s2.svg'
import s3 from '../assets/s3.svg'
import s4 from '../assets/s4.svg'



export default function Strategiya() {
  return (
    <section className='Strategiya'>
      <div className="container">
        <div className="section-tittle">
          <div className='first-block col-md-3'>
            <div className="disc"></div>
            <p>Наша стратегия развития продаж</p>
          </div>
          <div className='second-block'>
            <h2 className='col-md-9'>Стратегия развития продаж в Узбекистане</h2>
          </div>
        </div>
        <div className="row">
          <div className="col-md-7">
            <div className='strategiya-card'>
              <div>
                <img src={s1} alt="icon" />
                <h3>Дистрибьюция</h3>
                <p>Мы предлагаем услуги дистрибьюции товаров через все возможные каналы, обеспечивая эффективную доставку от производителя до потребителя.</p>
              </div>
            </div>
          </div>
          <div className="col-md-5">
            <div className='strategiya-card'>
              <div>
                <img src={s2} alt="icon" />
                <h3>Поддержка и снабжение команды</h3>
                <p>Мы обеспечиваем команду всеми необходимыми инструментами для эффективного продвижения.</p>
              </div>
            </div>
          </div>

          <div className="col-md-5">
            <div className='strategiya-card'>
              <div>
                <img src={s3} alt="icon" />
                <h3>Представленность в сетевых маркетах.</h3>
                <p>Мы представлены во всех торговых сетях Узбекистана и имеем достаточную экспертизу для скорейшего входа в сети Узбекистана</p>
              </div>
            </div>
          </div>

          <div className="col-md-7">
            <div className='strategiya-card'>
              <div>
                <img src={s4} alt="icon" />
                <h3>Включение партнёрских программ</h3>
                <p>увеличивают взаимный товарооборот и доходность сотрудничества</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
