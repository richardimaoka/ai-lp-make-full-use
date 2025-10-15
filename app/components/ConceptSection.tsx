import React from 'react';
import styles from './ConceptSection.module.css';

const ConceptSection: React.FC = () => {
  return (
    <section className={styles['concept-section']}>
      <h2 className={styles['concept-section-h2']}>都会の喧騒を離れて。小さな駅の傍らに佇む、40年の物語。</h2>
      <p className={styles['concept-section-p']}>
        ターミナル駅から数駅離れた、隠れ家のような立地を説明。
        創業40年の歴史と、こじんまりとしたレトロな内装の魅力を紹介。アンティーク家具、温かい照明、こだわりの食器など、具体的な描写で世界観を伝える。
        「日常を忘れ、ゆったりと流れる時間をお楽しみください。」
      </p>
      {/* Visuals will go here */}
      <div className={styles['concept-visuals']}>
        {/* Placeholder for images */}
      </div>
    </section>
  );
};

export default ConceptSection;
