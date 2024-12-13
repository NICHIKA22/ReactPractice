# Dockerfile
FROM node:22-slim

WORKDIR /app

# パッケージファイルをコピー
COPY package.json ./
# COPY yarn.lock ./ #現状このファイルがないためコメントアウト

# 依存関係のインストール
RUN yarn install --frozen-lockfile

# 必要な設定ファイルをコピー
COPY next.config.ts .
COPY tsconfig.json .

# 開発サーバーの起動
# CMD ["yarn", "dev"]
