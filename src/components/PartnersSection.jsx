import React from 'react';
import { useApi } from '../hooks/useApi';
import { fetchPartners } from '../api/endpoints';
import { mediaUrl } from '../api/client';

export default function PartnersSection() {
  const { data, loading } = useApi(fetchPartners);
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

        {!loading && (
          <div className="partner-block">
            <div className="logo-body">
              {partners.flatMap((partner) =>
                (partner.images || []).map((img) => (
                  <div key={img.id}>
                    <img src={mediaUrl(img.image)} alt="" />
                  </div>
                ))
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
