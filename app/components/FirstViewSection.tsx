import React from 'react';
import styles from './FirstViewSection.module.css';

const FirstViewSection: React.FC = () => {
  return (
    <section className={styles['first-view-section']}>
      {/* Main Visual */}
      <div className={styles['main-visual']}>
        <img src="/images/1-first-view-section-pudding.jpg" alt="Afternoon Tea Set" />
      </div>

      {/* Catchy Headline */}
      <div className={styles['headline-content']}>
        <h1>時が止まる喫茶店で、至福のレトロアフタヌーンティーを。</h1>
        <p>創業40年。懐かしさと新しさが織りなす、特別なひととき。</p>
      </div>

      {/* CTA Button */}
      <div className={styles['cta-button']}>
        <button>今すぐ予約する</button>
      </div>
    </section>
  );
};

export default FirstViewSection;
