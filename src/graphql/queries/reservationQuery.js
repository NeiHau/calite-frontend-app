import { gql } from "@apollo/client";

export const GET_RESERVATION_QUERY = gql`
  query GetReservation($id: String!) {
    getReservation(id: $id) {
      id
      name
      gender
      age
      menu {
        name
        price
        description
      }
    }
  }
`;
