import { ApolloServer, gql } from "apollo-server";

const typeDefs = gql`
    type Tweet {
        id: ID!
        text: String!
        author: User!
    }

    type User {
        id: ID!
        username: String!
        firstName: String!
        lastName: String!
    }

    type Query {
        allTweets: [Tweet!]  !
        tweet(id: ID!): Tweet                                                                                                                                                                                                             ): Tweet
    }

    type Mutation {
        postTweet(text:String!, userId: ID!): Tweet!
        deleteTweet(id: ID!): Boolean!
    }


`

const server = new ApolloServer({ typeDefs });

server.listen().then(({url}) => {
    console.log(`Running on ${url}`);
});


