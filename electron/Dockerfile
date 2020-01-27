from node
WORKDIR /electron


# http-server
RUN npm install -g http-server


# node_modules
COPY package.json .
COPY npm-shrinkwrap.json .
RUN npm install
RUN npm audit
RUN npm outdated


# src
COPY index.html .
COPY index.js .


# build
RUN npx electron-builder .


# serve dist
RUN tar cf dist.tar dist
RUN mv dist.tar dist
CMD http-server dist