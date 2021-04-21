import PersistentDrawerRight from "./Sidebar";
import ViewOrder from "./ViewOrders";

import { Iitem } from "../interface/interface";

const Dashboard = () => {
  const items: Iitem[] = [
    {
      name: "product",
      color: "#000",
      route: "/product",
    },
    {
      name: "dashboard",
      color: "#000",
      route: "/Dashboard",
    },
  ];

  return (
    <div>
      <ViewOrder />
      <PersistentDrawerRight items={items} title="سفارشات" />
    </div>
  );
};
export default Dashboard;
