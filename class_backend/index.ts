console.log("타입스크립트를 실행했어요!~!~!!!!~!~!~!~");

import { DataSource } from "typeorm";
import { Board } from "./Board.postgres";

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
  })
  .catch(() => {
    console.log("연결실패!~!");
  });
