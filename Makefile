mongo:
	docker run --name mongodb -p 27017:27017 -d mongo:latest

mongoshell:
	docker exec -it mongodb mongosh

mongoversion:
	docker exec -it mongodb mongod --version
