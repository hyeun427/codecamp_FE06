import { gql } from "@apollo/client";

// 등록상품불러오기
export const FETCH_USED_ITEM = gql`
  query fetchUseditem($useditemId: ID!) {
    fetchUseditem(useditemId: $useditemId) {
      _id
      name
      remarks
      contents
      price
      tags
      pickedCount
      useditemAddress {
        lat
        lng
        zipcode
        address
        addressDetail
      }
    }
  }
`;

// // 상품삭제
// export const DELETE_USED_ITEM = gql`
//   mutation deleteUseditem($useditemId: ID!) {
//     deleteUseditem(useditemId: $useditemId)
//   }
// `;
