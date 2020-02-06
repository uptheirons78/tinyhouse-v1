import express from 'express';
import {ApolloServer} from "apollo-server-express";
import {typeDefs, resolvers} from "./graphql/index";

const app = express();
const PORT = 9000;

const server = new ApolloServer({typeDefs, resolvers});
server.applyMiddleware({app, path: '/api'});


app.listen(PORT, () => console.log(`Server Running on PORT ${PORT}`));
