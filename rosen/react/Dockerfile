FROM node

WORKDIR /app
COPY ./package.json /app/
ENV NODE_ENV=development
RUN npm install
RUN npm install react-loading
ENV PATH /app/node_modules/.bin:$PATH

WORKDIR /app/react/
COPY . /app/react/

EXPOSE 3000

CMD [ "npm", "start" ]
