import React from 'react';
import styles from './FooterSection.module.css';

const FooterSection: React.FC = () => {
  return (
    <footer className={styles['footer-section']}>
      <p>店舗名、住所、電話番号、営業時間、定休日、プライバシーポリシー、SNSリンクなど。</p>
    </footer>
  );
};

export default FooterSection;
