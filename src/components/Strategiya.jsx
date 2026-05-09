import React from 'react';
import { useApi } from '../hooks/useApi';
import { fetchStrategies } from '../api/endpoints';
import { useLocale } from '../utils/locale';
import { mediaUrl } from '../api/client';

export default function Strategiya() {
  const { data, loading } = useApi(fetchStrategies);
  const t = useLocale();
  const items = data || [];

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
          {!loading && items.map((s, i) => (
            <div className={i % 4 === 0 || i % 4 === 3 ? 'col-md-7' : 'col-md-5'} key={s.id}>
              <div className='strategiya-card'>
                <div>
                  <img src={mediaUrl(s.image)} alt={t(s, 'title')} />
                  <h3>{t(s, 'title')}</h3>
                  <p>{t(s, 'description')}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
