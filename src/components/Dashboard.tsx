import PersistentDrawerRight from "./Sidebar";
import { connect } from "react-redux";

interface Iitem {
  name: string;
  color: string;
  route: string;
  title?: string;
}

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
      {/* <p>not err</p> */}
    </div>
  );
};

const mapStateToProps = (state) => {
  const myStates = {
    data: state.logiReducer.users,
  };
  console.log(myStates.data);
  return myStates;
};

export default connect(mapStateToProps, null)(Dashboard);
