FROM node:10-alpine as climao
RUN mkdir /app
WORKDIR /app
COPY ./ ./
RUN apk update \
  && apk add curl bash binutils gettext yarn

RUN touch .env
RUN echo "REACT_APP_WEATHER_API_URL=https://api.openweathermap.org/data/2.5/" >> .env
RUN echo "REACT_APP_WEATHER_API_KEY=${WEATHER_API_KEY}" >> .env

RUN rm -rf node_modules && yarn install
RUN yarn build

FROM nginx:alpine
COPY --from=climao /app/build /usr/share/nginx/html
COPY --from=climao /app/infra/conf.d /etc/nginx/conf.d
