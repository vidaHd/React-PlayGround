import React from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
// import useValid from "./CustomHook";
import json from "../../json.json";
import _ from "lodash";

function Validate(props) {
  const mainJson = JSON.parse(json);

  // function monyOfFood(mainJson) {
  //   const returnObj = {};

  //   const kababId = food.kabab.id,
  //     jojeId = +food.jooje.id;

  //   const KababPrice = +food.kabab.price;
  //   const joojePrice = +food.jooje.price;

  //   const orderByKabab = order.filter((x) => kababId == x.foodId),
  //     orderByJoje = order.filter((x) => jojeId == x.foodId),
  //     presonOrderByKabab1 = orderByKabab.filter((x) => x.studentId === 1),
  //     personOrderByJoje1 = orderByJoje.filter((x) => x.studentId === 1),
  //     presonOrderByKabab2 = orderByKabab.filter((x) => x.studentId === 2),
  //     personOrderByJoje2 = orderByJoje.filter((x) => x.studentId === 2),
  //     presonOrderByKabab3 = orderByKabab.filter((x) => x.studentId === 3),
  //     personOrderByJoje3 = orderByJoje.filter((x) => x.studentId === 3),
  //     presonOrderByKabab4 = orderByKabab.filter((x) => x.studentId === 4),
  //     personOrderByJoje4 = orderByJoje.filter((x) => x.studentId === 4),
  //     lgPersonKabab1 = presonOrderByKabab1.length,
  //     lgPersonJoje1 = personOrderByJoje1.length,
  //     lgPersonKabab2 = presonOrderByKabab2.length,
  //     lgPersonJoje2 = personOrderByJoje2.length,
  //     lgPersonKabab3 = presonOrderByKabab3.length,
  //     lgPersonJoje3 = personOrderByJoje3.length,
  //     lgPersonKabab4 = presonOrderByKabab4.length,
  //     lgPersonJoje4 = personOrderByJoje4.length;

  //   const ComputingKabab1 = KababPrice * lgPersonKabab1,
  //     ComputingJoje1 = joojePrice * lgPersonJoje1,
  //     finishComputing1 = +ComputingKabab1 + ComputingJoje1,
  //     ComputingKabab2 = KababPrice * lgPersonKabab2,
  //     ComputingJoje2 = joojePrice * lgPersonJoje2,
  //     finishComputing2 = +ComputingKabab2 + ComputingJoje2,
  //     ComputingKabab3 = KababPrice * lgPersonKabab3,
  //     ComputingJoje3 = +joojePrice * lgPersonJoje3,
  //     finishComputing3 = +ComputingKabab3 + ComputingJoje3,
  //     ComputingKabab4 = KababPrice * lgPersonKabab4,
  //     ComputingJoje4 = +joojePrice * lgPersonJoje4,
  //     finishComputing4 = +ComputingKabab4 + ComputingJoje4;

  //   const NewArrPerson1 = presonOrderByKabab1.map(function (i) {
  //       return i.studentId;
  //     }),
  //     NewArrPerson2 = presonOrderByKabab2.map(function (i) {
  //       return i.studentId;
  //     }),
  //     NewArrPerson3 = presonOrderByKabab3.map(function (i) {
  //       return i.studentId;
  //     }),
  //     NewArrPerson4 = presonOrderByKabab4.map(function (i) {
  //       return i.studentId;
  //     });

  //   const newListPerson1 = listStudent.filter((x) => x.id === NewArrPerson1[0]),
  //     newListPerson2 = listStudent.filter((x) => x.id === NewArrPerson2[0]),
  //     newListPerson3 = listStudent.filter((x) => x.id === NewArrPerson3[0]),
  //     newListPerson4 = listStudent.filter((x) => x.id === NewArrPerson4[0]);

  //   returnObj[
  //     `${newListPerson1.map(function (i) {
  //       return i.fName;
  //     })}`
  //   ] = `${Number(finishComputing1)}`;

  //   returnObj[
  //     `${newListPerson2.map(function (i) {
  //       return i.fName;
  //     })}`
  //   ] = `${Number(finishComputing2)}`;

  //   returnObj[
  //     `${newListPerson3.map(function (i) {
  //       return i.fName;
  //     })}`
  //   ] = `${Number(finishComputing3)}`;

  //   returnObj[
  //     `${newListPerson4.map(function (i) {
  //       return i.fName;
  //     })}`
  //   ] = `${Number(finishComputing4)}`;
  //   console.log(returnObj);
  // }

  const getFoodPricePerStudent = (mainJson) => {
    const orders = mainJson.selfOrders;
    const foods = mainJson.selfService.foods;
    const students = mainJson.students;

    const result = {};
    students.forEach((student) => {
      let price = 0;

      orders.forEach((order) => {
        if (order.studentId == student.id) {
          for (const foodName in foods) {
            if (foods[foodName].id === order.foodId) {
              price += +foods[foodName].price;
            }
          }
        }
      });

      result[student.fName] = price;
    });

    return result;
  };

  console.log(getFoodPricePerStudent(mainJson), "getFoodPricePerStudent");

  // monyOfFood(mainJson);
  // console.log(monyOfFood(mainJson), "monyOfFood");

  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "30%",
          margin: "auto",
          marginTop: "30px",
        }}
      >
        <TextField
          name="name"
          id="standard-basic"
          label="Standard"
          // onChange={onChangeInput}
          // value={foo}
        />
        <TextField
          id="standard-basic"
          label="Standaard"
          // onChange={onChangeInput}
          // value={foo}
        />
        <Button
          variant="contained"
          color="primary"
          style={{ marginTop: "20px" }}
          // onClick={handleValid}
        >
          check Valid
        </Button>
      </div>
    </>
  );
}
export default Validate;
