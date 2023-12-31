import React, { useState } from "react";
import { useQuery } from "@apollo/client";
import { GET_RESERVATION_QUERY } from "../../graphql/queries/reservationQuery";

const QueryButton = () => {
  const [reservationId, setReservationId] = useState("");
  const [reservationData, setReservationData] = useState(null); // useQueryからfetchしたdataを管理するuseState
  const { loading, error, refetch } = useQuery(GET_RESERVATION_QUERY, {
    skip: true,
    variables: { id: reservationId },
  });

  const handleInputChange = (e) => {
    setReservationId(e.target.value);
  };

  const handleGetReservation = async (e) => {
    e.preventDefault();
    try {
      const { data } = await refetch({ id: reservationId });
      setReservationData(data.getReservation); // データを状態変数に設定

      console.log(data);
    } catch (err) {
      console.error(err);
    }
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <>
      <form onSubmit={handleGetReservation}>
        <input
          type='text'
          value={reservationId}
          onChange={handleInputChange}
          placeholder='Enter reservation ID'
          autoComplete='off'
          id='reservationId'
          name='reservationId'
        />
        <button type='submit'>Get Reservation</button>
      </form>
      {reservationData && (
        <div>
          <h3>Reservation</h3>
          <p>Name: {reservationData.name}</p>
          <p>Gender: {reservationData.gender}</p>
          <p>Age: {reservationData.age}</p>
          {/* menuの情報がある場合に表示 */}
          {reservationData.menu && (
            <div>
              <p>Menu Name: {reservationData.menu.name}</p>
              <p>Price: {reservationData.menu.price}</p>
              <p>Description: {reservationData.menu.description}</p>
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default QueryButton;
