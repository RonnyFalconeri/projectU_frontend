FROM node:12 as build
RUN apt-get update && \
    apt-get install -y openjdk-8-jdk && \
    apt-get clean
RUN apt-get update && \
    apt-get install ca-certificates-java && \
    apt-get clean && \
    update-ca-certificates -f
ENV JAVA_HOME /usr/lib/jvm/java-8-openjdk-amd64/
RUN export JAVA_HOME
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . ./
ARG configuration=production
RUN npm run build -- --outputPath=./dist/out --configuration $configuration


FROM nginx
COPY --from=build /app/dist/out/ /usr/share/nginx/html
COPY /nginx-custom.conf /etc/nginx/conf.d/default.conf
EXPOSE 80

ENTRYPOINT ["nginx","-g","daemon off;"]
