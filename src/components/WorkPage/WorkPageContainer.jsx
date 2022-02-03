import { useState } from "react";
import ButtonFilterBar from "./ButtonFilterBar.jsx";
import WorkItems from "./WorkItems.jsx";

function WorkPage() {

  const [activeFilter, setFilter] = useState("All");

  function handleSetFilter(arg) {
    const setActiveFilter = arg
    setFilter(setActiveFilter)
  }

  return (
  <>
    <ButtonFilterBar activeFilter={activeFilter}  handleSetFilter={handleSetFilter}/>
    <WorkItems />
  </>
  );
}

export default WorkPage;