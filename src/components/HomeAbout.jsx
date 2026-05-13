import React from 'react';
import { useApi } from '../hooks/useApi';
import { fetchScales } from '../api/endpoints';
import { useLocale } from '../utils/locale';
import { useTranslation } from "react-i18next";

export default function HomeAbout() {
  const { data, loading } = useApi(fetchScales);
  const p = useLocale();
  const scales = data || [];
  const { t } = useTranslation();
  
  return (
    <section className='HomeAbout'>
      <div className="container">
        <div className="section-tittle row">
          <div className='first-block col-md-3'>
            <div className="disc"></div>
            <p>{t("homeAboutInfo")}</p>
          </div>
          <h2 className='col-md-9'>{t("homeAboutTitle")}</h2>
        </div>

        <div className='number-info'>
          {!loading && scales.map((s) => (
            <div key={s.id}>
              <h3>{s.value} +</h3>
              <h4>{p(s, 'title')}</h4>
              <p>{p(s, 'description')}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
