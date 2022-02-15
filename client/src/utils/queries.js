import { gql } from "@apollo/client";

export const QUERY_PRODUCTS = gql`
  query getProducts($category: ID) {
    products(category: $category) {
      _id
      name
      description
      price
      quantity
      image
      category {
        _id
        name
      }
      user {
        _id
      }
    }
  }
`;

export const QUERY_PRODUCTS_BY_USER_ID = gql`
  query productsByUserID($user: ID) {
    products(user: $user) {
      name
      description
      image
      category {
        _id
      }
    }
  }
`;

export const QUERY_CHECKOUT = gql`
  query getCheckout($products: [ID]!) {
    checkout(products: $products) {
      session
    }
  }
`;

export const QUERY_ALL_PRODUCTS = gql`
  {
    products {
      _id
      name
      description
      price
      quantity
      category {
        name
      }
      user {
        _id
      }
    }
  }
`;

export const QUERY_CATEGORIES = gql`
  {
    categories {
      _id
      name
    }
  }
`;

export const QUERY_USER = gql`
  {
    user {
      _id
      firstName
      lastName
      orders {
        _id
        purchaseDate
        products {
          _id
          name
          description
          price
          quantity
          image
        }
      }
    }
  }
`;
export const QUERY_USER_CONVERSATION = gql`
  query userConversations($member: ID!, $productID: ID!) {
    userConversation(member: $member, productID: $productID) {
      members {
        _id
      }
      productId {
        _id
      }
      _id
    }
  }
`;
export const GET_MESSAGES = gql`
  query getMessages($id: String!) {
    getMessages(id: $id) {
      conversationId
      sender {
        _id
      }
      text
    }
  }
`;

export const QUERY_PRODUCT_ID = gql`
  query product($productID: ID!) {
    product(_id: $productID) {
      _id
      name
      description
      image
      category {
        name
      }
      user {
        firstName
        _id
      }
    }
  }
`;
