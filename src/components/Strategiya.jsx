import React from 'react';
import { useApi } from '../hooks/useApi';
import { fetchStrategies } from '../api/endpoints';
import { useLocale } from '../utils/locale';
import { mediaUrl } from '../api/client';
import { useTranslation } from "react-i18next";

export default function Strategiya() {
  const { data, loading } = useApi(fetchStrategies);
  const p = useLocale();
  const items = data || [];
  const { t } = useTranslation();

  return (
    <section className='Strategiya'>
      <div className="container">
        <div className="section-tittle">
          <div className='first-block col-md-3'>
            <div className="disc"></div>
            <p>{t("strategiyaInfo")}</p>
          </div>
          <div className='second-block'>
            <h2 className='col-md-9'>{t("strategiyaTittle")}</h2>
          </div>
        </div>
        <div className="row">
          {!loading && items.map((s, i) => (
            <div className={i % 4 === 0 || i % 4 === 3 ? 'col-md-7' : 'col-md-5'} key={s.id}>
              <div
                className='strategiya-card'
                style={s.image ? { backgroundImage: `url(${mediaUrl(s.image)})` } : undefined}
              >
                <div>
                  <span className='strategiya-badge'>S{i + 1}</span>
                  <h3>{p(s, 'title')}</h3>
                  <p>{p(s, 'description')}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
