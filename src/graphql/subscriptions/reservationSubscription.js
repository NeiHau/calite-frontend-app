import { gql } from "@apollo/client";

export const NEW_RESERVATION_SUBSCRIPTION = gql`
  subscription {
    newReservation {
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
