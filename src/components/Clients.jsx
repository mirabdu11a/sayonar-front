import React from 'react';
import { useApi } from '../hooks/useApi';
import { fetchClients } from '../api/endpoints';
import { useLocale } from '../utils/locale';
import { mediaUrl } from '../api/client';
import { useTranslation } from "react-i18next";
import { useModal } from '../context/ModalContext';

export default function Clients() {
  const { data, loading } = useApi(fetchClients);
  const p = useLocale();
  const clients = data || [];
  const { t } = useTranslation();
  const { openModal } = useModal();

  return (
    <section className='Clients'>
      <div className="container">

        <div className="section-tittle">
          <div className='first-block col-md-3'>
            <div className="disc"></div>
            <p>{t("clientsInfo")}</p>
          </div>
          <div className='second-block'>
            <h2 className='col-md-9'>{t("clientsTitle")}</h2>
            <p>{t("clientsInfo2")}</p>
            <button onClick={openModal}>{t("connectUs")}</button>
          </div>
        </div>

        <div className="logos-block">
          {!loading && clients.map((c) => (
            <div className="logos-card" key={c.id}>
              <img src={mediaUrl(c.logo)} alt={p(c, 'name')} />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
