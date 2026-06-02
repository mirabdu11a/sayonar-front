import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
import { useApi } from '../hooks/useApi';
import { fetchPartners } from '../api/endpoints';
import { useLocale } from '../utils/locale';
import { mediaUrl } from '../api/client';
import { useTranslation } from "react-i18next";
import { useModal } from '../context/ModalContext';

export default function PartnersSection() {
  const sectionRef = useRef(null);

  useEffect(() => {

    gsap.from(sectionRef.current, {
      opacity: 0,
      y: 80,
      duration: 1,

      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%",
      }
    });

  }, []);

  const { data, loading } = useApi(fetchPartners);
  const p = useLocale();
  const partners = data || [];
  const { t } = useTranslation();
  const { openModal } = useModal();

  return (
    <section ref={sectionRef} className='PartnersSection'>
      <div className="container">
        <div className="section-tittle">
          <div className='first-block col-md-3'>
            <div className="disc"></div>
            <p>{t("parnersInfo")}</p>
          </div>
          <div className='second-block'>
            <h2 className='col-md-9'>{t("parnersTittle")}</h2>
            <p>{t("parnersInfo2")}</p>
            <button onClick={openModal}>{t("connectUs")}</button>
          </div>
        </div>

        <div className="logo-body">
          {!loading && partners.map((partner) => 
            (partner.images || []).map((img) => (
              <div key={img.id} className="logo-item">
                {img.site_url ? (
                  <a href={img.site_url} target="_blank" rel="noopener noreferrer">
                    <img src={mediaUrl(img.image)} alt={p(partner, 'title')} />
                  </a>
                ) : (
                  <img src={mediaUrl(img.image)} alt={p(partner, 'title')} />
                )}
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  );
}
