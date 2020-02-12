# TINYHOUSE Version 1

Full Stack Application built with: Node, React, Typescript, GraphQL and Apollo.

### STEP-01 Branch
Basic Node Server built with Express.js and Typescript, stored inside "server" folder, and including a GET route and a DELETE one. Data are stored inside a mock file called "listings.ts". Eslint configuration done.

### STEP-02 Branch
Created a GraphQl Api with `apollo-server-express` package. Setup an Apollo Server instance with ApolloServer constructor including both type definitions and resolvers. Path of api endpoint is **"/api"**. GraphQL Schema and resolvers are defined inside `server/src/graphql` directory.

### STEP-03 Branch
Created a Cluster and database in MongoDB Atlas. Installed `mongodb` package and its types. Seed our db with the `seed` script in `package.json` leveraging `seed.ts` file. Inside `/database` we created a connection with our Mongo Atlas database. Update both typeDefinitions and resolvers inside `/graphql` folder and then modularized resolvers inside `/resolvers` directory.

### STEP-04 Branch
Created a `/client` folder with `create-react-app` using `npx create-react-app client --typescript`. Removed all useless files and styles to clean up this React boilerplate.

### STEP-05 Branch
Created `Listings` component. Created a `server` method to fetch data from GraphQL. Then implemented this server method inside `Listings` component both to query data from GraphQL and display those inside the console and to run the delete mutation (for now id of item to delete is hardcoded). N.B. Called `proxy` inside `package.json`.

### STEP-06 Branch
Fetched data from database to be displayed on the front-end. Created different custom hooks to do it: useQuery to fetch data from database and useMutation to delete (later edit) data. Used useReducer instead of useState inside custom hooks.