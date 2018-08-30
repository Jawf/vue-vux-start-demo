FROM daocloud.io/library/nginx:latest
RUN rm -r /usr/share/nginx/html/*
COPY vue-vux-start-demo/dist /usr/share/nginx/html
EXPOSE 80

