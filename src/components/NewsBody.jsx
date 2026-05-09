import React from 'react';
import { useApi } from '../hooks/useApi';
import { fetchNews } from '../api/endpoints';
import { useLocale } from '../utils/locale';
import { mediaUrl } from '../api/client';

export default function NewsBody() {
  const { data, loading } = useApi(fetchNews);
  const t = useLocale();
  const news = data || [];

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
          {!loading && news.map((item) => (
            <div className="col-md-4 block" key={item.id}>
              <div className="news-card">
                <img src={mediaUrl(item.image)} alt={t(item, 'title')} />
                <h4>{t(item, 'title')}</h4>
                <h5>{t(item, 'description')}</h5>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
