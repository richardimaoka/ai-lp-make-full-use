import React from 'react';
import styles from './ReservationSection.module.css';

const ReservationSection: React.FC = () => {
  return (
    <section className={styles['reservation-section']}>
      <h2 className={styles['reservation-section-h2']}>ご予約はこちらから</h2>
      <p className={styles['reservation-section-p']}>
        オンライン予約フォームへの誘導。
        電話予約の案内。
        注意事項（2時間制、キャンセルポリシー、アレルギー対応など）。
      </p>
      <div className={styles['reservation-ctas']}>
        <button>オンライン予約フォームへ</button>
        <button>電話で予約する</button>
      </div>
    </section>
  );
};

export default ReservationSection;
