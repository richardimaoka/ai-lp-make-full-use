### レトロ喫茶「プリン喫茶 カラメルマントヒヒ」アフタヌーンティー ランディングページ構成案

**1. ファーストビュー (Hero Section)**
*   **メインビジュアル**: レトロな店内で、主役のプリンが際立つ豪華なアフタヌーンティーセットの俯瞰写真。自然光が差し込む温かい雰囲気。
*   **キャッチコピー**:
    *   メイン: 「時が止まる喫茶店で、至福のレトロアフタヌーンティーを。」
    *   サブ: 「創業40年。懐かしさと新しさが織りなす、特別なひととき。」
*   **CTAボタン**: 「今すぐ予約する」

Here is a todo checklist for `@specs/1-first-view-section.md`:

**Tasks for First View Section:**

*   **メインビジュアル (Main Visual)**:
    *   [x] **Richard**: レトロな店内で、主役のプリンが際立つ豪華なアフタヌーンティーセットの俯瞰写真をご用意ください。
        *   [x] ../public/images/1-first-view-section-pudding.jpg
*   **キャッチコピー (Catchy Headline)**:
    *   [x] **Richard**: 喫茶店名 `[喫茶店名]` を最終決定してください。
        *   [x] `[喫茶店名]` = `プリン喫茶 カラメルマントヒヒ`
    *   [x] **Gemini CLI**: 決定された喫茶店名「プリン喫茶 カラメルマントヒヒ」で `[喫茶店名]` を置き換えます。
*   **CTAボタン (CTA Button)**:
    *   [x] **Richard**: CTAボタンのテキストを「プランを見る」のみにするか、「今すぐ予約する」も追加するかご検討ください。
        *   [x] CTAボタンのテキストは「今すぐ予約する」のみ
    *   [x] **Gemini CLI**: CTAボタンのテキストを「今すぐ予約する」に更新します。
*   **Component Creation**:
    *   [x] **Gemini CLI**: `@app/components/FirstViewSection.tsx` にて、ファーストビューセクションのReactコンポーネントを作成します。。