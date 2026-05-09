import React from 'react'
import logo from '../assets/parnerlogo.svg'

export default function Clients() {
  const logos = [logo, logo, logo, logo, logo, logo, logo, logo]

  return (
    <section className='Clients'>
      <div className="container">

        <div className="section-tittle"> 
          <div className='first-block col-md-3'>
            <div className="disc"></div> 
            <p>Нам доверяют лидеры</p> 
          </div> 
          <div className='second-block'> 
            <h2 className='col-md-9'>Партнёрство с ведущими компаниями индустрии</h2> 
            <p>Нам доверяют крупные компании и быстрорастущие бренды. Мы выстраиваем долгосрочные партнёрства и создаём решения, которые приносят реальный результат.</p> 
            <button>Связаться с нами</button> 
          </div> 
        </div>

        <div className="logos-block">
          {logos.map((item, index) => (
            <div className="logos-card" key={index}>
              <img src={item} alt="partner logo" />
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}