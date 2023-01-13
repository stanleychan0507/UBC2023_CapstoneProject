## Setup

For first time setup, please install `Docker Desktop` on your system. 

Next, go to the root directory of the project which is the rosen folder. Then, execute:

```console
docker-compose build
```
Note: For first time set up the process of building is quite slow

When building is done execute:

```console
docker-compose up
```
Front-end will be located at `localhost:3000` and Back-end at `localhost:5000`

For subsequent start ups of docker after initial set up simply execute:

```console
docker-compose up
```