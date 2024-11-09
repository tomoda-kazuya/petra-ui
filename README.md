# petra-ui

petra-ui は、Vue 3 と Vite を使用して作成された UI コンポーネントライブラリです。簡単にインポートして Vue アプリケーションに組み込むことができます。

## 特徴

- Vue 3 と Vite を使用した高速な開発
- TypeScript で型安全なコンポーネント
- 軽量で小さなバンドルサイズ
- Storybook を使ったコンポーネントの管理

## インストール

npm または yarn を使用して、petra-ui をインストールできます。

npm

```bash
npm install petra-ui
```

yarn

```bash
yarn add petra-ui
```

## 使用方法

コンポーネントをインポートして、Vue のテンプレートで使用できます。

例）App.vue でコンポーネントを使用する方法：

```vue
<template>
  <div>
    <p-btn label="Click Me" />
  </div>
</template>

<script setup lang="ts">
import { PBtn } from 'petra-ui'
</script>
```

## スタイル

petra-ui には、カスタマイズ可能な SCSS が含まれています。スタイルのカスタマイズには、@use または @import を使って設定できます。

```scss
@use 'petra-ui/dist/style.css';
```

## SCSS 変数

petra-ui で利用できる SCSS 変数やミックスインも提供されています。必要に応じてカスタマイズできます。

## 開発

コンポーネントを開発するために、以下のコマンドで開発サーバーを立ち上げ、変更を反映させることができます。

## 開発サーバーの起動

```bash
npm run dev
```

## ビルド

ライブラリをビルドして、npm に公開するために以下のコマンドを実行します。

```bash
npm run build
```

## その他

- コンポーネントのデモは Storybook で確認できます。
- petra-ui は Vue 3 と TypeScript を使用していますので、TypeScript をサポートするエディタを使用してください。
