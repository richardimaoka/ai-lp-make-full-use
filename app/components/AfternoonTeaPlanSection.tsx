import React from 'react';
import styles from './AfternoonTeaPlanSection.module.css';

const AfternoonTeaPlanSection: React.FC = () => {
  return (
    <section className={styles['afternoon-tea-plan-section']}>
      <h2 className={styles['afternoon-tea-plan-section-h2']}>選べる3つのプラン。あなただけの特別な時間を。</h2>

      {/* Plan 1 */}
      <div className={styles['plan-card']}>
        <h3>豪華アフタヌーンティーコース</h3>
        <p>価格: 9,800円 (2時間制)</p>
        <p>内容: プリンを含む、季節の厳選スイーツ、セイボリー、特別なアミューズ、豊富なドリンクメニュー（飲み放題）など、最も贅沢な体験をアピール。</p>
        <div className={styles['plan-visual']}>
          {/* Visual for Plan 1 */}
        </div>
        <button>このコースを予約する</button>
      </div>

      {/* Plan 2 */}
      <div className={styles['plan-card']}>
        <h3>アフタヌーンティーコース</h3>
        <p>価格: 7,800円 (2時間制)</p>
        <p>内容: プリンを含む、定番スイーツ、サンドイッチなどのセイボリー、ドリンクメニュー（飲み放題）など、充実した内容。</p>
        <div className={styles['plan-visual']}>
          {/* Visual for Plan 2 */}
        </div>
        <button>このコースを予約する</button>
      </div>

      {/* Plan 3 */}
      <div className={styles['plan-card']}>
        <h3>プリン+ドリンクセット</h3>
        <p>価格: 2,000円 (60分制)</p>
        <p>内容: 当店自慢のプリンと、お好きなドリンク1杯。</p>
        <p>補足: アフタヌーンティーは少し贅沢だけど、レトロな雰囲気とプリンを気軽に楽しみたい方に。サンドイッチやホットドッグなどの追加注文も可能です。</p>
        <div className={styles['plan-visual']}>
          {/* Visual for Plan 3 */}
        </div>
        <button>このセットを予約する</button>
      </div>
    </section>
  );
};

export default AfternoonTeaPlanSection;
