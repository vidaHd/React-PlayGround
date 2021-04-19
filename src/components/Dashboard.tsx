import PersistentDrawerRight from "./Sidebar";
import React from "react";
import { connect } from "react-redux";
import loginReducer from "../redux/reducer/loginReducer";
import { loginUser } from "../redux/actions";

interface Iitem {
  name: string;
  color: string;
  route: string;
  title?: string;
}

const Dashboard = (props) => {
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
      <PersistentDrawerRight items={items} title="داشبورد" data={props.data} />
    </div>
  );
};
const mapStateToProps = (state) => {
  const myStates = {
    data: state.logiReducer.users,
  };
  return myStates;
};

export default connect(mapStateToProps, null)(Dashboard);
