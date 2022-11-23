# BlogIt
A blogging application with minimal features built with simplicity in mind

# Components
The application is comprised of a single page application frontend and a REST backend<br>
The frontend is a single page application made using [React](https://reactjs.org/docs/getting-started.html) and [Redux](https://redux-toolkit.js.org/)<br>
The backend runs on [Node.js](https://nodejs.org/) and uses the [Express](https://expressjs.com/) framework

# Api
Data is obtained from and sent to the backend using a REST api<br>
Changes can therefore be made from both browsers as well as clients that can send data to the api, such as curl

# Issues
- The json token is not invalidated on logout, could lead to a serviour breach if someone other than the owner were to get their hands on it
- Transitioning in between pages in the frontend sometimes fails
- Some of the content delivered to the frontend is unescaped to prevent raw html tags from being displayed to the user. This could be exploited to carry out xss

For more information, check out the README files in the frontend and backend folders

# Authors
Joshua Omari - [Github](https://github.com/joshua530)
