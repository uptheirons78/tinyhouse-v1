# TINYHOUSE Version 1

Full Stack Application built with: Node, React, Typescript, GraphQL and Apollo.

### STEP-01 Branch
Basic Node Server built with Express.js and Typescript, stored inside "server" folder, and including a GET route and a DELETE one. Data are stored inside a mock file called "listings.ts". Eslint configuration done.

### STEP-02 Branch
Created a GraphQl Api with `apollo-server-express` package. Setup an Apollo Server instance with ApolloServer constructor including both type definitions and resolvers. Path of api endpoint is **"/api"**. GraphQL Schema and resolvers are defined inside `server/src/graphql` directory.