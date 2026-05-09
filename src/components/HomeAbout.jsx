  import React from 'react'

  export default function HomeAbout() {
    return (
      <section className='HomeAbout'>
        <div className="container">
          <div className="section-tittle row">
            <div className='first-block col-md-3'>
              <div className="disc"></div>
              <p>Наш масштаб в цифрах</p>
            </div>
            <h2 className='col-md-9'>Наш опыт, доверие тысяч клиентов и масштабные складские мощности - прочная основа вашего бизнеса</h2>
          </div>

          <div className='number-info'>
            <div>
              <h3>200+</h3>
              <h4>Сотрудников</h4>
              <p>Более 200 квалифицированных специалистов работают в нашей команде, обеспечивая высокое качество и надёжность услуг.</p>
            </div>

            <div>
              <h3>20 000+</h3>
              <h4>Доверие тысяч клиентов</h4>
              <p>Более 20 000 компаний по всему Узбекистану уже выбрали нас в качестве надёжного партнёра</p>
            </div>

            <div>
              <h3>15 000 м²</h3>
              <h4>Масштабная складская инфраструктура</h4>
              <p>Свыше 15 000 м² современных складских площадей для эффективного хранения и логистики</p>
            </div>
          </div>
        </div>
      </section>
    )
  }
