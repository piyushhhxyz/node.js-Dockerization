FROM ubuntu


# layer-caching common installs
RUN apt-get update
RUN apt-get install -y curl
RUN curl -sL https://deb.nodesource.com/setup_18.x | bash -
RUN apt-get upgrade -y
RUN apt-get install -y nodejs

WORKDIR /app

COPY package.json package.json
COPY package-lock.json package-lock.json

RUN  npm i

# cach-layer ordering 
# as for these npm i not need not be invoked -> caching optimised
COPY index.js index.js

ENTRYPOINT [ "node", "index.js" ]