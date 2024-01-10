import React from "react";
import MyAppCalendar from "../Home/Calendar";
import ReservationForm from "./ReservationForm";

export default function Reservation() {
  return (
    <>
      <ReservationForm />
      <MyAppCalendar />
    </>
  );
}
