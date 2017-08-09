FROM node:latest

# WORKDIR /usr/src/
RUN git clone https://github.com/plzpeacez/ElevationsApi.git
RUN cd ElevationsApi

WORKDIR /ElevationsApi
# ADD ./config.json /ElevationsApi/

RUN npm install

# Bundle app source
# COPY . /usr/src/app

EXPOSE 3000
CMD [ "node", "server.js" ]

#$ docker build -t <your username>/node-web-app .
#$ docker build -t plzpeacez/node-elevation .

#$ docker run -p 49160:8080 -d <your username>/node-web-app
#$ docker run --name elevation -p 80:3000 -dit plzpeacez/node-elevation