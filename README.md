# ROSEN-C

# Agile Software Development Method
We have look into three types of Agile Development Methods : Scrum, Kanban, Lean. //
With Scrum and Lean, they are both great as a management approach with Scrum being efficient, and Lean being calculative. However, it is difficult for us to implement these two approaches since we don't have a concrete goal for this project yet. Therefore, we will look for a method that is more adaptive and flexible to implement.

So we concluded that, Kanban would be our best choice.

We also noted that the "Scrumban" method, which is a combination of Scrum and Kanban would be a benefitial for our project. We might consider this approach as our project unfolded.

## Tech stack
|Front-end|Pros|Cons|
|---|---|---|
|Dash (Preferred)|•Perfect for Dashboarding and data visualization<br>•Good callback debugger<br>•Highly scalable|•Does not really have any disadvantages as dash is written for data scientists|•Built on top of Flask and Peact.js and Plotly.js|•All code is in python|
|React|•Good for Dynamic web pages <br>•Components are reusable<br>•Ease of testing|•React evolves quickly<br>•Lacks proper documentation<br>•Lacking in features for a framework|
|Vue|•Lightweight with reliable performance<br>•Good documentation<br>•Supports two-way bindings|•Lack of libraries compared to other frameworks<br>•Difficulty in scaling|

|Back-end|Pros|Cons|
|---|---|---|
|Django|•Can be used for both front-end and back-end<br>•Built with scalability in mind<br>•Ready to use and customizable admin features|•It is not ideal for small projects with minimal features<br>•Steep learning curve<br>•Unable to handle multiple requests simultaneously|
|ExpressJS|•Capable of handling multiple requests<br>•Customizable<br>•Quick deployment|•Not ideal for CPU intensive work<br>•Lacks standardization<br>•Lacks support for asynchronous errors|
|Flask|•light-weight framework<br>•Suitable for small projects<br>•Customizable|•Does not have built-in support for basic database system<br>•Slow deployment of minimum viable product<br>•Limited community support|

## Machine Learning algorithms
|Algorithms|Pros|Cons|
|---|---|---|
|Google AutoML|•Easy to use|•Model train time caps at 1 hour for free users|
|Keras(VGG16)|•High accuracy in image classfication|•Requires a lot of training data|
|Keras(Resnet50)|•Faster and more accurate than VGG16|•It has deeper network so requires longer training time<br>•Requires a lot of training data|
|SKLearn(Support Vector Machine)|•Works well with high dimensional data|•Does not perform well when there is a lot of noise in dataset|
|Self-written|•Gain knowledge in machine learning<br>•Specific to client's need|•Time consuming<br>•Might not be as efficient<br>•Outside of skill set|

## Blender

This is a summary version of the documentation we have. For a detail documentation checkout repository : "OtherNotes->Cosc499_ROSEN_C_Blender.pdf". <br>
Blender has a few notable functionalities as stated on the Blender official website, includes : <br>
- Animation and Rigging.
- Drawing 2D in 3D
- Build your own models.
- Python API

### How to download.
The download link is [here](https://www.blender.org/download/). <br>
- Follow the link below, any users with Windows, macOS and Linux will be able to download Blender. <br>
- At this document of time(5 Oct 2022), Blender is at version 3.3. <br>
- The user will download an installer first, select the file location, and proceed to download the application. <br>

## OpenCV
OpenCV is a computer vision and machine learning software library. We will be using this for image recognition with contextual information added. <br>
A step-by-step tutorial of openCV with Python can be found [here](https://www.youtube.com/watch?v=WQeoO7MI0Bs&t=4152s)
### How to download.
#### Prerequisites
The user will need the following : 
- C++ compiler and build tools, Visual Studio IDE is fine.
- Install CMaker from the official site or some other source.
- Windows, macOS, Linux, BSD and Android.

#### Download link and steps
The download link is [here](https://github.com/opencv/opencv/releases). <br>
- The user will download the "sourcecode.zip" from the version they desired.
- Then, the user will need to configurate in cmd : `cmake -G<generator> <configuration-options> <source-directory>`. This command allows cmake to verify all necessary tools are avaialable and compatible, it will then generate intermediate files for the chosen build system.
- After that, the installation will be prompted by `cmake --build <build-directory> --target install <other-options>` 

## Active Learning Algorithm

## Functional Requirement

1. Web application for classification task that presents classified and to be classified images.
1. Active learning algorithm implementation, following the principles of clean code.
1. Source code integrated in a private source code management system (e.g. GitHub, Gitlab). Including configuration and installation documentation.
1. Data storage system for vectors (codes) that are used by the active learning algorithm and a storage system for the images.
1. Workflow that encodes the images from a given generated water pipeline inspection and stores the codes and images.
1. Performance tests for the time needed for one step of the active learning process.
1. Software architecture and technical documentation.
1. Enhanced water pipeline inspection generator (optional).
1. Classification performance for self-defined classification tasks (optional).



## Non Functional Reequirments

1. The system shall be quick when getting information in the data-base
1. The system shall be able to have proper python coding standard
1. Will be formatted with black and pylint. 
1. Github having proper repositories.
1. The system should be user friendly for data scientists.
1. Providing a storyboard and negotiating with our client..

# Milstones 
## Milestone 1 (October 21) 
  Finish documentation
## Milestone 2(December 02) 
Finish GUI 
## Milestone 3(February  23) 
Functional Web Interface & Optomized Machine learning
## Milestone 4(April  04)
Project Refinnement

## Testing
### Front-end
- For front-end, we will utilize Dash’s end-to-end test and unit test. The former ensures that the user’s experience with the website is smooth, and the latter ensures that callback outputs are as expected. 

### Back-end
- For back-end, we will conduct unit tests and integration tests with pytest-flask. Integration tests allow us to check if components are working together as an entity.  

### Test plan
We will conduct regression testing in our software development lifecycle to ensure that the integrity of the software is preserved. 


