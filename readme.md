## ❯ About 
システムの雛形に使ってください  
各種html/cssファイル群のデザインや構想等は仮のものですので、要求仕様書通りに作り直すこと  

実行方法は、環境、動かすための手順　(MAC/WINDOWS)を参照  
サーバー下もしくはローカルサーバーでの開発、動作を想定。ブラウザで実行  
不明点は本人まで

## ❯ 環境、動かすための手順  -  MAC OS

__1. HTMLファイルをそのままブラウザで動かす場合__

    確認したいxxx.htmlを開く。
     

__2. 自分のpcでサーバーを立ててローカル環境で動かす場合__

    xamppをインストール、起動  
    ↓  
    Generalのstartとservicesのstart  
    ↓  
    Networkのlocalhost:8080をenable  
    ↓  
    volumeのmountを押した後にexploreでフォルダを開く  
    ↓  
    lampp/htdocsにこのrepositoryを入れてchromeなどで、http:/localhost:8080/フォルダ名/xxx.htmlでアクセス

## ❯ 環境、動かすための手順  -  WINDOWS OS

__1. HTMLファイルをそのままブラウザで動かす場合__

    確認したいxxx.htmlを開く。
     

__2. 自分のpcでサーバーを立ててローカル環境で動かす場合__

    xamppをインストール、起動  
    ↓  
    メイン画面のstartを全部おす
    ↓  
    lampp/htdocsにこのrepositoryを入れてchromeなどで、http:/localhost:8080/フォルダ名/xxx.htmlでアクセス


## ❯ 各種ファイルの役割と構造について
フォルダの階層はこんな感じになってます（vscodeより）
以下にどのファイルがどの機能を担当しているのかを箇条書きします。
![structure](https://user-images.githubusercontent.com/49393142/179450006-70776a80-4f76-403f-9b93-ed46b6d03940.png)

### ❯ HTML

- index.html ... ログイン画面
- home_follower.html ... followerのホーム画面
- home_admin.html ... adminのホーム画面
- list.html ... 資産の一覧表示、資産の検索
- change_follower.html ... followerの資産の変更
- change_admin.html ... adminの資産変更
- delete.html ... 資産の削除
- submit_follower.html ... followerの資産の登録
- submit_admin.html ... adminの資産登録
- user_info_follower.html ... followerのユーザ情報確認、編集
- user_info_admin.html ... adminのユーザ情報確認、編集
- user_list.html ... ユーザーのリスト
- +α

### ❯ CSS

- style.css
- xxx.css（各種htmlファイルと紐付け)
- +α（フロント担当に任せます)

### ❯ JS

- root.js ... データテーブルの管理をする
- submit.js ... データ登録関連の関数(submit.jsで使用)
- ※scripts.js ... ファイルを読み込み表示する
- +α

- data.csv ... sqlから持ってきたデータ。ディレクトリ構造の関係上jsフォルダに配置させていただいてます。

### ❯ images

- 画像ファイル群

### ❯ local

- その他今は使用していないファイルなど