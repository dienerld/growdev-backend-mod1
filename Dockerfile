FROM node:16.16.0-alpine

WORKDIR /app

COPY . .


ENV NODE_ENV=development
ARG PORT=8080
RUN yarn

ENTRYPOINT [ "yarn", "dev" ]

EXPOSE $PORT
