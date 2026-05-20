import React from 'react';
import { Link } from 'react-router-dom';
import { useApi } from '../hooks/useApi';
import { fetchNews } from '../api/endpoints';
import { useLocale } from '../utils/locale';
import { mediaUrl } from '../api/client';
import { useTranslation } from "react-i18next";

export default function NewsBody() {
  const { data, loading } = useApi(fetchNews);
  const p = useLocale();
  const news = data || [];
  const { t } = useTranslation();

  return (
    <section className='NewsBody'>
      <div className="container">
        <div className="row">
          <div className="col-md-6 title">
            <h2>{t("newsBodyTitle")}</h2>
            <p>{t("newsBodyInfo")}</p>
          </div>
        </div>
        <div className="row">
          {!loading && news.map((item) => (
            <div className="col-md-4 block" key={item.id}>
              <Link to={`/news/${item.id}`} className="news-card">
                <img src={mediaUrl(item.image)} alt={p(item, 'title')} />
                <h4>{p(item, 'title')}</h4>
                <h5>{p(item, 'tizer')}</h5>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
