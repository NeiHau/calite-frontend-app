import "./App.css";
import MyAppCalendar from "./components/Body/Calendar.jsx";
import QueryButton from "./components/Button/QueryButton.jsx";
import ReservationForm from "./components/ReservationForm/ReservationForm.jsx";
import NewReservationSubscription from "./components/ShowSubscResult/SubscriptionResult.jsx";

function App() {
  return (
    <>
      {/* <Header logo={logo} /> */}
      <div
        style={{ marginBottom: "40px", marginTop: "30px", marginLeft: "10px" }}
      >
        <ReservationForm />
      </div>
      <NewReservationSubscription />
      <QueryButton />
      <MyAppCalendar />
    </>
  );
}

export default App;
