import React from 'react';
import { useApi } from '../hooks/useApi';
import { fetchColleagues } from '../api/endpoints';
import { useLocale } from '../utils/locale';
import { mediaUrl } from '../api/client';

export default function Colleagues() {
  const { data, loading } = useApi(fetchColleagues);
  const t = useLocale();
  const colleagues = data || [];

  return (
    <section className='Colleagues'>
      <div className="container">
        <div className="section-tittle">
          <div className='first-block col-md-3'>
            <div className="disc"></div>
            <p>Наша команда</p>
          </div>
          <div className='second-block'>
            <h2 className='col-md-9'>Познакомьтесь с нашей Профессиональной командой</h2>
          </div>
        </div>
        <div className="row">
          {!loading && colleagues.map((c) => (
            <div className="col-md-4" key={c.id}>
              <div className="personal-card">
                <img src={mediaUrl(c.image)} alt={t(c, 'full_name')} />
                <h3>{t(c, 'full_name')}</h3>
                <p>{t(c, 'position')}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
