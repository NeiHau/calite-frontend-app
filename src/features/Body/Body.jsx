import ReservationForm from "./components/ReservationForm";
import NewReservationSubscription from "./components/Contact/SubscriptionResult";
import QueryButton from "../QueryButton";
import MyAppCalendar from "./components/Home/Calendar";

export default function Body() {
  return (
    <body>
      <div
        style={{ marginBottom: "40px", marginTop: "30px", marginLeft: "10px" }}
      >
        <ReservationForm />
      </div>
      <NewReservationSubscription />
      <QueryButton />
      <MyAppCalendar />
    </body>
  );
}
