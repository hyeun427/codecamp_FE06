import { gql } from "@apollo/client";

export const CREATE_USED_ITEM = gql`
  mutation createUseditem($createUseditemInput: CreateUseditemInput!) {
    createUseditem(createUseditemInput: $createUseditemInput) {
      _id
      name
      remarks
      contents
      price
      tags
      images
      useditemAddress {
        _id
        zipcode
        address
        addressDetail
      }
    }
  }
`;

export const UPDATE_USED_ITEM = gql`
  mutation updateUseditem(
    $updateUseditemInput: UpdateUseditemInput!
    $useditemId: ID!
  ) {
    updateUseditem(
      updateUseditemInput: $updateUseditemInput
      useditemId: $useditemId
    ) {
      _id
      name
      remarks
      contents
      price
      tags
      images
      pickedCount
      useditemAddress {
        zipcode
        address
        addressDetail
        lat
        lng
      }
      seller {
        name
        picture
      }
      updatedAt
    }
  }
`;

export const FETCH_USED_ITEM = gql`
  query fetchUseditem($useditemId: ID!) {
    fetchUseditem(useditemId: $useditemId) {
      _id
      name
      remarks
      contents
      price
      tags
      images
      pickedCount
      createdAt
      buyer {
        _id
        email
        name
        createdAt
        updatedAt
      }
      seller {
        _id
        email
        name
        createdAt
        updatedAt
      }
      useditemAddress {
        _id
        zipcode
        address
        addressDetail
      }
    }
  }
`;
