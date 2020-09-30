# omitting .PHONY
docker-build:
	docker build -t example-app .

docker-run:
	docker run -d -p 8080:3000 example-app

test:
	curl http://localhost:8080