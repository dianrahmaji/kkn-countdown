import { gql } from 'apollo-server-micro'

export const typeDefs = gql`
  type GuestBook {
    id: String
    body: String
    author: String
    placement: String
    createdAt: Date
  }
`
