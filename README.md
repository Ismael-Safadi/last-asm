# last-asm
this is last assignment wow ^_^

# Using  
- npm install express 
- npm start 
- make sure that file 'package.json' will be exists on the same directory includes the following 
```
{
  "name": "build",
  "version": "1.0.0",
  "scripts": {
    "start": "node build.js"
  },
  "dependencies": {
    "express": "^4.17.1"
  }
}

```
- now your application is ready 
# Testing 
- you can test it using Postman API or you can use curl 
-  For POST using this command 
```
curl -X POST -H "Content-Type: application/json" \
    -d '{"name": "Ismael"}' \
    https://127.0.0.1:3006/data
```
-For get use the following command 
```
curl -X GET \
  -H "Content-type: application/json" \
  -H "Accept: application/json" \
 
  "https://127.0.0.1:3006/greeting/Ismael"
```
