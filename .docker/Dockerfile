FROM node:23-alpine3.22

WORKDIR /app

RUN apk add --no-cache git bash

RUN corepack enable

COPY package.json pnpm-lock.yaml ./

RUN pnpm install --frozen-lockfile

COPY . .

EXPOSE 5173

CMD ["pnpm", "dev", "--host"]
