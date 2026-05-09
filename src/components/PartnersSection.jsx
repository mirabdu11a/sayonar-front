import React from 'react'
import p1 from '../assets/p1.svg'
import p2 from '../assets/p2.svg'
import p3 from '../assets/p3.svg'
import p4 from '../assets/p4.svg'
import p5 from '../assets/p5.svg'

export default function PartnersSection() {
  return (
    <section className='PartnersSection'>
      <div className="container">
        <div className="section-tittle">
          <div className='first-block col-md-3'>
            <div className="disc"></div>
            <p>О нас</p>
          </div>
          <div className='second-block'>
            <h2 className='col-md-9'>Мы ценим доверие наших партнеров</h2>
            <p>В портфеле компании Бренды Лидеры в своих категориях
Компания имеет огромный потенциал развития и имеет все шансы занять лидирующие позиции на рынке Узбекистана.</p>
            <button>Связаться с нами</button>
          </div>
        </div>

        <div className="logo-body">
          <div>
            <img src={p1} alt="partners" />
          </div>
          <div>
            <img src={p2} alt="partners" />
          </div>
          <div>
            <img src={p3} alt="partners" />
          </div>
          <div>
            <img src={p5} alt="partners" />
            <img src={p4} alt="partners" />
          </div>
        </div>
      </div>
    </section>
  )
}
