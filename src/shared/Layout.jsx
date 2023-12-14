import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Form from "../components/Form";
import Header from "../components/Header";
export default function Layout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}
