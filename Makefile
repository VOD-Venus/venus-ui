PACKAGE_MANAGER = pnpm
NVM = nvm

all: build

nvm:
	. ${NVM_DIR}/nvm.sh && nvm use && $(CMD)

deps:
	make nvm CMD="$(PACKAGE_MANAGER) i"

dev:
	make nvm CMD="$(PACKAGE_MANAGER) dev"

clean:
	rm -rf dist

build: clean
	make nvm CMD="$(PACKAGE_MANAGER) i && $(PACKAGE_MANAGER) build"

cp: build
	cp -a dist/* ../venus/public

.PHONY: all
