import { gql } from "@apollo/client";

export const UPDATE_COMMUNITY_BOARD = gql`
  mutation updateCommunityBoard(
    $communityBoardId: String!
    $updateCommunityBoardInput: UpdateCommunityBoardInput!
  ) {
    updateCommunityBoard(
      communityBoardId: $communityBoardId
      updateCommunityBoardInput: $updateCommunityBoardInput
    ) {
      title
      content
      image
      id
    }
  }
`;
