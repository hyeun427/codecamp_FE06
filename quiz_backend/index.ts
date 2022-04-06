console.log("타입스크립트를 실행했어요!~!~!!!!~!~!~!~");

import { DataSource } from "typeorm";
import { Product } from "./Board.postgres";
import { ApolloServer, gql } from "apollo-server";

// 1. 타입
const typeDefs = gql`
  input CreateProductInput {
    name: String
    detail: String
    price: Int
  }

  input UpdateProductInput {
    name: String
    detail: String
    price: Int
    seller: String
  }

  type Products {
    _id: ID
    seller: String
    detail: String
    price: Int
  }

  type Product {
    _id: ID
    number: Int
    seller: String
    detail: String
    price: Int
  }

  type Query {
    fetchProducts(page: Int): [Products]
    fetchProduct(productId: ID): [Product]
  }

  type Mutation {
    createProduct(
      seller: String
      createProductInput: CreateProductInput!
    ): String

    updateProduct(_id: ID, updateProductInput: UpdateProductInput!): String
  }
`;

// 2. API
const resolvers = {
  Query: {
    fetchProducts: async () => {
      const result = await Product.find();
      return result;
    },

    fetchProduct: async () => {
      const result = await Product.find();
      return result;
    },
  },

  Mutation: {
    createProduct: async (_: any, args: any) => {
      await Product.insert({
        ...args,
        ...args.createProductInput,
      });
      return "게시물을 등록!~~~!!~";
    },

    updateProduct: async (_: any, args: any) => {
      await Product.update(
        { _id: args._id },
        {
          name: args.updateProductInput.name,
          detail: args.updateProductInput.detail,
          seller: args.updateProductInput.seller,
          price: args.updateProductInput.price,
        }
      );
      return "수정수정~~";
    },
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const AppDataSource = new DataSource({
  type: "postgres",
  host: "34.64.124.189",
  port: 5006,
  username: "postgres",
  password: "postgres2021",
  database: "postgres",
  entities: [Product],
  synchronize: true,
  logging: true,
});

AppDataSource.initialize()
  .then(() => {
    console.log("연결성공!~!");

    server.listen(5000).then(({ url }) => {
      console.log(`🚀 Server ready at ${url}`);
    });
  })
  .catch(() => {
    console.log("연결실패!~!");
  });
