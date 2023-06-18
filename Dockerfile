FROM node:12
WORKDIR /app
COPY package*.json ./
RUN npm i --omit=dev
# copy local code to working directory:
COPY . .
ENV PORT=8080
RUN npm run build

EXPOSE 8080
# forward-bucksaw-386801

CMD npm start
 