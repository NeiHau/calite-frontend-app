import React from "react";
import { useSubscription } from "@apollo/client";
import { NEW_RESERVATION_SUBSCRIPTION } from "../../../../graphql/subscriptions/reservationSubscription";

function NewReservationSubscription() {
  const { data, loading, error } = useSubscription(
    NEW_RESERVATION_SUBSCRIPTION
  );

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  if (!data || !data.newReservation)
    return <p>No reservation data available.</p>;

  const reservation = data.newReservation;

  return (
    <div>
      <div key={reservation.id}>
        <p>Name: {reservation.name}</p>
        <p>Gender: {reservation.gender}</p>
        <p>Age: {reservation.age}</p>
        <div>
          <p>Menu Name: {reservation.menu.name}</p>
          <p>Price: {reservation.menu.price}</p>
          <p>Description: {reservation.menu.description}</p>
        </div>
      </div>
    </div>
  );
}

export default NewReservationSubscription;
