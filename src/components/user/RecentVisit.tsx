import { connect } from "react-redux";
import { useState, useEffect } from "react";

const Recent = () => {
  const [local, setLocal] = useState<string[]>([]);

  useEffect(() => {
    const convert: any = JSON.parse(localStorage.getItem("recently") ?? "");
    for (let i = 0; i < convert?.length; i++) {
      for (let j = 0; j < convert?.length; j++) {
        if (convert[i] == convert[j] && i !== j) {
          console.log(i, j, "yes");
          convert[j] = null;
        }
      }
    }
    setLocal(convert);
  }, []);
  // console.log(local);

  // useEffect(() => {
  //   const localUniq: any = [...local];
  //   for (let i = 0; i < localUniq?.length; i++) {
  //     for (let j = 0; j < localUniq?.length; j++) {
  //       if (localUniq[i] == localUniq[j] && i !== j) {
  //         console.log(i, j, "yes");
  //         localUniq[j] = null;
  //       }
  //     }
  //   }
  //   setLocal(localUniq);
  //   console.log(localUniq, "uniq");
  // }, [local]);

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
