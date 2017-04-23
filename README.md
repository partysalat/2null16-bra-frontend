# Overjizzle bra frontend


## Technologies in use:

- Hapi + some plugins, jade 
- angular 1.5

## How to start:
### Install
```
npm i
```

### Start locally (minified assets)
```
npm i
npm run start # production compilation, do NOT use this for running on a server
```

### How to build frontend assets (minified ass):
```
npm run build 
```


### Development Mode with watchers:
```
npm run watch
```
Then go to http://localhost:3000 


### Features:
- webpack + gulp for building frontend assets
- file watch and browser sync 
- build production code
- source maps


Things to do:
- add css compilation
- eslint
- automated testing setup (unit browser/server, integration, functional, contract-driven testing)
  - ava
  - enzyme
- tests (for general use case: jasmine, karma)
- logger (winston)
- config management (confidence) 