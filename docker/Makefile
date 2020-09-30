# omitting .PHONY
docker-build:
	docker build -t example-app .

docker-run:
	docker run -d -p 8080:3000 example-app

docker-up:
	docker-compose up -d

docker-ps:
	docker ps -a
	docker-compose ps

docker-logs:
	docker-compose logs --follow --tail=all

test:
	curl http://localhost:8080