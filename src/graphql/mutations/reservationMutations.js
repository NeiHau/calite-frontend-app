import { gql } from "@apollo/client";

export const CREATE_RESERVATION_MUTATION = gql`
  mutation createReservation(
    $name: String!
    $gender: String!
    $age: Float!
    $menu: MenuInput!
  ) {
    createReservation(name: $name, gender: $gender, age: $age, menu: $menu) {
      name
      gender
      age
    }
  }
`;

// MenuInputの型定義
export const MenuInput = gql`
  input MenuInput {
    name: String!
    price: Float!
    description: String
  }
`;
