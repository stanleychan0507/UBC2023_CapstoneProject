<img align="right" src="Images/UBC_logo.png" width=80> <br>
<img align="right" src="/Images/RosenLogo.png" width=150>

<br>
<br>

## COSC 499 - Rosen Project - Group C
This GitHub repository documents contain the Computer Science Capstone project between the Rosen Group company, and a group of three students from University of British Columbia. <br>

The project is part of the Cosc 499 - Capstone Software Engineering Project class, which allows students to experience the life cycle  of a Computer Science project in real life setting, which includes : Working with real clients, meeting clients needs, planning from start to finish, and reporting to clients in a weekly manner. The project is delivered to our client on 20th April, 2023. 

## 1. Installation
- **1a.** As a prerequisite for the project, make sure the device has the following installed : 
  - Docker
- **1b.** Install [Docker Desktop](https://www.docker.com/products/docker-desktop/) on your system.
- **1c.** Install [Microsoft C++ Build Tools](https://visualstudio.microsoft.com/visual-cpp-build-tools/) for 
DeepImageSreach
- Note that as DeepImageSerach is an actively updated library, changes might happens since the day of this documentation. For more information refers to the [DeepImageSeach on Github](https://github.com/TechyNilesh/DeepImageSearch)
## 2. Getting started
- **2a.** Open your terminal and navigate to the root directory of the project, this can be done by typing into the console.
```console
cd rosen
```
- **2b.** Then, execute the build up of docker. Note that the process of building might take times depends if downloading new updates is needed. User can track the build up progress in console.
```console
docker-compose build
```
- **2c.** When set up is complete, execute:
```console
docker-compose up
``` 
- **2d.** Front-end will be located at `localhost:3000` and Back-end at `localhost:5000`. To view the project, user can type http://localhost:3000/ on browser, preferably Google Chrome. The project will then display as below : 
<img src="/Images/ProjectView.png">

## Project Description
Object detection is one of the hot topic in computer science now. As it can be used for various applications such as autonomous vehicles, tracking of targets and security.
Our project is to develop an image classifications system alongside a web application. The system should able to vectorize 150,000 - 2,000,000 frames worth of videos into images. These vectorized images will send to an active learning algorithm that is able to detect the similar images in regard to each frame.  

## Tech Stack
### Front End : <br> <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB"> <!---React--> <br>
### Back End : <br> <img src="https://img.shields.io/badge/Flask-000000?style=for-the-badge&logo=flask&logoColor=white"> <!---Flask-->
### Language
<img src="https://img.shields.io/badge/Python-FFD43B?style=for-the-badge&logo=python&logoColor=blue"> <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white"> <img src="https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E"> 
### Other techs involved : <br>
<img src="https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white"> <!---Bootstrap-->
<img src="https://img.shields.io/badge/TensorFlow-FF6F00?style=for-the-badge&logo=tensorflow&logoColor=white"> <!---TensorFlow-->
<img src="https://img.shields.io/badge/Docker-2CA5E0?style=for-the-badge&logo=docker&logoColor=white"> <!---Docker-->


## Future Work
There are some works for this project that can be carry out for future works :
- **1. Interface** The current system has a minimalistic interface for its functionality. In the future, Rosen could add more features to make it more user-friendly.
- **2. Bug(Meta Folder)** An error can occur if the metadata folder is not placed back into the video folder due to another error that may happen during image matching.
- **3. Bug(Accuracy for timestamps)** The timestamp calculation could be improved in the future to work with the corresponding video's frames per second (fps).
- **4. Training of the model** The project is based on the DeepImageSearch library, which does not require algorithm training. However, having a machine learning model that can be trained may potentially provide more accurate results for similar image detection.
















