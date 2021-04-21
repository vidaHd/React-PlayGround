import PersistentDrawerRight from "./Sidebar";
import { Iitem } from "../interface/interface";

const Dashboard = (props) => {
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
