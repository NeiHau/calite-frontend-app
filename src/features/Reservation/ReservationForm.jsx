import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { useMutation } from "@apollo/client";
import { CREATE_RESERVATION_MUTATION } from "../../graphql/mutations/reservationMutations";

export default function ReservationForm() {
  const [formData, setFormData] = useState({
    id: uuidv4(),
    customerName: "",
    gender: "",
    age: 0,
    menu: {
      name: "",
      price: 0,
      description: "",
    },
  });
  const [reservationData, setReservationData] = useState({});

  const [createReservation, { loading, error }] = useMutation(
    CREATE_RESERVATION_MUTATION
  );

  async function handleSubmit(e) {
    e.preventDefault();
    console.log("handleSubmit is called with", formData);

    try {
      const { data } = await createReservation({
        variables: {
          id: uuidv4(),
          customerName: formData.customerName,
          gender: formData.gender,
          age: formData.age,
          menu: {
            menuName: formData.menu.menuName,
            price: formData.menu.price,
            description: formData.menu.description,
          },
        },
      });

      setReservationData(data.createReservation);

      if (loading) {
        console.log("Submitting...");
        return;
      }
      if (error) {
        console.error(`Submission error! ${error.message}`);
        return;
      }
      console.log("Mutation success, data:", data);
    } catch (error) {
      console.error("Mutation error:", error);
    }
  }

  function handleChange(e) {
    const { name, value } = e.target;

    if (name === "age") {
      setFormData({ ...formData, [name]: parseInt(value, 10) });
    } else if (
      name === "menuName" ||
      name === "menuPrice" ||
      name === "menuDescription"
    ) {
      // menu関連のフィールドの処理
      setFormData({
        ...formData,
        menu: {
          ...formData.menu,
          [name === "menuName"
            ? "name"
            : name === "menuPrice"
            ? "price"
            : "description"]: name === "menuPrice" ? parseFloat(value) : value,
        },
      });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleSubmit(e);
      }}
    >
      <input
        type='text'
        name='name'
        value={formData.customerName}
        onChange={handleChange}
        placeholder='Name'
        autoComplete='off'
      />
      <input
        type='text'
        name='gender'
        value={formData.gender}
        onChange={handleChange}
        placeholder='Gender'
        autoComplete='off'
      />
      <input
        type='number'
        name='age'
        value={formData.age}
        onChange={handleChange}
        placeholder='Age'
        autoComplete='off'
      />
      <input
        type='text'
        name='menuName'
        value={formData.menu.menuName}
        onChange={handleChange}
        placeholder='Menu Name'
        autoComplete='off'
      />
      <input
        type='number'
        name='menuPrice'
        value={formData.menu.price}
        onChange={handleChange}
        placeholder='Menu Price'
        autoComplete='off'
      />
      <input
        type='text'
        name='menuDescription'
        value={formData.menu.description}
        onChange={handleChange}
        placeholder='Menu Description'
        autoComplete='off'
      />
      <button type='submit'>Create Reservation</button>
      {reservationData && (
        <div>
          <h3>Reservation</h3>
          <p>Name: {reservationData.customerName}</p>
          <p>Gender: {reservationData.gender}</p>
          <p>Age: {reservationData.age}</p>
          {/* menuの情報がある場合に表示 */}
          {reservationData.menu && (
            <div>
              <p>Menu Name: {reservationData.menu.menuName}</p>
              <p>Price: {reservationData.menu.price}</p>
              <p>Description: {reservationData.menu.description}</p>
            </div>
          )}
        </div>
      )}
    </form>
  );
}
