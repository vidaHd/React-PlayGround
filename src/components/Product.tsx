import { View } from "./ViewProducts";
import PersistentDrawerRight from "./Sidebar";

interface Iproduct {
  name: string;
  color: string;
  route: string;
}
const Product = () => {
  const items: Iproduct[] = [
    {
      name: "dashboard",
      color: "#000",
      route: "/Dashboard",
    },

    {
      name: "orders",
      color: "#000",
      route: "/order",
    },
  ];

  return (
    <div>
      <View />
      <PersistentDrawerRight items={items} title="محصولات" />
    </div>
  );
};
export default Product;
