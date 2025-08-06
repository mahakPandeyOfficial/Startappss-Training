import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import db from './_db.js';
//typeDefs
import { typeDefs } from './schema.js';



//resolvers
const resolvers = {
   Query: {
     games() {
        return db.games;
     },

     authors() {
        return db.authors;
     },

     reviews() {
        return db.reviews;
     },

     review(_, args){
        return db.reviews.find(review => review.id === args.id);
     },
     game(_, args){
        return db.games.find(game => game.id === args.id);
     },
     author(_, args){
        return db.authors.find(author => author.id === args.id);
     },

   },

   Games: {
      reviews(parent){
         return db.reviews.filter((r) => r.gameId === parent.id)
      }
   },

   Authors: {
      reviews(parent){
         return db.reviews.filter((r) => r.authorId === parent.id)
      }
   },  

   Reviews: {
      author(parent){
         return db.authors.find((a) => a.id === parent.authorId)
      },

      game(parent){
         return db.games.find((g) => g.id === parent.gameId)
      }
   }

  

}

//server setup
const server = new ApolloServer({
    // typeDefs -- type Definations that define schema
    typeDefs,
    resolvers,

})

// start  the server 
const { url } = await startStandaloneServer(server, {
    listen : { port : 4000}
})

console.log("Server is running at "  +  url );









































