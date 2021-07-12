import { connect } from "react-redux";
import { useState, useEffect } from "react";
const Recent = () => {
  const [local, setLocal] = useState<string[] | null>();
  useEffect(() => {
    const convert: string[] = JSON.parse(
      localStorage.getItem("recently") ?? ""
    );
    setLocal(convert);
  }, []);

  return (
    <>
      {local?.map((x) => (
        <div
          style={{
            background: "blue",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            color: "#ffff",
          }}
        >
          <p style={{ background: "red" }}>{x}</p>
        </div>
      ))}
    </>
  );
};
const mapDispatchToProps = (disPatch) => {
  // console.log("dispatch");
};
export default connect(null, mapDispatchToProps)(Recent);
