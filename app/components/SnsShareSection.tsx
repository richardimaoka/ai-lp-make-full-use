import React from 'react';
import styles from './SnsShareSection.module.css';

const SnsShareSection: React.FC = () => {
  return (
    <section className={styles['sns-share-section']}>
      <h2 className={styles['sns-share-section-h2']}>#レトロ喫茶プリン喫茶カラメルマントヒヒ で、素敵な瞬間をシェアしよう！</h2>
      <p className={styles['sns-share-section-p']}>
        レトロな店内も、美しいアフタヌーンティーも、すべてが絵になります。写真撮影大歓迎！あなたの素敵な体験をInstagramやTikTokでぜひシェアしてください。
      </p>
      <p className={styles['hashtags']}>
        推奨ハッシュタグの提示: #プリン喫茶カラメルマントヒヒ #レトロ喫茶 #アフタヌーンティー #プリン #喫茶店巡り #純喫茶
      </p>
      <div className={styles['sns-visuals']}>
        {/* Placeholder for customer photos */}
        <div className={styles['sns-visual-placeholder']}>Placeholder Image 1</div>
        <div className={styles['sns-visual-placeholder']}>Placeholder Image 2</div>
        {/* Placeholder for embedded posts */}
        <div className={styles['sns-visual-placeholder']}>Placeholder Embed</div>
      </div>
    </section>
  );
};

export default SnsShareSection;
