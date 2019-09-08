

default:


up: down build
	docker run -d --name coffeescript-testing coffeescript-testing


build:
	docker build . -t coffeescript-testing


down:
	-docker stop coffeescript-testing
	-docker rm -v coffeescript-testing