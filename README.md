# The Sound of Chaos

### Table of Contents
<h3>Project Idea</h3>
<p>Concept</p>
<p>Context of use</p>

<h3>Structure</h3>
<p>Flocking</p>
<p>Upload</p>

<h3>Challenges</h3>
<p>Design Challenge</p>
<p>Coding Challenge</p>

<h3>Team and Credits</h3>


## 1. [PROJECT IDEA](#project-idea)

### a. Theme

Enchantment and Metamorphosis.

### b. Aim / goal

To celebrate the chaos within us through a collective experience.

### c. Concept

The concept of this project reinterprets two of VISAP 2020’s themes: Metamorphosis and Enchantment. After doing some research about the themes, we found an interesting quote from the first book of Ovid’s Metamorphosis:

“The Esiodean Chaos doesn't exist since
always: it manifests itself suddenly
and persists, even after the divine
beings have developed, as a background
space, a black hole of the universe.”

This is the reason why the project took a precise path in what is considered a metamorphosis: chaos. Chaos is meant to be understood as the forgotten parent of reality and humans as its children. Usually chaos is seen as a negative connotation, so we thought we could make it appealing and enchanting to see instead. The tendency of chaos still morphs itself inside the mind of every one of us, expanding inside of our synapsis and manifesting in infinite ways, such as art. So why shouldn’t we share it and, above all, celebrate it?

The main goal of this project is creating a visualization as a whole of the subjective expression of everyone’s inner Chaos through audio. The means of expression that we chose is audio because the sound of our voice is unique and easily recognizable. In addition to this, it’s the perfect medium for a collective result. Our project allows the user to record a message, a sound, a scream, a song... Whatever is intended to communicate to the world. His voice will then turn into a point of light, unrecognizable, in the middle with the chaotic expressions of all other users.
Testimonials from all users will be displayed inside of a generative vortex that will update whenever a new interaction occurs.


### d. Context of use

This project was created in function of an installation, so it must be enjoyed within an exhibition, a museum or a social event. "The Sound of Chaos" is a cultural mediation between the public who participates in the experience, the philosophical concepts expressed by Ovid in Metamorphosis and technology. It is an aggregative project which is designed to be experienced in a place where you can enjoy a simultaneous practice, and therefore in a context of social interaction that expresses immediately the concept of collectivity inherent in our project. Part of the website will be displayed on large immersive screens, while the pages the user can interact with will be displayed on tablets, which are intuitive and easy to use.

<img width="2599" src="https://user-images.githubusercontent.com/90723641/153577282-bda0a9a7-b23c-4b4f-9063-3a167bac58d7.png" style="width:415px;height:auto;">

<br></br>

## 2. [STRUCTURE](#structure)

<h2>Homepage</h2>

<h3>Flocking</h3>

The flocking page is the visualization of all the audio files collected from the users and transformed into particles. This page is supposed to be seen only on the big screen in the exhibition. The aim of this page is to create a representation of chaos in a “chaotic” way but at the same time keep it clean and enchanting to see. 
![home](https://user-images.githubusercontent.com/90723641/153576462-1f7e0ebf-c26c-4e48-b5ca-b66be4442636.jpeg)


<h3>Upload</h3>

The upload page is the one where the user can interact with what he sees on the screens. This page is meant to be surfed by a tablet and to facilitate the usability of the website, it maintains a very simple visual structure. In the center of the page, there’s a “bursting” of red light, which represents one of the particles of flocking. This particle visually renders the sound, changing shape and increasing its size according to the volume of voice it records in the room. By clicking on the bursting once, the user can start recording audio. To stop recording, the user simply has to click a second time on the bursting. By clicking one last time the user can listen again and send his voice memo to the chaos vortex of flocking. In this way, his voice will join the other ones that were recorded before him, and he will experience a transformation from a single entity to being part of a collective. The user will be guided through this page by instructions given by the website itself.

<img src="https://user-images.githubusercontent.com/90723641/153576489-acdf6ced-a6b1-4da4-a931-3790ab3f5b10.jpeg" style="width:515px;height:auto;">

<br></br>


## 3. [CODE](#code)
<h2>Design Challenges</h2>

For this project we decided to keep a simple color palette. 
The background is black to make the user feel spaced out, a feeling of emptiness, before the arrival of chaos. Since antiquity, red has symbolized blood and both physical and mental vitality. Red is intended to unconsciously bring the user back to a primordial contact with his ego, referring also to the passage of man from ethereal and immaterial being to man in flesh and blood. This is exactly the role that Ovid attributes to Chaos in the "Metamorphosis", which is the generating force of the universe.

<img width="783" alt="Risorsa 4" src="https://user-images.githubusercontent.com/90723641/153577689-17fec3ce-a8fe-4f3e-9161-15ef8482f0c8.png" style="width:215px;height:auto;">


Also for the font, we didn’t choose anything too intrusive. The text is in Apfel Grotezk, a swiss inspired font created by a collective of young designers called Collletttivo. As for the logo, we chose to create a geometric circular shape that contrasts with the other organic elements of the site. The only common feature of the logo, flocking and bursting is the movement, slow and incessant, which represents the becoming and change narrated by Ovid.

<img src="https://user-images.githubusercontent.com/90723641/153576594-def14bcb-bf9b-4cfb-8413-5ed55ae05ec5.jpeg" style="width:215px;height:auto;">

The design chosen to represent the recording of the user is a kind of bursting, an organic shape that is not precisely defined, to give even more the idea of the creation of something. Also, the continuous change of the bursting represents, even more, the essence of the man in the chaotic world that we’re trying to communicate.

To represent the visualization of the altogether result, we chose the flocking. From the perspective of the mathematical modeller, "flocking" is the collective motion by a group of self-propelled entities. We thought there was no better way to represent this collective movement of individual voices.

<h2>Coding Challenges</h2>

The two main things that we had to code were the counter of the files uploaded and the creation of the particles.

First of all, we created a variable (num) to count every single audio file that has been uploaded and transform them into a particle of the flocking. We used the getItem() method and a for cycle to actually create a new particle for every audio file uploaded in a random position on the screen.

<img src="https://user-images.githubusercontent.com/90723641/153576190-c14f10f9-b320-46b9-80f6-0a54f39e4a0f.png" style="width:615px;height:auto;">

We also used a for cycle to create and reproduce the audio files uploaded by the users.

<img src="https://user-images.githubusercontent.com/90723641/153576044-d7698e41-2596-49ec-b031-572e1519eb37.png" style="width:615px;height:auto;">


Regarding the actual flocking, the function flock() was created using the for cycle that was written previously in the set up function, but this time we added movement. For each audio file (num), a particle was created at random points on the screen. To add randomness but at the same time harmony, we created a “noise” variable by multiplying the position of the particles and the frame count by a constant variable (noiseScale). Then we used it to determine the angle of the movement of the flocking by multiplying it by 2*pi (TAU).

<img src="https://user-images.githubusercontent.com/90723641/153575900-ea6112ab-084d-4125-8da4-9752780d53bd.png" style="width:615px;height:auto;">



### Team

<img src="https://user-images.githubusercontent.com/90723641/153575164-37a81f2b-a0c5-4291-a92c-83475d617d96.png" style="width:500px;height:auto;">

### Faculty

Draw With Code: Creative Coding 2021/2022 
<br>Politecnico di Milano – Design della Comunicazione</br>
a.a. 2021-2022

Michele Mauri
Andrea Benedetti
Tommaso Elli
