from node
WORKDIR /typescript-node


# node_modules
COPY package.json .
COPY npm-shrinkwrap.json .
RUN npm install
RUN npm outdated


# src
COPY src src 


# build
COPY webpack.config.js .
COPY tsconfig.json .
RUN npm run build
RUN ls -lh app


# run
CMD node app