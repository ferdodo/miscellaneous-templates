from node
RUN npm install -g cordova
COPY src /src
WORKDIR /src
RUN cordova platform add browser
CMD cordova run browser 