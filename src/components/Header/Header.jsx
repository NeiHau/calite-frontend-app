import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

// 各ページコンポーネントをインポート
import Home from "../Body/components/Home/Home";
import ReservationForm from "../Body/components/Reservation/Reservation";
import TaskManagement from "../Body/components/Task/TaskManagement";
import Contact from "../Body/components/Contact/Contact";

export default function Header() {
  const [selectedTab, setSelectedTab] = useState("/");

  return (
    <Router>
      <header>
        <nav className='App-tabbar'>
          <Link
            className={`Tab-link ${
              selectedTab === "/" ? "Tab-link-active" : ""
            }`}
            to='/'
            onClick={() => setSelectedTab("/")}
          >
            ホーム
          </Link>
          <Link
            className={`Tab-link ${
              selectedTab === "/reservation" ? "Tab-link-active" : ""
            }`}
            to='/reservation'
            onClick={() => setSelectedTab("/reservation")}
          >
            予約
          </Link>
          <Link
            className={`Tab-link ${
              selectedTab === "/task" ? "Tab-link-active" : ""
            }`}
            to='/task'
            onClick={() => setSelectedTab("/task")}
          >
            タスク管理
          </Link>
          <Link
            className={`Tab-link ${
              selectedTab === "/contact" ? "Tab-link-active" : ""
            }`}
            to='/contact'
            onClick={() => setSelectedTab("/contact")}
          >
            お問い合わせ
          </Link>
        </nav>
      </header>
      {/* SwitchコンポーネントでRouteを囲む */}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/reservation' element={<ReservationForm />} />
        <Route path='/task' element={<TaskManagement />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </Router>
  );
}
