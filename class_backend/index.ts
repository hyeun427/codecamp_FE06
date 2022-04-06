console.log("타입스크립트를 실행했어요!~!~!!!!~!~!~!~");

import { DataSource } from "typeorm";
import { Board } from "./Board.postgres";
// const { ApolloServer, gql } = require("apollo-server");
import { ApolloServer, gql } from "apollo-server";

// 1. 타입
const typeDefs = gql`
  input CreateBoardInput {
    writer: String
    title: String
    contents: String
  }

  # 쿼리안에 Board라는 타입을 만들었기때문에 그 상세내용을 적어서 진짜 Board를 만들자
  type Board {
    number: Int
    writer: String
    title: String
    contents: String
  }

  type Query {
    # Board는 우리가 만든 타입이니까 Board타입을 만들자
    # 위에서 만든 Board가 배열로 받아오기때문에 [Board]를 적어주어야해
    fetchBoards: [Board]
  }

  type Mutation {
    # createBoard(writer: String, title: String, contents:String): String - 연습용(example)
    createBoard(createBoardInput: CreateBoardInput!): String #- 실제사용(backend06)
  }
`;

// 2. API
const resolvers = {
  Query: {
    fetchBoards: async () => {
      // 데이터베이스에 접속해서 게시물 가져오기

      // 게시글을 조회
      const result = await Board.find();
      return result;
    },
  },

  Mutation: {
    createBoard: async (_: any, args: any) => {
      // 데이터베이스에 접속해서 게시물 등록하기

      await Board.insert({
        ...args.createBoardInput,
        // writer: args.createBoardInput.writer,
        // title: args.createBoardInput.title,
        // contents: args.createBoardInput.contents,
      });

      // 수정하면?
      // Board.update({ writer: "철수" }, { title: "제목2" })

      // 삭제하면?
      // Board.delete({ writer: "철수" });

      // 소프트딜리트형식으로 하면
      // Board.update({ writer: "철수" }, { deletedAt: new Date() });

      return "게시물을 등록했습니다!!~~~!!~";
    },
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
  cors: true,
  /* 
  cors: {
    origin: "https://naver.com"
  } */
});

const AppDataSource = new DataSource({
  type: "postgres",
  host: "34.64.124.189",
  port: 5006,
  username: "postgres",
  password: "postgres2021",
  database: "postgres",
  entities: [Board],
  synchronize: true,
  logging: true,
});

// 연결을 성공하면 .then으로, 실패하면 .catch로 들어감
AppDataSource.initialize()
  .then(() => {
    console.log("연결성공!~!");

    // 백엔드 API를 오픈-리슨 (24시간동안 접속가능하게끔 대기상태로 만들어주기)
    server.listen(4000).then(({ url }) => {
      console.log(`🚀 Server ready at ${url}`);
    });
  })
  .catch(() => {
    console.log("연결실패!~!");
  });
