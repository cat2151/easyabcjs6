# easyabcjs6
A library for using abcjs easily in the browser.

# demo
https://cat2151.github.io/easyabcjs6/

# demoの遊び方
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

# easyabcjs6 を index.html に組み込む手順
see `index.html`.

# 用途
- easyabcjs6を使うことで、以下の実現を目指しています。
    - webで abcjs を楽に使う用。
    - webで五線譜表示と演奏を楽に行う用。
        - それを利用し、
        - 今後、Chord notation や Music Macro Language 等、
        - ABC music notation以外のフォーマットのテキスト音楽データについても
        - 五線譜表示や演奏のチャンスを増やす用。
        - そして将来的には abcjs に依存しない譜面表示や演奏の仕組み構築に役立てる用。
