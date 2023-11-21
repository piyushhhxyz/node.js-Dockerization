FROM node:20

WORKDIR /app

COPY package* .
RUN npm i


# push source code to the end
# beacause your source code changes the least.
COPY . .

EXPOSE 8000
CMD ["node", "index.js"]
