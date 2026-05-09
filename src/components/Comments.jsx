import React from 'react'
import stars from '../assets/stars.svg'
import p1 from '../assets/people/1.png'
import p2 from '../assets/people/2.png'
import p3 from '../assets/people/3.png'
import p4 from '../assets/people/4.png'
import p5 from '../assets/people/5.png'
import p6 from '../assets/people/6.png'

export default function Comments() {
  return (
    <section className='Comments'>
      <div className="container">
        <div className="section-tittle">
          <div className='first-block col-md-3'>
            <div className="disc"></div>
            <p>Отзывы наших партнеров</p>
          </div>
          <div className='second-block'>
            <h2 className='col-md-9'>Почему компании выбирают SAYONAR</h2>
            <p>Наши партнёры ценят надёжность, стабильные поставки и результат, который мы обеспечиваем на каждом этапе сотрудничества</p>
            <button>Начать сотрудничество</button>
          </div>
        </div>

        <div className="row">
          <div className="col-md-4 block">
            <div className="comment-card">
              <img className='stars' src={stars} alt="stars" />
              <p>SAYONAR помог нам выстроить стабильную дистрибуцию по всей стране. Поставки стали быстрее, а процессы — прозрачнее.</p>
              <div className='person-info'>
                <img src={p1} alt="person" />
                <div>
                  <h4>Коммерческий директор</h4>
                  <p>FMCG компания</p>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-4 block">
            <div className="comment-card">
              <img className='stars' src={stars} alt="stars" />
              <p>Благодаря их логистике мы значительно сократили издержки и ускорили доставку продукции в регионы.</p>
              <div className='person-info'>
                <img src={p2} alt="person" />
                <div>
                  <h4>Руководитель отдела логистики</h4>
                  <p>Дистрибьюторская компания</p>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-4 block">
            <div className="comment-card">
              <img className='stars' src={stars} alt="stars" />
              <p>Команда SAYONAR глубоко понимает рынок и помогает эффективно развивать бренд в Узбекистане.</p>
              <div className='person-info'>
                <img src={p3} alt="person" />
                <div>
                  <h4>Маркетинг директор</h4>
                  <p>Международный бренд</p>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-4 block">
            <div className="comment-card">
              <img className='stars' src={stars} alt="stars" />
              <p>Сотрудничество с ними позволило нам быстро выйти в крупные торговые сети и увеличить продажи.</p>
              <div className='person-info'>
                <img src={p4} alt="person" />
                <div>
                  <h4>Руководитель продаж</h4>
                  <p>Производственная компания</p>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-4 block">
            <div className="comment-card">
              <img className='stars' src={stars} alt="stars" />
              <p>Надёжный партнёр, который всегда выполняет обязательства и соблюдает сроки поставок.</p>
              <div className='person-info'>
                <img src={p5} alt="person" />
                <div>
                  <h4>Генеральный директор</h4>
                  <p>Розничная сеть</p>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-4 block">
            <div className="comment-card">
              <img className='stars' src={stars} alt="stars" />
              <p>Отличная команда и выстроенные процессы. Полный контроль на всех этапах — от склада до точки продаж.</p>
              <div className='person-info'>
                <img src={p6} alt="person" />
                <div>
                  <h4>Операционный директор</h4>
                  <p>FMCG компания</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
