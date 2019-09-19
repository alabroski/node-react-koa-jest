# node-react-koa-jest

A simple monorepo client and server app using yarn workspaces.

### Backend

The backend uses the Koa web framework to provide an API endpoint. The server part is written in plain JavaScript and does not need transpiling to run.

### Frontend

The frontend uses ReactJS to represent a very simple web app that makes a single call to the backend once run.

### Testing

The testing framework is currently Jest and is only configured on the frontend side (client). It can be run by cd'ing into the client directory and running 'jest' or 'yarn test'.
