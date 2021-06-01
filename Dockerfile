FROM node:14.16.0
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY package.json .
RUN npm i
COPY . .

RUN npm run build

ENV PORT process.env.PORT || 3000
ENV HOST 0.0.0.0
ENV NODE_ENV production
ENV SECRETKEY IylIFlVLy44DmuonYwft9oPWZ2mLknt8


