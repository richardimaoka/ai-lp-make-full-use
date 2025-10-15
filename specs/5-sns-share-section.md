### レトロ喫茶「プリン喫茶 カラメルマントヒヒ」アフタヌーンティー ランディングページ構成案

**5. SNSでシェア (Share on SNS)**
*   **見出し**: 「#レトロ喫茶プリン喫茶カラメルマントヒヒ で、素敵な瞬間をシェアしよう！」
*   **本文**:
    *   「レトロな店内も、美しいアフタヌーンティーも、すべてが絵になります。写真撮影大歓迎！あなたの素敵な体験をInstagramやTikTokでぜひシェアしてください。」
    *   推奨ハッシュタグの提示: `#プリン喫茶カラメルマントヒヒ #レトロ喫茶 #アフタヌーンティー #プリン #喫茶店巡り #純喫茶`
*   **ビジュアル**:
    *   お客様が店内で写真撮影を楽しんでいる様子。
    *   アフタヌーンティーセットを様々な角度から撮影したイメージ。
    *   （可能であれば）お客様のInstagram/TikTok投稿の埋め込みやリンク。

Here is a todo checklist for `@specs/5-sns-share-section.md`:

**Tasks for SNS Share Section:**

*   **喫茶店名 (Cafe Name)**:
    *   [x] **Gemini CLI**: 決定された喫茶店名「プリン喫茶 カラメルマントヒヒ」で `[喫茶店名]` を置き換えます。
*   **ビジュアル (Visual)**:
    *   [ ] **Richard**: お客様が店内で写真撮影を楽しんでいる様子や、アフタヌーンティーセットのイメージをご用意ください。
*   **Component Creation**:
    *   [ ] **Gemini CLI**: `@app/components/SnsShareSection.tsx` にて、SNSシェアセクションのReactコンポーネントを作成します。
    *   [ ] **Gemini CLI**: `@app/components/SnsShareSection.module.css` を追加し、`@app/components/SnsShareSection.tsx` から読み込みます。
    *   [ ] **Gemini CLI**: `@app/page.tsx` にて、`@app/components/SnsShareSection.tsx` をimportして利用します。

