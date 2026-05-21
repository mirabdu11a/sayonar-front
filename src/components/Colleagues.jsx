import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
import { useApi } from '../hooks/useApi';
import { fetchColleagues } from '../api/endpoints';
import { useLocale } from '../utils/locale';
import { mediaUrl } from '../api/client';
import { useTranslation } from "react-i18next";

export default function Colleagues() {
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

  const { data, loading } = useApi(fetchColleagues);
  const p = useLocale();
  const colleagues = data || [];
  const { t } = useTranslation();
  return (
    <section ref={sectionRef} className='Colleagues'>
      <div className="container">
        <div className="section-tittle">
          <div className='first-block col-md-3'>
            <div className="disc"></div>
            <p>{t("colleguesInfo")}</p>
          </div>
          <div className='second-block'>
            <h2 className='col-md-9'>{t("colleguesTitle")}</h2>
          </div>
        </div>
        <div className="row">
          {!loading && colleagues.map((c) => (
            <div className="col-md-3" key={c.id}>
              <div className="personal-card">
                <img src={mediaUrl(c.image)} alt={p(c, 'full_name')} />
                <h3>{p(c, 'full_name')}</h3>
                <p>{p(c, 'position')}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
