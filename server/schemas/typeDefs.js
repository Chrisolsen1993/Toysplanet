const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Category {
    _id: ID
    name: String
  }

  type Product {
    _id: ID
    name: String
    description: String
    image: String
    quantity: Int
    price: Float
    category: Category
    user: User
  }

  type Order {
    _id: ID
    purchaseDate: String
    products: [Product]
  }

  type User {
    _id: ID
    firstName: String
    lastName: String
    email: String
    orders: [Order]
    products: [Product]
  }

  type Checkout {
    session: ID
  }

  type Auth {
    token: ID
    user: User
  }

  type Message {
    conversationId: String
    sender: User
    text: String
  }

  type Conversation {
    _id: ID
    members: [User]
    productId: Product
  }

  type Query {
    categories: [Category]

    products(category: ID, name: String, user: ID): [Product]

    product(_id: ID!): Product

    user: User

    order(_id: ID!): Order

    checkout(products: [ID]!): Checkout

    userConversation(member: ID!, productID: ID!): [Conversation]

    getMessages(id: String!): [Message]
  }

  type Mutation {
    addUser(
      firstName: String!
      lastName: String!
      email: String!
      password: String!
    ): Auth

    addOrder(products: [ID]!): Order

    updateUser(
      firstName: String
      lastName: String
      email: String
      password: String
    ): User
    updateProduct(_id: ID!, quantity: Int!): Product
    removeProduct(productID: ID!): Product

    login(email: String!, password: String!): Auth

    addConversation(id: ID!, productID: ID!): Conversation

    createMessage(
      conversationId: String!
      senderId: ID!
      text: String!
    ): Message

    addProduct(
      user: ID
      name: String!
      description: String
      image: String
      price: String
      category: String
    ): Product
  editProduct(
    _id:ID!
    name: String!
    description: String
    image: String
    price: String
    category: String
  ):Product

  }
`;

module.exports = typeDefs;
