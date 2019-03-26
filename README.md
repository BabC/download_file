# download_file
Download a simple file with a nodeJS server, through a basic auth. Set everything in a docker container

# Commands
## Local
$ npm install
$ npm start

## Docker
$ docker build -t download .
$ docker run -p 3000:3000 -d download
