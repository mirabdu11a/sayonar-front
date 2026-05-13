import React from 'react'
import stars from '../assets/stars.svg'
import p1 from '../assets/people/1.png'
import p2 from '../assets/people/2.png'
import p3 from '../assets/people/3.png'
import p4 from '../assets/people/4.png'
import p5 from '../assets/people/5.png'
import p6 from '../assets/people/6.png'
import { useTranslation } from "react-i18next";

export default function Comments() {
  const { t } = useTranslation();
  return (
    <section className='Comments'>
      <div className="container">
        <div className="section-tittle">
          <div className='first-block col-md-3'>
            <div className="disc"></div>
            <p>{t("commentsInfo")}</p>
          </div>
          <div className='second-block'>
            <h2 className='col-md-9'>{t("commentsTitle")}</h2>
            <p>{t("commentsInfo2")}</p>
            <button>{t("commentsBtn")}</button>
          </div>
        </div>

        <div className="row">
          <div className="col-md-4 block">
            <div className="comment-card">
              <img className='stars' src={stars} alt="stars" />
              <p>{t("commentText1")}</p>
              <div className='person-info'>
                <img src={p1} alt="person" />
                <div>
                  <h4>{t("commentPosition1")}</h4>
                  <p>{t("commentOwner1")}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-4 block">
            <div className="comment-card">
              <img className='stars' src={stars} alt="stars" />
              <p>{t("commentText2")}</p>
              <div className='person-info'>
                <img src={p2} alt="person" />
                <div>
                  <h4>{t("commentPosition2")}</h4>
                  <p>{t("commentOwner2")}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-4 block">
            <div className="comment-card">
              <img className='stars' src={stars} alt="stars" />
              <p>{t("commentText3")}</p>
              <div className='person-info'>
                <img src={p3} alt="person" />
                <div>
                  <h4>{t("commentPosition3")}</h4>
                  <p>{t("commentOwner3")}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-4 block">
            <div className="comment-card">
              <img className='stars' src={stars} alt="stars" />
              <p>{t("commentText4")}</p>
              <div className='person-info'>
                <img src={p4} alt="person" />
                <div>
                  <h4>{t("commentPosition4")}</h4>
                  <p>{t("commentOwner4")}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-4 block">
            <div className="comment-card">
              <img className='stars' src={stars} alt="stars" />
              <p>{t("commentText5")}</p>
              <div className='person-info'>
                <img src={p5} alt="person" />
                <div>
                  <h4>{t("commentPosition5")}</h4>
                  <p>{t("commentOwner5")}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-4 block">
            <div className="comment-card">
              <img className='stars' src={stars} alt="stars" />
              <p>{t("commentText6")}</p>
              <div className='person-info'>
                <img src={p6} alt="person" />
                <div>
                  <h4>{t("commentPosition6")}</h4>
                  <p>{t("commentOwner6")}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
