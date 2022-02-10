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
// export const QUERY_USER_CONVERSATION = gql`
// userConversations($member:ID!){
//   userConversation(
//       member:$member
//       ) {

//         members{
//         _id
//         }
//         _id

//         }
//       }

// `
// export const GET_MESSAGES = gql`
// getMessages($id:String!){
// getMessages(id:$id){
//     conversationId
//     sender{
//       _id
//      }
//    text

//     }
  
//  }


// `
