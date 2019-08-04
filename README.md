# Prodyna Coding Challenge

This project was created as part of an iterview for company Prodyna, position Javascript developer. The project is built using Javascript framework Angular 2+, providing model for all features required by the task and more. Using this model we can do several operations:

  - Get all post from external API in case of this project https://jsonplaceholder.typicode.com/ was used as the provider.
  - Remove any post or expand its body for more information.
  - Infinitive scroll is also implemented without using external libraries.
  - Create post
  - Spinner is added for service calls.

### Content
* [Technology Description](#technology-description)
* [Project](#project)
  * [Structure](#structure)
  * [Solutions](#solutions)
  * [Issues](#issues)
* [Production](#production)

## Technology Description

**`Angular`** was used due to its typed nature, combined with a huge set of already provided libraries which give solid structure and make it very easy for people to understand. 

**`Bootstrap`** was used for styling and general look of this project.

## Project

#### Stucture

Structure of project is being split into folders each representing certian functionality, those folders are:
* entities
  * post
    * **`post.model.ts`**
    * **`post.service.ts`**
* layouts
  * header
  * navbar
* pages
  * about
  * home
  * posts
  * technical-support
* util
  * error-page
  * pipes
  * **`message-emmiter.service.ts`**
  * **`routing.module.ts`**
  * **`util.module.ts`**
  
  
 ##### Entities folder
In this folder we have also folder posts. 'posts' folder contains posts model and service.
<br>
<br>
**post.model.ts** Post model with it's properties
<br>
**post.service.ts** Service implementation for post with following options:
  * Get all posts
  * Get all posts by user id
  * Create post
  * Delete post

##### Layout folder
In this folder we have navigation an header components. Navigation component, combined with **`Angular Router`** it main task is as name suggest is navigation. Header have only name of current page and link to technical-support component. Header could have more important role for example for functionalities for currently logged user.

##### Pages folder
In this folder we have main components. It have four of them **`about`**, **`home`**, **`post`** and **`technical-support`** component.
This is good practice to separate main pages, inside folder instead of root folder because our app could grow much bigger and we couldn't manage our components very well.

##### Util folder
This folder contain services and pipes that we can use anywhere in app. The idea is to create modularity. Also we have **util.module.ts** to unload registration of component in main **app.module.ts**


#### Solutions
1. List all the posts, every post should be and expandable.
* Here basic service is used which is called in **`onInit`** method and will fetch and populate this data to be shown to the user. Logic to hide and show posts is being implemented using a simple function to toggle content by changing visibility.
2. Implement keyword search.
* This was implemented using pipe, logic is simple it check if anything was typed in the search bar and if true it uses the filter on an array of posts checking if title exists in an array and showing only data in an array that match criteria.
3. Create a form for adding post to list with basic validation.
* Form for this is created and contains validation with a clear visual representation. 
4. Remove posts.
* This is implemented by taking an index of the post and then slicing it since we do not have proper API to use this dynamically. Delete is also visible instantly.
5. Implement loading spinner
* For this external library is used ngx-spinner more info on this link: https://www.npmjs.com/package/ngx-spinner, it is shown when loading posts but due to the speed of connection that can be very short.
6. Infinitive scroll
* This was implemented using **`HostListener`** witch created event **`scroll`** that was called once we started scrolling on div taking and calculating its heigth and once we come to bottom of div then service is called and 20 more entities are being added etc...


#### Issues

When filtering post delete of post is not working, this is due to logic implemented because when filtering posts array positions change and that is causing this problem due to lack of time and job responsibilities this would be removed before sending it to review.

When creating new Post **posted`** is being generated as a random number between 100 - 200 because we initially have 100 posts, didn't implement a system to prevent double posted from happening.


#### Production

This code is not production ready, it lacks monitoring and proper logging some of these aspects are not met from my side due to the time limit but also to my experience with some of its aspects.


Thanks for this opportunity it was a pleasure to practice skills while also learning new things.
