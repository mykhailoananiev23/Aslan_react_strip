import React, { useEffect } from "react";

import DemoNavbar from "../components/Navbars/DemoNavbar.js";

import Buttons from "./IndexSections/Buttons.js";
import Inputs from "./IndexSections/Inputs.js";
import Navbars from "./IndexSections/Navbars.js";
import Typography from "./IndexSections/Typography.js";

export default function Index() {
  useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
  }, [])
  return (
    <>
      <DemoNavbar />
        <Buttons />
        <Typography />
        <Inputs />
        <Navbars />
    </>
  )
}
