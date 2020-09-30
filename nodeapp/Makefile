# omitting .PHONY
dev-dep:
	# 💬 Installing DevDependencies
	node -v
	npm -v
	npm i
	# NOTE: --only=dev doesn't install all dev-dependencies
	npx gulp -v
package:
	# 🥤️ Running Gulp to generate the package file (though we can achieve it only by linux commands)
	npx gulp contents
	npx gulp tgz
	cp -v dist/*.tar.gz ../docker
clean:
	rm -fr node_modules dist tmp