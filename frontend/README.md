# BlogIt frontend

A single page frontend for the application

- it integrates with a nodejs backend that uses mongodb for its database
- jwt is the authentication mechanism used
- redux is used as the state manager and react as the frontend framework

# Configuration
Ensure a .env file with REACT_APP_API_URL containing the api root path is present in<br>
the frontend directory's root(`frontend/.env`) before building the static assets<br>
example `REACT_APP_API_URL=/api/v1` or `REACT_APP_API_URL=/api` or `REACT_APP_API_URL=/`
