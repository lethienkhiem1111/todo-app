FROM node:12.16-alpine

WORKDIR /app/
ADD package.json .
RUN yarn install --production=true
ADD src ./src
CMD [ "yarn", "serve" ]
EXPOSE 3000