## install dev dependencies

```shell
git init -y
```

```shell
npm install mocha chai --save-dev
```
## edit package.json

### add type module

### edit script test

```json
{
  "name": "3_phoneprojectmocha",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "type":"module",
  "scripts": {
    "test": "mocha"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "chai": "^5.1.1",
    "mocha": "^10.7.3"
  }
}
```
