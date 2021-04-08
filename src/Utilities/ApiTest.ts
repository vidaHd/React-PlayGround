import axios from "axios";

export const getData = (url) => {
  return new Promise((res, rej) => {
    axios
      .get(url)
      .then((apiResult) => {
        res(apiResult);
      })
      .catch((err) => {
        rej(err);
      });
  });
};

// const promisTest = new Promise((res, rej) => {
//   res("ok");
// });

// promisTest
//   .then((respons) => {
//     console.log(respons);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

//ورودی اول پرومیس ینی thenو دومی همون ریجکت هست ک با catch استفاده میکنیم
//دن ینی جواب رس برمیگردونه
