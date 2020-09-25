# omitting .PHONY
docker-build:
	docker build -t hello-world .

docker-run:
	docker run -d -p 8080:3000 hello-world

test:
	curl http://localhost:8080