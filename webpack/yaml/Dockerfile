from node


# http-server
RUN npm install http-server -g


# node_modules
WORKDIR /project
COPY package.json .
COPY npm-shrinkwrap.json .
RUN npm install
RUN npm audit
RUN npm outdated


# copy sources
COPY src src
COPY dist dist
COPY webpack.config.js .


# build
RUN npx webpack --mode=development


# serve dist
CMD http-server dist