import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { CREATE_RESERVATION_MUTATION } from "../../graphql/mutations/reservationMutations";
import { useMutation } from "@apollo/client";

export default function ReservationForm() {
  // フォームの状態を管理
  const [formData, setFormData] = useState({
    id: uuidv4(),
    name: "",
    gender: "",
    age: 0,
    menu: {
      name: "",
      price: 0,
      description: "",
    },
  });

  // useMutation フックの使用
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
          name: formData.name,
          gender: formData.gender,
          age: formData.age,
          menu: formData.menu,
        },
      });

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
        value={formData.name}
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
        value={formData.menu.name}
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
    </form>
  );
}
