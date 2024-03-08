import React, { useEffect, useState } from "react";

import DemoNavbar from "../components/Navbars/DemoNavbar.js";

import First from "./IndexSections/First.js";
import Email from "./IndexSections/Email.js";
import Footer from "./IndexSections/Footer.js";
import Testimonials from "./IndexSections/Testimonials.js";

export default function Index(props) {


  useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
  }, [])
  return (
    <>
      <DemoNavbar />
      <First  />
      <Testimonials />
      <Email />
      <Footer />
    </>
  )
}
