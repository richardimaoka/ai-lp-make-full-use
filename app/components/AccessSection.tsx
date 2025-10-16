import React from 'react';
import styles from './AccessSection.module.css';

const AccessSection: React.FC = () => {
  return (
    <section className={styles['access-section']}>
      <h2 className={styles['access-section-h2']}>[最寄駅名]駅より徒歩〇分。都会の喧騒から少し離れた隠れ家。</h2>
      <p className={styles['access-section-p']}>
        住所、電話番号、営業時間、定休日。
        「[ターミナル駅名]から電車で3～4駅。日常を忘れる小旅行気分でお越しください。」
      </p>
      <div className={styles['access-visuals']}>
        {/* Placeholder for Google Map */}
        <div className={styles['map-placeholder']}>Google Map Placeholder</div>
        {/* Placeholder for cafe exterior photo */}
        <div className={styles['exterior-photo-placeholder']}>Cafe Exterior Photo Placeholder</div>
      </div>
    </section>
  );
};

export default AccessSection;
