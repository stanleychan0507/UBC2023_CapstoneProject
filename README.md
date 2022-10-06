# ROSEN-C

# Agile Software Development Method
We have look into three types of Agile Development Methods : Scrum, Kanban, Lean. //
With Scrum and Lean, they are both great as a management approach with Scrum being efficient, and Lean being calculative. However, it is difficult for us to implement these two approaches since we don't have a concrete goal for this project yet. Therefore, we will look for a method that is more adaptive and flexible to implement.

So we concluded that, Kanban would be our best choice.

We also noted that the "Scrumban" method, which is a combination of Scrum and Kanban would be a benefitial for our project. We might consider this approach as our project unfolded.

## Tech stack
|Front-end|Pros|Cons|
|---|---|---|
|Dash (Preferred)|•Perfect for Dashboarding and data visualization<br>•Good callback debugger<br>•Highly scalable|•Does not really have any disadvantages as dash is written for data scientists|
|React|•Good for Dynamic web pages <br>•Components are reusable<br>•Ease of testing|•React evolves quickly<br>•Lacks proper documentation<br>•Lacking in features for a framework|
|Vue|•Lightweight with reliable performance<br>•Good documentation<br>•Supports two-way bindings|•Lack of libraries compared to other frameworks<br>•Difficulty in scaling|

|Back-end|Pros|Cons|
|---|---|---|
|Django|•Can be used for both front-end and back-end<br>•Built with scalability in mind<br>•Ready to use and customizable admin features|•It is not ideal for small projects with minimal features<br>•Steep learning curve<br>•Unable to handle multiple requests simultaneously|
|ExpressJS|•Capable of handling multiple requests<br>•Customizable<br>•Quick deployment|•Not ideal for CPU intensive work<br>•Lacks standardization<br>•Lacks support for asynchronous errors|
|Flask|•light-weight framework<br>•Suitable for small projects<br>•Customizable|•Does not have built-in support for basic database system<br>•Slow deployment of minimum viable product<br>•Limited community support|

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

## Active Learning Algorithm

## Functional Requirement

## OpenCV
### How to download.
#### Prerequisites
The user will need the following : 
- C++ compiler and build tools, Visual Studio IDE is fine.
- Install CMaker from the official site or some other source.
- Windows, macOS, Linux, BSD and Android.

### Download link and steps
The download link is [here](https://github.com/opencv/opencv/releases). <br>
- The user will download the "sourcecode.zip" from the version they desired.
- Then, the user will need to configurate in cmd : "cmake -G`<generator`> `<configuration-options`> `<source-directory`>". This command allows cmake to verify all necessary tools are avaialable and compatible, it will then generate intermediate files for the chosen build system.
