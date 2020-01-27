test:
	docker build . -t selenium-testing
	docker run --name selenium-testing selenium-testing
	docker stop selenium-testing
	docker rm -v selenium-testing