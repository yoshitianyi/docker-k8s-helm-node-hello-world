# omitting .PHONY
gulp-setup:
	@echo "💬 Installing DevDependencies"
	node -v
	npm -v
	npm i --only=dev
	npx gulp -v
tgz-build:
	@echo "🥤️ Running Gulp to generate the package file"
	npx gulp contents
	npx gulp tgz
	cp -v dist/*.tar.gz ../docker