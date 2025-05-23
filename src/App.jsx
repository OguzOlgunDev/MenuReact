import menu from "./data";
import { useState } from "react";

import Title from "./components/Title";
import Menu from "./components/Menu";
import Catagories from "./components/Catagories";

const allCatagories = ["All", ...new Set(menu.map((item) => item.category))];

const App = () => {
  const [menuItems, setMenuItems] = useState(menu);
  const [catagories, setCatagories] = useState(allCatagories);

  const filterItems = (catagory) => {
    const filteredMenu = menu.filter((item) => item.category === catagory);
    if (catagory !== "All") return setMenuItems(filteredMenu);
    return setMenuItems(menu);
  };

  return (
    <section className="menu">
      <Title text={"Menu"} />
      <Catagories catagories={catagories} filterCatagory={filterItems} />
      <Menu items={menuItems} />
    </section>
  );
};
export default App;
