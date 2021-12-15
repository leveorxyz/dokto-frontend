FROM ubuntu:20.04
RUN apt update
RUN apt upgrade -y
WORKDIR /Dokto-Frontend
COPY . .
RUN apt install nginx -y
RUN apt install curl -y
RUN curl -sL https://deb.nodesource.com/setup_16.x | bash -
RUN apt-get install nodejs -y
RUN npm install npm@latest -g
RUN npm install -g yarn
RUN yarn install
RUN cp .env.example .env
RUN yarn build
RUN cp -R ./build/* /usr/share/nginx/html
RUN cp ./nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
