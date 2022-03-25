import { gql } from "@apollo/client";

export const LOGIN = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
      }
    }
  }
`;

export const ADD_ORDER = gql`
  mutation addOrder($products: [ID]!) {
    addOrder(products: $products) {
      purchaseDate
      products {
        _id
        name
        description
        price
        quantity
        category {
          name
        }
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser(
    $firstName: String!
    $lastName: String!
    $email: String!
    $password: String!
  ) {
    addUser(
      firstName: $firstName
      lastName: $lastName
      email: $email
      password: $password
    ) {
      token
      user {
        _id
      }
    }
  }
`;

export const CREATE_CONVERSATION = gql`
  mutation createConversations($id: ID!, $productID: ID!) {
    addConversation(id: $id, productID: $productID) {
      members {
        _id
      }
      _id
    }
  }
`;
export const SEND_MESSAGE = gql`
  mutation sendMessage(
    $conversationId: String!
    $senderId: ID!
    $text: String!
  ) {
    createMessage(
      conversationId: $conversationId
      senderId: $senderId
      text: $text
    ) {
      conversationId
      sender {
        _id
      }
      text
    }
  }
`;

export const ADD_PRODUCT = gql`
  mutation addProduct(
    $user: ID
    $name: String!
    $description: String
    $image: String
    $price: String
    $category: String
  ) {
    addProduct(
      name: $name
      description: $description
      image: $image
      price: $price
      category: $category
      user: $user
    ) {
      name
      _id
      description
      image
      price
    }
  }
`;
export const REMOVE_PRODUCT = gql`
mutation removeProduct($productID: ID!){
  removeProduct(productID:$productID){
    name
    description
    image
    price
    category {
      name
    }
    user {
      firstName
    }
  }
}`
