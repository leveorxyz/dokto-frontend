FROM ubuntu:20.04
RUN apt update
RUN apt upgrade -y
WORKDIR /Dokto-Frontend
COPY . .
# RUN apt install git
# RUN git clone https://olawale121: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@github.com/ToybethSystems/Dokto-Frontend.git
# RUN cd Dokto-Frontend/
RUN apt install nginx -y
RUN apt-get install nodejs -y
RUN npm install npm@latest -g
RUN npm install -g yarn
RUN yarn install
RUN cp .env.example .env
RUN yarn build
COPY /Dokto-Frontend/build /usr/share/nginx/html
COPY /etc/nginx/nginx.conf /etc/nginx/conf.d/default.conf
RUN service nginx restart
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
