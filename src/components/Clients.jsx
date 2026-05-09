import React from 'react';
import { useApi } from '../hooks/useApi';
import { fetchClients } from '../api/endpoints';
import { useLocale } from '../utils/locale';
import { mediaUrl } from '../api/client';

export default function Clients() {
  const { data, loading } = useApi(fetchClients);
  const t = useLocale();
  const clients = data || [];

  return (
    <section className='Clients'>
      <div className="container">

        <div className="section-tittle">
          <div className='first-block col-md-3'>
            <div className="disc"></div>
            <p>Нам доверяют лидеры</p>
          </div>
          <div className='second-block'>
            <h2 className='col-md-9'>Партнёрство с ведущими компаниями индустрии</h2>
            <p>Нам доверяют крупные компании и быстрорастущие бренды. Мы выстраиваем долгосрочные партнёрства и создаём решения, которые приносят реальный результат.</p>
            <button>Связаться с нами</button>
          </div>
        </div>

        <div className="logos-block">
          {!loading && clients.map((c) => (
            <div className="logos-card" key={c.id}>
              <img src={mediaUrl(c.logo)} alt={t(c, 'name')} />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
