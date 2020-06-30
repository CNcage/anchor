.PHONY: env run
.DEFAULT: env

env:
	npm install -D && cd client && npm install -D
	
run:
	npm run dev