import "./App.css";
import Header from "./components/Header/Header.jsx";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./features/Home/Home.jsx";
import ReservationForm from "./features/Reservation/ReservationForm.jsx";
import TaskManagement from "./features/Task/TaskManagement.jsx";
import ContactPage from "./features/Contact/ContactPage.jsx";
import MessagePage from "./features/Contact/MessagePage.jsx";

function App() {
  return (
    <Router>
      <Header />
      {/* SwitchコンポーネントでRouteを囲む */}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/reservation' element={<ReservationForm />} />
        <Route path='/task' element={<TaskManagement />} />
        <Route path='/contact' element={<ContactPage />} />
        <Route path='/message' element={<MessagePage />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
