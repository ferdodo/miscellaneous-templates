from node


# CoffeeScript
RUN npm install -g coffeescript


# node_modules
WORKDIR /coffeescript-testing-template
COPY npm-shrinkwrap.json .
COPY package.json .
RUN npm install
RUN npm audit
RUN npm outdated


# build
COPY index.coffee .
RUN coffee -c index.coffee


# startup
CMD node .