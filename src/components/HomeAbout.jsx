import React from 'react';
import { useApi } from '../hooks/useApi';
import { fetchScales } from '../api/endpoints';
import { useLocale } from '../utils/locale';

export default function HomeAbout() {
  const { data, loading } = useApi(fetchScales);
  const t = useLocale();
  const scales = data || [];

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
          {!loading && scales.map((s) => (
            <div key={s.id}>
              <h3>{s.value}</h3>
              <h4>{t(s, 'title')}</h4>
              <p>{t(s, 'description')}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
