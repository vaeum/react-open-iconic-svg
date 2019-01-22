default:

clean:
	rm -rf lib
	rm -rf dist
	rm index.js

build:
	make clean
	touch index.js
	npm run build
	npm run transpile
	npm run transpileIndex

publish:
	npm run pub
