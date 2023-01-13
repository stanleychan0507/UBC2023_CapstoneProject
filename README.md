## Setup

For first time setup, please first install `Docker Desktop` on your system. 

Next, open your terminal and navigate to the root directory of the project(rosen folder). Then, execute:

```console
docker-compose build
```
Note: For first time set up the process of building is quite slow

When set up is complete, execute:

```console
docker-compose up
```
Front-end will be located at `localhost:3000` and Back-end at `localhost:5000`

For subsequent start ups of docker after initial set up simply execute:

```console
docker-compose up
```
## For the AI
1. [Pandas](https://pypi.org/project/pandas/)
```console
pip install pandas
```

1. [SKlearn](https://scikit-learn.org/stable/install.html)
```console
pip install -U scikit-learn
```