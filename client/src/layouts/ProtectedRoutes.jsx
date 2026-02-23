import { Outlet } from "react-router-dom";
import { decodeJwt } from "jose";
import { useEffect } from "react";
import React from "react";
import { useDispatch } from "react-redux";
import { persistenceLogin } from "../app/features/authSlice";
import Cookies from "universal-cookie";

const ProtectedRoutes = () => {
  const myToken = new Cookies().get("myToken");

  const dispatch = useDispatch();

  const persitenceAuth = (token) => {
    try {
      const payload = decodeJwt(token);
      if (!payload.exp || payload.exp * 1000 <= Date.now()) return null;
      return payload;
    } catch (error) {
      return null;
    }
  };

  useEffect(() => {
    if (!myToken) {
      window.location.href = "/authentication";
    } else {
      const payload = persitenceAuth(myToken);
      if (!payload) {
        new Cookies().remove("myToken", { path: "/" });
        window.location.href = "/authentication";
        return;
      }

      dispatch(persistenceLogin(payload));
    }
  }, [dispatch, myToken]);

  return (
    <>
      <Outlet />
    </>
  );
};

export default ProtectedRoutes;
