import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import p1 from '../assets/news.png';

export default function HomeNews() {
  const newsData = [
    { id: 1, date: "29.08.2025", title: "SAYONAR укрепляет партнёрские связи с Японией", desc: "В рамках развития сотрудничества в течение 2025 года были выстроены партнёрские взаимоотношения..." },
    { id: 2, date: "29.08.2025", title: "SAYONAR на ярмарке вакансий для выпускников", desc: "В течение трёх дней компания SAYONAR принимала участие в ярмарке вакансий для выпускников..." },
    { id: 3, date: "29.08.2025", title: "SAYONAR на финале Oceanman Dubai 2025", desc: "Компания SAYONAR приняла участие в финале престижного чемпионата по плаванию..." },
    { id: 4, date: "29.08.2025", title: "Yangi loyihalar start oldi", desc: "Kompaniyamiz yangi yo'nalishlarda o'z faoliyatini kengaytirmoqda..." },
  ];

  return (
    <section className='HomeNews'>
      <div className="container">
        <div className="section-tittle">
          <div className='first-block col-md-3'>
            <div className="disc"></div>
            <p>Наши Новости</p>
          </div>
          <div className='second-block'>
            <h2 className='col-md-9'>Будьте в курсе наших новостей и событий</h2>
          </div>
        </div>

        <div className="news-slider-wrapper">
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={30}
            slidesPerView={3}
            pagination={{ clickable: true, el: '.custom-pagination' }}
            navigation={{
              nextEl: '.swiper-button-next-custom',
              prevEl: '.swiper-button-prev-custom',
            }}
            breakpoints={{
              320: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="news-swiper"
          >
            {newsData.map((news) => (
              <SwiperSlide key={news.id}>
                <div className="news-card">
                  <img src={p1} alt="news photo" />
                  <p className="date">{news.date}</p>
                  <h4>{news.title}</h4>
                  <h5>{news.desc}</h5>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="slider-controls">
            <div className="swiper-button-prev-custom">
              <svg xmlns="http://www.w3.org/2000/svg" width="8" height="14" viewBox="0 0 8 14" fill="none">
                <path d="M7 1L1 7L7 13" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </div>
            <div className="custom-pagination">
              
             
            </div>
            <div className="swiper-button-next-custom">
              <svg xmlns="http://www.w3.org/2000/svg" width="8" height="14" viewBox="0 0 8 14" fill="none">
                <path d="M1 13L7 7L1 1" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}