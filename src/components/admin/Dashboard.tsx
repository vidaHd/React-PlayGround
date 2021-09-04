import PersistentDrawerRight from "./Sidebar";
import { Iitem } from "../../interface/interface";
import Dynamic from "./DynamicInput";
import React from "react";
import NumberInput from "./NumberInput";

const Dashboard = () => {
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
  const [formData, setFormData] = React.useState();

  const fileds = [
    { name: "coffieName", type: "text" },
    { name: "coffiePrice", type: "number" },
    { name: "highCofeine", type: "boolean" },
  ];

  return (
    <div>
      <PersistentDrawerRight items={items} title="داشبورد" />
      {fileds.map(function (x) {
        return <Dynamic filed={x} />;
      })}
    </div>
  );
};

export default Dashboard;
