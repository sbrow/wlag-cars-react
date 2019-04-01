from node

COPY package.json .
COPY package-lock.json .

RUN npm install

COPY . .

ENV PROXY=localhost:3001
CMD ["npm", "start"]