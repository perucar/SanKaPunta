const { ApolloServer } = require('apollo-server');
const path = require('path');
const Query = require('./resolver/Query');


const fs = require('fs');

const resolvers = {
    Query 
}


const server = new ApolloServer({
    typeDefs: fs.readFileSync(
        path.join(__dirname, './schema/map.graphql'),
        'utf-8'
    ),
    resolvers,
    introspection: true,
    context: ({req}) => {

    },
})

server.listen()
.then(({ url }) => 
console.log(`Server is running on ${url}`)
)
