import React, { useEffect, useState } from "react";
import "./App.scss";

import Tasks from "./components/Tasks";
// import UpdateTasks from "./components/UpdateTasks";
import Login from "./components/Login";

import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  const [user, setUser] = useState({});

  // useEffect(() => {
  //   const storedUser = localStorage.getItem("user");

  //   if (storedUser) {
  //     setUser(() => JSON.parse(storedUser));
  //   }
  // }, []);

  const handleLogout = function () {
    localStorage.removeItem("user");
    setUser(() => {});
  };

  const updateUser = function (userObj) {
    setUser(() => userObj);
  };

  return (
    <Router>
      <Route exact path="/applications">
        <Tasks user={user} />
      </Route>
      <Route path="/applications/:applicationUUID">
        <Tasks user={user} />
      </Route>
    </Router>
  );
}

export default App;
