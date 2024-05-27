# GOLF＿ScoreMemo

## 概要

### ゴルフのスコアを記録できる簡単なアプリ

### 仕様

#### フロントエンド

- React
- vite

####　　バックエンド

- express
- Knex
- Postgres

#### スコア登録

- ゴルフコース、プレイヤーを選択
- OUT スコア、IN スコアをそれぞれ入力
- 入力後 submit ボタンを押しスコアを登録

#### スコア履歴

- 入力されたスコアが表示される

##　　導入方法

#### データベース作成

- ターミナルで psql 　 CREATE DATABASE btc6solo;を実行しデータベースを作成する

#### マイグレーション実行

- ターミナルで npm i
- npm run migrate
- npm run seed

#### アプリ起動

- npm run start 　実行し http://localhost:8080 へアクセスしてアプリを使用できる
