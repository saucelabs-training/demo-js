FROM node:16
WORKDIR /demo-js
COPY ./webdriverio/webdriver/best-practices/package*.json /demo-js/webdriverio/appium-app/best-practices/
RUN cd /demo-js/webdriverio/appium-app/best-practices && npm install
COPY ./webdriverio/webdriver/best-practices/ /demo-js
