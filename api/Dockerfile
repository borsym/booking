# base image
FROM node:19.6.0-alpine

# set working directory
WORKDIR /opt/code

# add `/usr/src/app/node_modules/.bin` and `/usr/local/bin` to $PATH
ENV PATH /usr/local/bin:/opt/code/node_modules/.bin:$PATH

# install and cache app dependencies
COPY package.json /opt/code/package.json
RUN apk add --no-cache --virtual .gyp python3 make g++ && \
  npm i && \
  apk del .gyp

# start app
CMD ["npm", "start"]
