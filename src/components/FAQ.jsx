import React, { useState } from 'react';

const faqData = [
  { id: '01', question: 'Что нужно, чтобы начать сотрудничество?', answer: 'Здесь будет ваш текст ответа на первый вопрос.' },
  { id: '02', question: 'Как проходит процесс работы?', answer: 'Здесь будет ваш текст ответа на второй вопрос.' },
  { id: '03', question: 'С какими товарами вы работаете?', answer: 'Здесь будет ваш текст ответа на третий вопрос.' },
  { id: '04', question: 'В каких регионах вы работаете?', answer: 'Здесь будет ваш текст ответа на четвертый вопрос.' },
  { id: '05', question: 'Как формируется стоимость услуг?', answer: 'Здесь будет ваш текст ответа на пятый вопрос.' },
  { id: '06', question: 'Помогаете ли вы с продвижением продукции?', answer: 'Здесь будет ваш текст ответа на шестой вопрос.' },
  { id: '07', question: 'Как вы контролируете качество и сроки поставок?', answer: 'Здесь будет ваш текст ответа на седьмой вопрос.' },
];

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className='FAQ'>
      <div className="container">
        <div className="section-tittle">
          <div className='first-block col-md-3'>
            <div className="disc"></div>
            <p>Часто задаваемые вопросы</p>
          </div>
          <div className='second-block col-md-9'>
            {faqData.map((item, index) => (
              <div 
                key={item.id} 
                className={`rows ${activeIndex === index ? 'active' : ''}`}
                onClick={() => toggleAccordion(index)}
              >
                <div className="row-header">
                  <span className="number">{item.id}</span>
                  <h4>{item.question}</h4>
                  <span className="icon">{activeIndex === index ? '−' : '+'}</span>
                </div>
                <div className="answer">
                  <p>{item.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}