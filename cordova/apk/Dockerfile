from node

ENV ANDRDOID_TOOLS_VERSION r25.2.5
ENV ANDROID_API_LEVELS android-28
ENV ANDROID_BUILD_TOOLS_VERSION 28.0.3 
ENV GRADLE_HOME /opt/gradle-4.4
ENV GRADLE_VERSION 4.4


# install java
ENV JAVA_HOME /usr/lib/jvm/java-1.8.0-openjdk-amd64
RUN apt-get update && apt-get install curl openjdk-8-jdk -y


# install cordova
RUN npm install -g cordova


# install graddle
WORKDIR /opt
RUN wget -q https://services.gradle.org/distributions/gradle-${GRADLE_VERSION}-bin.zip
RUN apt-get update && apt-get install unzip
RUN unzip -q gradle-${GRADLE_VERSION}-bin.zip


# install android
WORKDIR /opt/android-sdk-linux
ENV ANDROID_HOME /opt/android-sdk-linux
RUN wget -q https://dl.google.com/android/repository/tools_${ANDRDOID_TOOLS_VERSION}-linux.zip
RUN unzip -q tools_${ANDRDOID_TOOLS_VERSION}-linux.zip
ENV PATH ${GRADLE_HOME}/bin:${JAVA_HOME}/bin:${ANDROID_HOME}/tools:$ANDROID_HOME/platform-tools:$PATH
RUN echo y | android update sdk --no-ui -a --filter platform-tools,${ANDROID_API_LEVELS},build-tools-${ANDROID_BUILD_TOOLS_VERSION}


# do a first build to speed up the next builds
WORKDIR /
RUN cordova create MyApp 
WORKDIR /MyApp
RUN cordova platform add android
RUN cordova build --release


# install http-server
RUN npm install http-server -g


# sources
COPY src /src


# build
WORKDIR /src
RUN cordova platform add android
RUN cordova build --release


# sign
WORKDIR /sign
RUN printf "aaaaaa\naaaaaa\n\n\n\n\n\n\nyes\n\n" | keytool -genkey -v -keystore my-release-key.keystore -alias alias_name -keyalg RSA -keysize 2048 -validity 10000
RUN echo "aaaaaa" | jarsigner -verbose -sigalg SHA1withRSA -digestalg SHA1 -keystore my-release-key.keystore /src/platforms/android/app/build/outputs/apk/release/app-release-unsigned.apk alias_name


# distribute on webserver
CMD http-server /src/platforms/android/app/build/outputs/apk/release/