import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header/Header.jsx";
import MyAppCalendar from "./components/Body/Calendar.jsx";

function App() {
  return (
    <>
      {/* <Header logo={logo} /> */}
      <MyAppCalendar />
    </>
  );
}

export default App;
