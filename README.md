# easyabcjs6
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
