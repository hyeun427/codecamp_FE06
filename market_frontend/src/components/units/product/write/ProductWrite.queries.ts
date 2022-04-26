import { gql } from "@apollo/client";

export const CREATE_USED_ITEM = gql`
  mutation createUseditem($createUseditemInput: CreateUseditemInput!) {
    createUseditem(createUseditemInput: $createUseditemInput) {
      _id
      # name
      # remarks
      # contents
      # price
      # tags
      # images
      # useditemAddress {
      #   _id
      #   zipcode
      #   address
      #   addressDetail
      # }
    }
  }
`;

// export const UPDATE_BOARD = gql`
//   mutation updateBoard(
//     $boardId: ID!
//     $password: String
//     $updateBoardInput: UpdateBoardInput!
//   ) {
//     updateBoard(
//       boardId: $boardId
//       password: $password
//       updateBoardInput: $updateBoardInput
//     ) {
//       _id
//     }
//   }
// `;
