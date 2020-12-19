

up: down build
	docker run -d --name template-electron -p 32153:8080 template-electron


build:
	docker build . -t template-electron


down:
	-docker stop template-electron
	-docker rm -v template-electron