# twitterBotOnRaspberryPi
## 使い方
1. DashButtonをセットアップ、macアドレスを調査  
    [「Amazon Dash ButtonをただのIoTボタンとして使う」](https://qiita.com/jsoizo/items/3b8bba4160f41aef20f4)
1. node.jsをインストール  
    node.js v6.11.1、npm v3.10.10で動作確認
    
1. twitterのアクセストークンを取得  
    [「Twitter API キーを取得する」](http://koukitips.net/post1641/)
    
1. リポジトリディレクトリ直下にSECRET.jsonを作成
    
    ```json
    {
        "consumer_key": "...",
        "consumer_secret": "...",
        "access_token": "...",
        "access_token_secret": "..."
    }
    ```
    
1. npmパッケージをインストール
    
    ```
    npm install
    ```
    
1. 実行
    
    ```
    node main.js
    ```

1. dashBottonを押す

1. 
＿人人人人人人人人人人＿  
＞　おうちかえりたい　＜  
￣Y^Y^Y^Y^Y^Y^Y^Y^Y￣  