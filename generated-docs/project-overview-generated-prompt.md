Last updated: 2025-12-02


# プロジェクト概要生成プロンプト（来訪者向け）

## 生成するもの：
- projectを3行で要約する
- プロジェクトで使用されている技術スタックをカテゴリ別に整理して説明する
- プロジェクト全体のファイル階層ツリー（ディレクトリ構造を図解）
- プロジェクト全体のファイルそれぞれの説明
- プロジェクト全体の関数それぞれの説明
- プロジェクト全体の関数の呼び出し階層ツリー

## 生成しないもの：
- Issues情報（開発者向け情報のため）
- 次の一手候補（開発者向け情報のため）
- ハルシネーションしそうなもの（例、存在しない機能や計画を勝手に妄想する等）

## 出力フォーマット：
以下のMarkdown形式で出力してください：

```markdown
# Project Overview

## プロジェクト概要
[以下の形式で3行でプロジェクトを要約]
- [1行目の説明]
- [2行目の説明]
- [3行目の説明]

## 技術スタック
[使用している技術をカテゴリ別に整理して説明]
- フロントエンド: [フロントエンド技術とその説明]
- 音楽・オーディオ: [音楽・オーディオ関連技術とその説明]
- 開発ツール: [開発支援ツールとその説明]
- テスト: [テスト関連技術とその説明]
- ビルドツール: [ビルド・パース関連技術とその説明]
- 言語機能: [言語仕様・機能とその説明]
- 自動化・CI/CD: [自動化・継続的統合関連技術とその説明]
- 開発標準: [コード品質・統一ルール関連技術とその説明]

## ファイル階層ツリー
```
[プロジェクトのディレクトリ構造をツリー形式で表現]
```

## ファイル詳細説明
[各ファイルの役割と機能を詳細に説明]

## 関数詳細説明
[各関数の役割、引数、戻り値、機能を詳細に説明]

## 関数呼び出し階層ツリー
```
[関数間の呼び出し関係をツリー形式で表現]
```
```


以下のプロジェクト情報を参考にして要約を生成してください：

## プロジェクト情報
名前: 
説明: # easyabcjs6
A library for using abcjs easily in the browser.

# Demo
https://cat2151.github.io/easyabcjs6/

## Demoの遊び方
- textareaに、ABC music notationフォーマットの文字列を書きます。
- 文字列のサンプル basic はこちら
    - [abc music notation basic](http://www.lesession.co.uk/abc/abc_notation.htm)
- 五線譜が表示されたことを確認します。
- 音が出たことを確認します。
- より複雑な ABC music notationを書きます。
    - サンプル
        - [実用abc譜](https://www.asahi-net.or.jp/~mf4n-nmr/abc_notation.html)
            - ページ内を「program」で検索すると、
            - MIDI Program Changeを使った作例があります

# Features
- ブラウザで[abcjs](https://github.com/paulrosen/abcjs) をeasyに使える Wrapper library
    - abcjsは、ブラウザで五線譜を描画しつつSoundFont GM音源ソフトシンセを鳴らすライブラリです
- 用途は？
    - easyabcjs6を使うことで、以下の実現を目指しています。
        - webで abcjs を楽に使う用。
        - webで五線譜表示と演奏を楽に行う用。
            - それを利用し、
            - 今後、Chord notation や Music Macro Language 等、
            - ABC music notation以外のフォーマットのテキスト音楽データについても
            - 五線譜表示や演奏のチャンスを増やす用。
            - そして将来的には abcjs に依存しない譜面表示や演奏の仕組み構築に役立てる用。
                - （譜面表示や演奏の仕組みは、abcjsに限定せず、用途に応じた多様な複数のプロジェクトがあってよいと考えます）

# Requirement
- `index.html` をちょっと書けば音が鳴ります

# Installation
- `index.html` を参考にコードを書けばOK。
  - `easyabcjs6.js`は配置不要。CDNからの取得でOK。詳しくは `index.html` を参照ください。

# Usage
- `index.html` を参考にコードを書けばOK。

# Note
## カスタマイズする手順
### デフォルトではどう動作するの？
```html
<button id="play-button">play</button>
    → このidのボタンを押すと演奏開始します

<div id="music-score"></div>
    → このidのdivに五線譜が表示されます

<textarea id="abc-notation">[C8EGB]</textarea>
    → このidのtextareaに文字を入力すると、その文字を演奏します
```
### どうカスタマイズするの？
```JavaScript
easyabcjs6.musicScoreId = "music-score";
    → もし五線譜表示divのidが衝突して別のものにしたい場合、ここを書き換えます

easyabcjs6.playButtonId = "play-button";
    → もしボタンのidが衝突して別のものにしたい場合、ここを書き換えます

easyabcjs6.abcNotationId = "abc-notation";
    → もし文字入力textareaのidが衝突して別のものにしたい場合、ここを書き換えます

easyabcjs6.play = ～
    → もし演奏開始関数を別のものにしたい場合、ここを書き換えます
        例：
            easyabcjs6.play = myPlay;
            function myPlay() {
                easyabcjs6.playSub("CDE", ABCJS, easyabcjs6.musicScoreId);
            }
        例：ABC music notationのかわりに Chord notationや、Music Macro Languageを
            使いたいときに、プリプロセッサとして、
            chord2mml & mml2abc や、mml2abc を中間に差し込みます。
            （chord2mml や mml2abc は今後概念実証pre release予定です）

上記の設定後は、必ず、
    easyabcjs6.init();
を実行してください
```

## このprojectが優先すること
- Demoのpageを開いてキーボードのCキーを押すだけで音が出ること。

## 参考にしたpage
- [abcjs examples](https://paulrosen.github.io/abcjs/examples/toc.html)


依存関係:
{}

## ファイル階層ツリー
📄 LICENSE
📖 README.md
📄 _config.yml
📜 easyabcjs6.js
📁 generated-docs/
🌐 googled947dc864c270e07.html
🌐 index.html

## ファイル詳細分析
**easyabcjs6.js** (46行, 1484バイト)
  - 関数: function, then, catch
  - インポート: なし

**googled947dc864c270e07.html** (1行, 53バイト)
  - 関数: なし
  - インポート: なし

**index.html** (23行, 765バイト)
  - 関数: なし
  - インポート: なし

## 関数呼び出し階層
関数呼び出し階層を分析できませんでした

## プロジェクト構造（ファイル一覧）
README.md
easyabcjs6.js
googled947dc864c270e07.html
index.html

上記の情報を基に、プロンプトで指定された形式でプロジェクト概要を生成してください。
特に以下の点を重視してください：
- 技術スタックは各カテゴリごとに整理して説明
- ファイル階層ツリーは提供された構造をそのまま使用
- ファイルの説明は各ファイルの実際の内容と機能に基づく
- 関数の説明は実際に検出された関数の役割に基づく
- 関数呼び出し階層は実際の呼び出し関係に基づく


---
Generated at: 2025-12-02 07:04:32 JST
