# Full Stack: Food-Truck-as-a-Service
Lunch is important and knowing our lunch choices is even more so. While our office manager
publishes a paper copy of the food truck schedule once a month, we’d like this service to be
available digitally, so we can choose our lunch from the comfort of our desks. For an internal
hackathon, you’ve been asked to write a server-and-UI into which we can manually add the food
trucks for each month, and access today's choices. The requirements are:
A RESTful API that allows:
 1. Data entry of the food trucks for each day.
 2. Each food truck only needs a name and a date, not a location.
 3. Editing food trucks if we have a typo.
 4. Listing today’s Food trucks.
 5. A UI that consumes the above API, and...
 6. Permits easy data entry.
 7. Allows a quick view of today's Food Truck options.
## Project Setup
1. clone the project 
2. npm install -g lerna
3. Install mongo db 
4. mongo url put it in cd packages/vm-server/options.toml - replace with your connection string 
5. Run  lerna bootstrap and lerna exec npm install

## About Lerna
JavaScript projects that use a monorepo structure, which means that the code for multiple packages or modules is stored in a single repository. Lerna helps to simplify the development and deployment process for such projects by providing a set of tools and commands to manage dependencies, versioning, testing, and publishing of packages.
## Overview of lib/Projects 
# vm-mongo-lib 
for mongoose related operation like read , write , update . It is generic lib which can be used by any model to perform basic curd operations
# vm-server 
It is main lib used for static serving of Angular and API  routing .  
# vm-ui 
It contains UI Part (Angular), components , service , modules , layout

# To Run the Project 
1. cd packages/vm-ui 
   Run = npm run build => It will create a build dist and put in vm-sever/public dir 
3. cd packages/vm-sever 
  Run npm start 

  # OR 
## I have created a run.sh , just run it and make sure mongo is connected to right url which you can replace in options.toml

