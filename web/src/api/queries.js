import gql from "graphql-tag";

// GET
export const GET_USERS = gql`
  query getUsers {
    users {
      id
      name
      pets {
        id
        name
      }
    }
  }
`;

export const GET_PETS = gql`
  query getPets {
    pets {
      id
      name
      owner {
        id
        name
        email
      }
    }
  }
`;

// CREATE
export const ADD_USER = gql`
  mutation($name: String!, $email: String!) {
    CreateUser(name: $name, email: $email) {
      name
      email
    }
  }
`;

// UPDATE

// DELETE
export const DELETE_USER = gql`
  mutation($id: ID!) {
    DeleteUser(id: $id) {
      id
      name
      email
    }
  }
`;
