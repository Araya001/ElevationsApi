FROM tutum/lamp:latest

RUN rm -fr /app && git clone https://github.com/plzpeacez/ElevationsApi.git /app

EXPOSE 80 3306

CMD ["/run.sh"]

#docker build -t username/my-lamp-app .
#docker build -t plzpeacez/my-lamp-app .
#And test it:

#docker run -d -p 80:80 -p 3306:3306 username/my-lamp-app
#docker run --name lamp-app -d -p 80:80 -p 3306:3306 plzpeacez/my-lamp-app
#Test your deployment:

#curl http://localhost/
#That's it!