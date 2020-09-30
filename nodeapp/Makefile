# omitting .PHONY
dist: node_modules
	# 🥤️ Running Gulp to generate the package file (though we can achieve it only by linux commands)
	npx gulp contents
	npx gulp tgz
	cp -v dist/*.tar.gz ../docker
node_modules:
	# 💬 Installing Dependencies
	node -v
	npm -v
	npm i
	# NOTE: --only=dev doesn't install all dev-dependencies
	npx gulp -v
start:
	npm start
test:
	curl http://localhost:3000
clean:
	rm -fr node_modules dist tmp