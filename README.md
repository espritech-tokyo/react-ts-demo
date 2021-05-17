# react-ts-demo

## > 環境

### node version

```
v14.16.1
```

<br />

### npm version

```
7.9.0
```

`npm ci` 使いたいので、`yarn` ではなく `npm` でお願いします  
<br />

### create-react-app つかってます

```
$ npx create-react-app react-ts-demo --template typescript
```

<br />

### ルール ★

1. github flow 運用です (main ブランチへの反映はひとまずなし)
2. develop へのマージは複数人レビュー実施後に行いましょう
3. ブランチ作成は、feature/xxx で作成しましょう  
   <br />

## > インストール

1. 当リポジトリ clone
2. 以下のコマンドを実施

```
$ cd react-ts-demo
$ npm ci
```

※ npm ci を再度実施する場合は、`./node_modules` を削除してから実施してください  
<br />

## > 実行

### app 実行

```
$ cd react-ts-demo
$ npm start
```

コマンドを実施すると、`http://localhost:3000/` が立ち上がります  
停止する際はターミナルで `Ctrl + c`  
<br />

### Storybook 実行

```
$ cd react-ts-demo
$ npm run storybook
```

コマンドを実施すると、`http://localhost:6000/` が立ち上がります  
<br />
