import { gql } from "@apollo/client";

export const FETCH_BOARD = gql`
  query fetchBoard {
    id
    content
    video
    likes
    writer {
      id
      name
    }
    createdAt
  }
`;

export const LIKE_BOARD = gql`
  mutation likeBoard($boardId: String!) {
    likeBoard(boardId: $boardId)
  }
`;
