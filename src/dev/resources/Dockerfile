# base image
FROM node:12.2.0

# install chrome for protractor tests
RUN wget -q -O - https://dl-ssl.google.com/linux/linux_signing_key.pub | apt-key add -
RUN sh -c 'echo "deb [arch=amd64] http://dl.google.com/linux/chrome/deb/ stable main" >> /etc/apt/sources.list.d/google.list'
RUN apt-get update && apt-get install -yq google-chrome-stable

# set working directory
WORKDIR /CoETechTraining-Web/src/dev/resources/

# add `/co-etech-training-web/node_modules/.bin` to $PATH
ENV PATH /CoETechTraining-Web/src/dev/resources/node_modules/.bin:$PATH

# install and cache co-etech-training-web dependencies
#COPY /var/lib/jenkins/workspace/WebAppCICD/src/dev/resources/package.json /CoETechTraining-Web/src/dev/resources/package.json
COPY package*.json /CoETechTraining-Web/src/dev/resources/
RUN npm install
# may need to update version depending on what version of angular dev wants to use
RUN npm install -g @angular/cli@7.3.9
RUN npm install ngx-scroll-event
RUN npm install highcharts

# add the co-etech-training-web
COPY . /CoETechTraining-Web/src/dev/resources

# app will run on port 3000
EXPOSE 3000

# start the co-etech-training-web on localhost 4200
CMD ng serve --host 0.0.0.0
