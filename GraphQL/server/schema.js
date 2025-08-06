export const typeDefs = `#graphql

 type Games {
    id : ID!,
    title: String
    platform: [String!]!,  # platform can be an array of strings to support multiple platforms
    reviews: [Reviews!]!,  # the reviews associated with the game, and many reviews can be for a single game.
 }

 type Reviews {
    id : ID!,
    rating: Int!,
    content: String!,
    game: Games!,            # the game is associated with the review
    author: Authors!,        # the author is associated with the review
 }

 type Authors {
    id: ID!,
    name: String!,
    verified: Boolean,
    reviews: [Reviews!],  # the reviews associated with the author, and many reviews can be written by a single author.
 }

  type Query {

    reviews: [Reviews],
    review(id: ID!): Reviews,
    games: [Games],
    game(id: ID!): Games,
    authors: [Authors], 
    author(id: ID!): Authors,  

  }
`