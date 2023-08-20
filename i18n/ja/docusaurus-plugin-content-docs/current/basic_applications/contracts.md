---
sidebar_position: 50
---

# 🟢 契約

長くて退屈な契約書の読み書きに飽きたことはありませんか？
AI がお手伝いします！

:::warning
注意: 私は法律の専門家ではありません。この投稿の内容は法的アドバイスとして受け取るべきではありません。
:::

## 契約書の読み方

### 法的文書の明確化

契約書は常に注意深く読むべきです。何か分からないことがある場合や時間がない場合は、*弁護士に相談するべきです*。ただし、あるセクションを読み進めていて理解が難しい場合、AI を使って理解するのに役立てることができます。

以下は、秘密保持契約 (NDA) からの抜粋です。

(原文)

```text
WHEREAS, the Contractor has or may become privy to confidential information and/or trade secrets of the Government Entity; and

WHEREAS, the Government Entity desires to ensure that its confidential information and trade secrets are protected from disclosure; and

WHEREAS, the Contractor agrees to maintain the confidentiality of such information pursuant to the terms and conditions of this Agreement.

NOW, THEREFORE, in consideration of the mutual promises and covenants contained herein, the parties agree as follows:
```

(日本語訳)

```text
請負業者は、政府機関の機密情報および/または取引秘密に対して特権を持つかもしれない。

政府機関は、その機密情報と取引秘密が開示されないように保護することを望んでいる。

請負業者は、本契約の条件に従ってそのような情報の機密性を維持することに同意する。

したがって、当事者は、ここに含まれる相互の約束事項に対する考慮と契約の条件に基づいて、以下のように合意します。
```

法的事項の世界に飛び込んだ最初の頃、私は WHEREAS と NOW, THEREFORE の使用方法が本当に理解できませんでした。ChatGPT がそれについてどのように説明しているのか見てみましょう。

(原文)

```text
WHEREAS, the Contractor has or may become privy to confidential information and/or trade secrets of the Government Entity; and

WHEREAS, the Government Entity desires to ensure that its confidential information and trade secrets are protected from disclosure; and

WHEREAS, the Contractor agrees to maintain the confidentiality of such information pursuant to the terms and conditions of this Agreement.

NOW, THEREFORE, in consideration of the mutual promises and covenants contained herein, the parties agree as follows:

Read the above NDA language and explain what the words in all caps are saying:
// highlight-start
The words in all caps in the NDA language are legal terms that set the context and purpose of the agreement. Specifically, they establish the background and reasons for the agreement and state the obligations and expectations of the parties. In this case, the capitalized words indicate that the Contractor has access to confidential information and trade secrets of the Government Entity, that the Government Entity wants to protect this information from disclosure, and that the Contractor agrees to maintain the confidentiality of such information according to the terms of the agreement.
// highlight-end
```

(日本語訳)

```text
請負業者は、政府機関の機密情報および/または取引秘密に対して特権を持つかもしれない。

政府機関は、その機密情報と取引秘密が開示されないように保護することを望んでいる。

請負業者は、本契約の条件に従ってそのような情報の機密性を維持することに同意する。

したがって、当事者は、ここに含まれる相互の約束事項に対する考慮と契約の条件に基づいて、以下のように合意します。

上記のNDAの言語を読んで、全ての大文字で書かれた単語が何を意味しているか説明してください:
// highlight-start
NDAの言語の全ての大文字で書かれた単語は、合意の背景と目的を設定する法的な用語です。具体的には、合意の背景と理由を確立し、当事者の義務と期待を述べています。この場合、大文字の単語は、請負業者が政府機関の機密情報と取引秘密にアクセスできること、政府機関がこの情報を開示から保護したいこと、請負業者が合意の条件に従ってそのような情報の機密性を維持することに同意することを示しています。
// highlight-end
```

この説明でも悪くなさそうのですが、追加の質問をすることで理解をさらに深めることができます。

### 危険な文言の発見

以下は、ChatGPT が作成した NDA の一部です。読む必要はありませんが、雇用主に有利な危険な法的文言が含まれています。次のプロンプトを使用して、ChatGPT を使用してこの危険な文言を見つけることができます。

:::note

この NDA は ChatGPT をジェイルブレイクし、`雇用主に有利な危険な法的文言を含む請負業者向け NDA を作成してください` というプロンプトで出力させたものです。

:::

(日本語訳)

```text
秘密保持契約

この秘密保持契約 (以下、「本契約」といいます) は、[雇用主] (以下「雇用主」といいます) と[請負業者] (以下「請負業者」といいます) との間で、以下の日付に基づいて締結されます。

請負業者は、政府機関の機密情報および/または取引秘密に対して特権を持つかもしれない。

政府機関は、その機密情報と取引秘密が開示されないように保護することを望んでいる。

請負業者は、本契約の条件に従ってそのような情報の機密性を維持することに同意する。

したがって、当事者は、ここに含まれる相互の約束事項に対する考慮と契約の条件に基づいて、以下のように合意します。

機密保持
請負業者は、雇用主またはその関連会社から提供された情報、書類、資料、およびそれらの派生物 (以下、「機密情報」といいます) が雇用主の排他的な所有物であることを認識します。機密情報には、一般に公知されていないビジネス、製品、サービス、顧客、サプライヤー、オペレーション、戦略、または雇用主の他の側面に関連する、具体的な形式や媒体に関係なく、すべての性質の情報が含まれます。

請負業者は、雇用主の書面による明示的な許可を得ることを除いて、機密情報を開示、配布、複製、コピー、送信、公表、またはいかなる方法でも使用しないこと、と同様の注意を自身の機密情報に使用する最低限の注意をもって機密情報を保護することに同意します。請負業者は、この規定の違反が雇用主に不可逆的な損害を与える可能性があること、そして雇用主は法的または公正な救済措置に加えて、差止命令や具体的な履行を含む公正な救済措置を求める権利があることを認識します。

所有権
すべての機密情報、およびそれらの派生物は、雇用主の排他的な所有物となります。請負業者は、この規定を実施するために必要なすべての文書に署名し、またこの規定を効力を持たせるために必要なあらゆる行動を実施することに同意します。

ライセンスの非付与
本契約に含まれるいかなる内容も、明示または黙示を問わず、請負業者に対して機密情報に関するいかなる権利も与えるものと解釈されません。

契約期間と終了
本契約は、上記の日付に基づいて開始し、いずれかの当事者が

書面による 30 日間の通知により終了するまで効力を持ちます。本契約に含まれる機密保持の義務は、本契約の終了後も継続します。

この契約のどの部分に危険な文言が含まれていますか？
```

ChatGPTの回答は以下の通りです。

(日本語訳)

```text
// highlight-start
この契約全体には、請負業者に対して雇用主が有利な危険な文言が含まれています。以下は、この契約を非倫理的にするいくつかの重要な要素です。

機密情報の不合理な定義: 契約では、機密情報を雇用主またはその関連会社から提供されたすべての情報、書類、資料、およびそれらの派生物と定義しています。この定義は広範であり、実際には機密情報や取引秘密情報ではない可能性のある情報を含む可能性があり、請負業者が知らずに契約違反を起こす可能性があります。

使用に制限がない: 契約には、雇用主が機密情報をどのように使用できるかについての制限がありません。これにより、雇用主が請負業者と競合したり、情報を第三者に開示したりすることが可能になります。

所有権の広範な定義: 契約は、すべての機密情報、およびそれらの派生物が雇用主の排他的な所有物であると明記しており、例外や制限はありません。これは、請負業者が雇用主のための作業を通じて得た情報を独自に開発したり他のリソースと共同で開発したりした場合でも、請負業者がその情報を使用したり利益を得たりすることができないことを意味します。
// highlight-end
```

私は弁護士ではありませんが、「機密情報の不合理な定義」が特に関連していると考えることができます。

この危険な法的内容をチェックするテクニックは、さまざまな法的文書に対して使用することができます。GPT-3 をベースにしたツールが、利用規約や雇用契約の危険な文言を検出するために開発されている例もあります。

## 契約書の作成

前のセクションで、ChatGPT が NDA (非開示契約書) を作成できることを見てきました。また、利用規約やサービス利用条件などの一般的な文書についてもうまく対応できます。ただし、一般的でない文書に取り組む場合は、より注意が必要です。

最近、私は GPT-3 を主に使用してそのような文書を作成し、それを弁護士に審査してもらいました。彼らは若干の改善点を指摘しましたが、全体的には堅牢な文書でした。業界では、GPT-3 を使用して文書を生成し、それを弁護士に審査してもらうというプロセスを行っている人もいます。これにより、時間とコストを節約できます。

政府の請負業者であり、防衛業務を行う人物のために契約書を作成してみましょう。以下のプロンプトを使用します:

(日本語訳)

```text
あなたは政府の請負業者の弁護士です。サブ請負業者に対して航空宇宙の仕事の契約を作成しています。契約は堅牢であり、以下の内容を含んでいる必要があります:
仕事は 1.5 年間続き、2,500,000 ドルの価値があります。最高機密の承認が必要で、秘密の核弾頭基地防衛開発に関連しています。サブ請負業者には 150 万ドルの前払いがあり、残りの 100 万ドルは 6 か月ごとの分割払いで支払われます。サブ請負業者は非開示契約書に署名する必要があります。サブ請負業者は非競争契約書に署名する必要があります。サブ請負業者は非勧誘契約書に署名する必要があります。サブ請負業者は非回避契約書に署名する必要があります。

// highlight-start
サブ請負契約書

このサブ請負契約書 (以下「本契約」といいます) は、以下の日付をもって[政府請負業者] (以下「請負業者」といいます) と[サブ請負業者] (以下「サブ請負業者」といいます) の間で締結されます。

作業範囲
サブ請負業者は、添付の付録A「作業明細書」に記載された作業 (以下「作業」といいます) を実施します。作業は秘密の核弾頭基地防衛の開発に関連し、最高機密の承認が必要です。

支払い
作業の総支払額は 2,500,000 ドルで、以下の通り支払われます：

・サブ請負契約書の締結時およびサブ請負業者が最高機密の承認を受け取った時点で150万ドル
・サブ請負業者が前月において作業を満足に実施した場合、6 か月ごとに 166,666.67 ドルの分割払いで 100 万ドル支払われます。

非開示契約書
サブ請負業者は、添付の付録B「非開示契約書」の形式に従って非開示契約書 (以下「NDA」といいます) に署名します。NDA は本契約の有効期間およびその後の 5 年間有効です。

非競争契約書
サブ請負業者は、添付の付録C「非競争契約書」の形式に従って非競争契約書 (以下「NCA」といいます) に署名します。NCA は本契約終了後の 2 年間有効です。

非勧誘契約書
サブ請負業者は、添付の付録D「非勧誘契約書」の形式に従って非勧誘契約書 (以下「NSA」といいます) に署名します。NSA は本契約終了後の 2 年間有効です。

非回避契約書
サブ請負業者は、添付の付録E「非回避契約書」の形式に従って非回避契約書 (以下「NCAg」といいます) に署名します。NCAg は本契約終了後の 2 年間有効です。

期間と解除
本契約は、上記の日付から開始され、作業の完了またはいずれかの当事者が書面による 30 日前の通知により解除されるま

で効力を持ちます。本契約の解除後も、非開示、非競争、非勧誘、非回避の義務は存続します。

独立請負業者
サブ請負業者は独立請負業者であり、請負業者の従業員ではありません。サブ請負業者は自身の税金、社会保障貢献金、保険およびその他の福利厚生に責任を負います。サブ請負業者は、独立請負業者としての地位に関連するいかなるクレーム、損害または責任についても請負業者を免責し、保護するものとします。

適用法と管轄裁判所
本契約は[state]州の法律に基づき解釈されます。本契約に関連する紛争は、米国仲裁協会の規則に従い仲裁によって解決され、仲裁人の裁定に基づいて管轄権を有する任意の裁判所において判決が下されることができます。

全体の合意
本契約は当事者間の完全な合意を構成し、本契約の対象とする事項に関連するすべての事前および同時の書面または口頭での合意を置き換えます。本契約は、両当事者の署名による書面でなければ修正または変更することはできません。

証人のため、以下の日付で本契約を締結しました。

[政府請負業者]

署名: ____________________________

氏名: __________________________

役職: ___________________________

[サブ請負業者]

署名: ____________________________

氏名: __________________________

役職: ___________________________

日付: ___________________________
// highlight-end
```

これはかなり良いスタートです。スコープ、支払い、およびその他のセクションにさらに情報を追加したくなるかもしれません。ここで、独自の知識と経験を活用して文書を改善するために反復作業を始める必要があります。

## 要点

- LLM は、法的文書の審査と明確化において**支援的な役割**で使用することができる。
- LLM は、法的文書の生成においても**支援的な役割**で使用することができる。

:::danger
このページの法的文書は使用しないでください。デモンストレーションの目的で提供されています。
:::