import PersistentDrawerRight from "./Sidebar";

interface Iitem {
  name: string;
  color: string;
  route: string;
}

const Dashboard = () => {
  const items: Iitem[] = [
    {
      name: "product",
      color: "#000",
      route: "/product",
    },
    {
      name: "setting",
      color: "#CD5C5C",
      route: "/product",
    },
    {
      name: "orders",
      color: "#000",
      route: "/order",
    },
  ];

  return (
    <div>
      <PersistentDrawerRight items={items} title="داشبورد" />
    </div>
  );
};
export default Dashboard;
