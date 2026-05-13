import React from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { useApi } from '../hooks/useApi';
import { fetchNews } from '../api/endpoints';
import { useLocale } from '../utils/locale';
import { mediaUrl } from '../api/client';
import { useTranslation } from "react-i18next";

export default function HomeNews() {
  const { data, loading } = useApi(fetchNews);
  const p = useLocale();
  const news = data || [];
  const { t } = useTranslation();

  return (
    <section className='HomeNews'>
      <div className="container">
        <div className="section-tittle">
          <div className='first-block col-md-3'>
            <div className="disc"></div>
            <p>{t("homeNewsInfo")}</p>
          </div>
          <div className='second-block'>
            <h2 className='col-md-9'>{t("homeNewsTitle")}</h2>
          </div>
        </div>

        <div className="news-slider-wrapper">
          {!loading && (
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
              {news.map((item) => (
                <SwiperSlide key={item.id}>
                  <Link to={`/news/${item.id}`} className="news-card">
                    <img src={mediaUrl(item.image)} alt={p(item, 'title')} />
                    <h4>{p(item, 'title')}</h4>
                    <h5>{p(item, 'description')}</h5>
                  </Link>
                </SwiperSlide>
              ))}
            </Swiper>
          )}

          <div className="slider-controls">
            <div className="swiper-button-prev-custom">
              <svg xmlns="http://www.w3.org/2000/svg" width="8" height="14" viewBox="0 0 8 14" fill="none">
                <path d="M7 1L1 7L7 13" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <div className="custom-pagination"></div>
            <div className="swiper-button-next-custom">
              <svg xmlns="http://www.w3.org/2000/svg" width="8" height="14" viewBox="0 0 8 14" fill="none">
                <path d="M1 13L7 7L1 1" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
