import React from 'react';
import { useApi } from '../hooks/useApi';
import { fetchPartners } from '../api/endpoints';
import { useLocale } from '../utils/locale';
import { mediaUrl } from '../api/client';

export default function PartnersSection() {
  const { data, loading } = useApi(fetchPartners);
  const t = useLocale();
  const partners = data || [];

  return (
    <section className='PartnersSection'>
      <div className="container">
        <div className="section-tittle">
          <div className='first-block col-md-3'>
            <div className="disc"></div>
            <p>О нас</p>
          </div>
          <div className='second-block'>
            <h2 className='col-md-9'>Мы ценим доверие наших партнеров</h2>
            <p>В портфеле компании Бренды Лидеры в своих категориях
Компания имеет огромный потенциал развития и имеет все шансы занять лидирующие позиции на рынке Узбекистана.</p>
            <button>Связаться с нами</button>
          </div>
        </div>

        {!loading && partners.map((partner) => (
          <div className="partner-block" key={partner.id}>
            <h3>{t(partner, 'title')}</h3>
            <p>{t(partner, 'description')}</p>
            <div className="logo-body">
              {(partner.images || []).map((img) => (
                <div key={img.id}>
                  <img src={mediaUrl(img.image)} alt={t(partner, 'title')} />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
