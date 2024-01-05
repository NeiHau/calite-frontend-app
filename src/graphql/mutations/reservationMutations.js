import { gql } from "@apollo/client";

export const CREATE_RESERVATION_MUTATION = gql`
  mutation createReservation(
    $customerName: String!
    $gender: String!
    $age: Float!
    $menu: MenuInput!
  ) {
    createReservation(
      customerName: $customerName
      gender: $gender
      age: $age
      menu: $menu
    ) {
      customerName
      gender
      age
      menu {
        menuName
        price
        description
      }
    }
  }
`;

// MenuInputの型定義
export const MenuInput = gql`
  input MenuInput {
    menuName: String!
    price: Float!
    description: String
  }
`;
