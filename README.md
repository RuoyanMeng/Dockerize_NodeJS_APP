# Dockerize a NodeJS APP
<p>The code consists of two parts: In the first part, creating a NodeJS application that serves basic CRUD (Create, Read, Update, Delete) operations via HTTP requests. Using MongoDB (NoSQL database) to persist data. The second part consists of dockerizing the application and starting two services: application and database by using docker-compose.</p>

### Run Backend Locally
<p>To install dependencies</p>
<pre><code> npm install </code></pre>
<p>After enable MongoDB</>
<p>To start backend server</>
<pre><code> npm start </code></pre>

### Run with Docker
To persist the requests on MongoDB, run the following command in local machine to set up a container that persists the database information:

<pre><code> docker-compose build </code></pre>
<pre><code> docker-compose up </code></pre>
