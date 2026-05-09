import React from 'react'
import p1 from '../assets/news.png';

export default function NewsBody() {
  return (
    <section className='NewsBody'>
      <div className="container">
        <div className="row">
          <div className="col-md-6 title">
            <h2>Новости и события SAYONAR</h2>
            <p>Актуальные новости компании, ключевые события и развитие бизнеса в сфере дистрибуции и логистики</p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4 block">
            <div className="news-card">
              <img src={p1} alt="news image" />
              <p className='date'> 29.08.2025</p>
              <h4>SAYONAR укрепляет партнёрские связи с Японией</h4>
              <h5>В рамках развития сотрудничества в течение 2025 года были выстроены партнёрские взаимоотношения с японскими компаниями.</h5>
            </div>
          </div>

          <div className="col-md-4 block">
            <div className="news-card">
              <img src={p1} alt="news image" />
              <p className='date'> 29.08.2025</p>
              <h4>SAYONAR укрепляет партнёрские связи с Японией</h4>
              <h5>В рамках развития сотрудничества в течение 2025 года были выстроены партнёрские взаимоотношения с японскими компаниями.</h5>
            </div>
          </div>

          <div className="col-md-4 block">
            <div className="news-card">
              <img src={p1} alt="news image" />
              <p className='date'> 29.08.2025</p>
              <h4>SAYONAR укрепляет партнёрские связи с Японией</h4>
              <h5>В рамках развития сотрудничества в течение 2025 года были выстроены партнёрские взаимоотношения с японскими компаниями.</h5>
            </div>
          </div>

          <div className="col-md-4 block">
            <div className="news-card">
              <img src={p1} alt="news image" />
              <p className='date'> 29.08.2025</p>
              <h4>SAYONAR укрепляет партнёрские связи с Японией</h4>
              <h5>В рамках развития сотрудничества в течение 2025 года были выстроены партнёрские взаимоотношения с японскими компаниями.</h5>
            </div>
          </div>

          <div className="col-md-4 block">
            <div className="news-card">
              <img src={p1} alt="news image" />
              <p className='date'> 29.08.2025</p>
              <h4>SAYONAR укрепляет партнёрские связи с Японией</h4>
              <h5>В рамках развития сотрудничества в течение 2025 года были выстроены партнёрские взаимоотношения с японскими компаниями.</h5>
            </div>
          </div>  
        </div>
      </div>
    </section>
  )
}
