import React from "react";
import { useDispatch } from "react-redux";
import { logout } from "../src/store/authSlice";

export default function Logout() {
  const dispatch = useDispatch();

  function exit() {
    dispatch(logout());
  }

  return (
    <div>
      <button onClick={exit}>Logout</button>
    </div>
  );
}
