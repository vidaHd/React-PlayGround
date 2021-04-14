import PersistentDrawerRight from "./Sidebar";
import React from "react";
import Checkbox from "@material-ui/core/Checkbox";

interface Iitem {
  name: string;
  color: string;
  route: string;
  title?: string;
}

const Dashboard = () => {
  const [darkState, setDarkState] = React.useState(true);
  const palletType = darkState ? "dark" : "light";
  const items: Iitem[] = [
    {
      name: "product",
      color: "#000",
      route: "/product",
    },
    {
      name: "orders",
      color: "#000",
      route: "/order",
    },
    {
      name: "Languege",
      color: "#000",
      route: "/Languege",
    },
  ];

  return (
    <div>
      <PersistentDrawerRight items={items} title="داشبورد" />
    </div>
  );
};
export default Dashboard;
