// graphql-tag is a peer dependency of graphql. Helpful utilities for parsing GraphQL queries
import gql from 'graphql-tag';

export const GET_ME = gql`
  {
    me {
      _id
      username
      email
      bookCount
      savedBooks{
        bookId
        authors
        description
        title
        image
        link
      }
    }
  }
`;
