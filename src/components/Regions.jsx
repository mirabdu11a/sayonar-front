import React, { useState, useEffect } from 'react';
import { useApi } from '../hooks/useApi';
import { fetchRegions } from '../api/endpoints';
import { useLocale } from '../utils/locale';

function formatPopulation(n) {
  if (n == null) return '';
  return new Intl.NumberFormat('ru-RU').format(n);
}

export default function Regions() {
  const { data, loading } = useApi(fetchRegions);
  const t = useLocale();
  const regions = data || [];
  const [selectedId, setSelectedId] = useState(null);

  useEffect(() => {
    if (regions.length && selectedId == null) {
      setSelectedId(regions[0].id);
    }
  }, [regions, selectedId]);

  if (loading) return null;

  const selected = regions.find((r) => r.id === selectedId) || regions[0];

  return (
    <section className='Regions'>
      <div className="container">
        <div className='section-tittle'>
          <div className='first-block col-md-3'>
            <div className="disc"></div>
            <p>Наши офисы</p>
          </div>
          <div className='second-block'>
            <h2 className='col-md-9'>Мы рядом — в каждой области Узбекистана</h2>
          </div>
        </div>

        <div className='regions-grid'>
          <div className='regions-list'>
            {regions.map((r) => (
              <button
                key={r.id}
                onClick={() => setSelectedId(r.id)}
                className={`region-pill${r.id === selected?.id ? ' active' : ''}`}
              >
                {t(r, 'name')}
              </button>
            ))}
          </div>

          {selected && (
            <div className='region-card'>
              <h3>{t(selected, 'name')}</h3>
              <p className='region-center'>Центр: <b>{t(selected, 'center')}</b></p>
              <p className='region-population'>Население: <b>{formatPopulation(selected.population)}</b></p>

              <div className='region-contacts'>
                {selected.phone && (
                  <div className='region-contact-row'>
                    <span>📞</span> <a href={`tel:${selected.phone}`}>{selected.phone}</a>
                  </div>
                )}
                {selected.email && (
                  <div className='region-contact-row'>
                    <span>✉️</span> <a href={`mailto:${selected.email}`}>{selected.email}</a>
                  </div>
                )}
                {t(selected, 'address') && (
                  <div className='region-contact-row'>
                    <span>📍</span> <span>{t(selected, 'address')}</span>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
