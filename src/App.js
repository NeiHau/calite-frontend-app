import "./App.css";
import MyAppCalendar from "./components/Body/Calendar.jsx";
import QueryButton from "./components/Button/QueryButton.jsx";
import ReservationForm from "./components/ReservationForm/ReservationForm.jsx";

function App() {
  return (
    <>
      {/* <Header logo={logo} /> */}
      <div style={{ marginBottom: "20px" }}>
        <ReservationForm />
      </div>
      <QueryButton />
      <MyAppCalendar />
    </>
  );
}

export default App;
