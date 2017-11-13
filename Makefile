default:
	rm -rf dist
	mkdir dist
	cd node_modules/open-iconic/svg && ../../.bin/svgtoreact dir -o ../../../dist
	./node_modules/.bin/babel dist -d dist
