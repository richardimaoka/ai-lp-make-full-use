import React from 'react';
import styles from './PuddingSection.module.css';

const PuddingSection: React.FC = () => {
  return (
    <section className={styles['pudding-section']}>
      <h2 className={styles['pudding-section-h2']}>40年愛され続ける、伝説の口どけ。当店自慢の『プリン・マントヒヒ』</h2>
      <p className={styles['pudding-section-p']}>
        プリンへのこだわり（素材、製法、受け継がれてきた味の歴史）。
        一口食べれば、誰もが笑顔になる。そんな魔法のプリンが、アフタヌーンティーの主役です。
        食感や味わいを具体的に表現。
      </p>
      <div className={styles['pudding-visual']}>
        <img src="/images/3-pudding-section.png" alt="Our special pudding" />
      </div>
    </section>
  );
};

export default PuddingSection;
