import { useState } from "react";
import ButtonFilterBar from "./ButtonFilterBar.jsx";
import WorkItems from "./WorkItems.jsx";

function WorkPage() {

  return (
  <>
    <ButtonFilterBar />
    <WorkItems />
  </>
  );
}

export default WorkPage;