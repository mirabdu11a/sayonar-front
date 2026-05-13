import React from 'react';
import { useApi } from '../hooks/useApi';
import { fetchPartners } from '../api/endpoints';
import { useLocale } from '../utils/locale';
import { mediaUrl } from '../api/client';
import { useTranslation } from "react-i18next";

export default function PartnersSection() {
  const { data, loading } = useApi(fetchPartners);
  const p = useLocale();
  const partners = data || [];
  const { t } = useTranslation();

  return (
    <section className='PartnersSection'>
      <div className="container">
        <div className="section-tittle">
          <div className='first-block col-md-3'>
            <div className="disc"></div>
            <p>{t("parnersInfo")}</p>
          </div>
          <div className='second-block'>
            <h2 className='col-md-9'>{t("parnersTittle")}</h2>
            <p>{t("parnersInfo2")}</p>
            <button>{t("connectUs")}</button>
          </div>
        </div>

        {!loading && partners.map((partner) => (
          <div className="partner-block" key={partner.id}>
            <h3>{p(partner, 'title')}</h3>
            <p>{p(partner, 'description')}</p>
            <div className="logo-body">
              {(partner.images || []).map((img) => (
                <div key={img.id}>
                  <img src={mediaUrl(img.image)} alt={p(partner, 'title')} />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
