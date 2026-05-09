import React from 'react'
import p from '../assets/images/colleague.png'

export default function Colleagues() {
  return (
    <section className='Colleagues'>
      <div className="container">
        <div className="section-tittle">
          <div className='first-block col-md-3'>
            <div className="disc"></div>
            <p>Наша команда</p>
          </div>
          <div className='second-block'>
            <h2 className='col-md-9'>Познакомьтесь с нашей Профессиональной командой</h2>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4">
            <div className="personal-card">
              <img src={p} alt="personal" />
              <h3>Зафар Ходжиматов</h3>
              <p>Основатель, Генеральный директор</p>
            </div>
          </div>

          <div className="col-md-4">
            <div className="personal-card">
              <img src={p} alt="personal" />
              <h3>Зафар Ходжиматов</h3>
              <p>Основатель, Генеральный директор</p>
            </div>
          </div>

          <div className="col-md-4">
            <div className="personal-card">
              <img src={p} alt="personal" />
              <h3>Зафар Ходжиматов</h3>
              <p>Основатель, Генеральный директор</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
