import React from 'react'
import ico1 from '../assets/aboutIco1.svg'
import ico2 from '../assets/aboutIco2.svg'
import img1 from '../assets/images/aboutSection1.webp'
import img2 from '../assets/images/aboutSection2.webp'
import img3 from '../assets/images/aboutSection3.webp'

export default function AboutSection() {
  return (
    <section className='AboutSection'>
      <div className="container">
        <div className="section-tittle">
          <div className='first-block col-md-3'>
            <div className="disc"></div>
            <p>О нас</p>
          </div>
          <div className='second-block'>
            <h2 className='col-md-9'>Наши Ценности</h2>
            <p>Мы верим, что успешный бизнес — это ежедневное творчество и максимальная самоотдача, создание высокоэффективной экономической системы и наш успех опирается на знание и грамотное применение макро и микроэкономических законов.</p>
            <button>Связаться с нами</button>
            <div className='about-advantages'>

              <div className='about-advantages-body'>
                <div className='d-flex'>
                  <img src={ico1} alt="icon" />
                  <h4>Наше видение</h4>
                </div>
                <p>Инновационные решения, обеспечивающие гибкость, эффективность и устойчивость в современном динамичном бизнес-мире.</p>
              </div>

              <div className='about-advantages-body'>
                <div className='d-flex'>
                  <img src={ico2} alt="icon" />
                  <h4>Наша миссия</h4>
                </div>
                <p>Наша миссия - Обеспечить Потребителя высококачественными продуктами,сделав их максимально доступными каждому</p>
              </div>

            </div>
          </div>
        </div>

        <div className="section-images row">
          <div className="col-md-4">
            <img src={img1} alt="about images" />
          </div>

          <div className="col-md-4">
            <img src={img2} alt="about images" />
          </div>

          <div className="col-md-4">
            <img src={img3} alt="about images" />
          </div>
        </div>
      </div>
    </section>
  )
}
