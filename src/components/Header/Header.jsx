import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Header() {
  const [selectedTab, setSelectedTab] = useState("/");
  const location = useLocation();

  if (location.pathname === "/message") {
    return null;
  }

  return (
    <header>
      <nav className='App-tabbar'>
        <Link
          className={`Tab-link ${selectedTab === "/" ? "Tab-link-active" : ""}`}
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
  );
}
