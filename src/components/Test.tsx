import React from "react";
import { View } from "./ViewProducts";
import { getData } from "../Utilities/ApiTest";
import PersistentDrawerRight from "./Sidebar";
import Login from "./Login";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
  Link,
} from "react-router-dom";
import { useHistory } from "react-router-dom";

interface Iitem {
  name: string;
  color: string;
  route?: string;
}

const showAnswer = (number: number): string => {
  const dif = `answer is ${number}`;
  return dif;
};
const showAnswerTow = (text: string): string => {
  const dif = `my ${text}`;
  return dif;
};
const sumNumbers = (arr: number[]): number => {
  let foo = 0;
  arr.forEach((num) => {
    foo += num;
  });
  return foo;
};
const HandelerOdds = (arr: number[]): number[] => {
  const bar: Array<number> = [];
  arr.forEach((odd: number) => {
    if (odd % 2 !== 0) {
      bar.push(odd);
    }
  });
  return bar;
};
const FiveOfNumbers = (arr: number[]): number[] => {
  const numFive: number[] = [];
  const num = 5;
  arr.forEach((five) => {
    if (five === num) {
      numFive.push(five);
    }
  });
  return numFive;
};
const sortNumbers = (arr: number[]): number[] => {
  const number: number[] = [];
  arr.forEach((s) => {
    number.push(s);
  });
  const barz = number.sort();
  barz.reverse();
  return barz;
};
const ConvertNumber = (arr: number[]): string[] => {
  const conver: string[] = [];
  arr.forEach((a) => {
    conver.push(`vida${a}`);
  });
  return conver;
};
const HandelerduplicateNumbers = (arr: number[]): boolean => {
  let hasDuplicat = false;
  arr.forEach((a) => {
    let numberInArry = 0;
    arr.forEach((b) => {
      if (a == b) {
        numberInArry++;
      }
    });
    if (numberInArry > 1) {
      hasDuplicat = true;
    }
  });
  return hasDuplicat;
};
export interface Iobj {
  sumNumbers: string;
  HandelerOdds: number[];
  FiveOfNumbers: number[];
  sortNumbers: number[];
  ConvertNumber: string[];
  HandelerduplicateNumbers: boolean;
}

const Func = () => {
  const calculate = () => {
    const arr: number[] = [2, 4, 8, 5, 3, 2];
    const obj: Iobj = {
      sumNumbers: "",
      HandelerOdds: [],
      FiveOfNumbers: [],
      sortNumbers: [],
      ConvertNumber: [],
      HandelerduplicateNumbers: true,
    };

    const answerSum = sumNumbers(arr);
    obj.sumNumbers = showAnswerTow(showAnswer(answerSum));

    const answerOdds = HandelerOdds(arr);
    obj.HandelerOdds = answerOdds;

    const answerNumF = FiveOfNumbers(arr);
    obj.FiveOfNumbers = answerNumF;

    const answersort = sortNumbers(arr);
    obj.sortNumbers = answersort;

    const answerConver = ConvertNumber(arr);
    obj.ConvertNumber = answerConver;

    const answerduplicate = HandelerduplicateNumbers(arr);
    obj.HandelerduplicateNumbers = answerduplicate;
    console.log(obj);
  };

  const apiHandeler = () => {
    getData("https://jsonplaceholder.typicode.com/todos/1")
      .then((respons) => {
        console.log(respons);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        console.log("done");
      });
  };
  const items: Iitem[] = [
    {
      name: "product",
      color: "#000",
      route: "/page-2",
    },
    {
      name: "product",
      color: "#000",
      route: "/page-2",
    },
  ];

  return (
    <div>
      {/* <button onClick={calculate} />
      <button onClick={apiHandeler} value="api">
        api
      </button> */}
      <View />
      {/* <PersistentDrawerRight items={items} /> */}
    </div>
  );
};
export default Func;

// import React from "react";
// import PropTypes from "prop-types";

// const CounterView = (props) => {
//   CounterView.prototype = {
//     props: PropTypes.number,
//   };

//   return (
//     <div>
//       {/* <input type="number" value={props.InputValue}/> */}

//       <p style={{ color: "white" }}>{props.InputValu}</p>
//       <p style={{ color: "white" }}>{props.Result}</p>
//       <button onClick={props.add}>+</button>
//       <button onClick={props.Mines}>-</button>
//       <button onClick={props.Res}>reset</button>
//       <div>
//         <input
//           type="text"
//           placeholder="focus1"
//           ref={props.focus}
//           onKeyDown={props.focusClick}
//         />
//       </div>
//       <div>
//         <input type="text" placeholder="focus2" ref={props.focus2} />
//       </div>
//       <div>
//         <input value={props.InputValu} type="text" placeholder="focus2" />
//       </div>
//     </div>
//   );
// };

// export default CounterView;

// import React, { useState, useEffect, useRef } from "react";
// // import CounterView from "./CountrView";
// import PropTypes from "prop-types";

// import Counter from './Counter';
// class Counter extends Component {
//   constructor(props) {
//     super(props);
//     this.funcPluc = this.funcPluc.bind(this);
//     this.funcMines = this.funcMines.bind(this);
//     this.funResult = this.funResult.bind(this);
//     this.funcRes = this.funcRes.bind(this);
//    this.state={
//     number:0,
//     result:1
//     }
//   }
//   funcRes=()=>{
//     this.setState({
//       number:this.state.number*0
//     })
//   }
//   funcPluc = () => {

//    this.setState({
//        number:this.state.number+1

//    })
//    console.log(this.state)

//  };
//   funcMines=()=>{
//    this.setState({
//     number:this.state.number-1
//  })
//   }
//   funResult=()=>{}
//   render() {
//     return (
//       <React.Fragment>

//         <CounterView add={this.funcPluc} Mines={this.funcMines} InputValu={this.state.number} Result={this.state.number*10} Res={this.funcRes}/>

//       </React.Fragment>
//     );
//   }
// }
// interface InputRef {
//   focus: HTMLInputElement;
// }
// function Counter() {
//   Counter.prototype = {};
//   const [number, setNumber] = useState<number>(0);
//   const [double, setDouble] = useState<number>(0);

//   const inputRef = useRef<HTMLInputElement>();
//   const inputTowRef = useRef<HTMLInputElement>();

//   useEffect(() => {
//     setDouble((double: number) => number * 10);
//   }, [number]);

//   useEffect(() => {
//     if (inputRef.current && inputRef.current.focus) {
//       inputRef.current.focus();
//     }
//   }, []);

//   function FocusOne(e) {
//     if (e.keyCode === 13 && inputRef.current && inputRef.current.focus) {
//       inputRef.current.focus();
//     }
//   }
//   function funcPluc(): void {
//     setNumber((number: number) => number + 1);
//   }
//   function funcMines(): void {
//     setNumber((number: number) => number - 1);
//   }
//   function funcRes(): void {
//     setNumber((number: number) => number * 0);
//   }

//   return (
//     <React.Fragment>
//       {/* <CounterView
//         Result={double}
//         add={funcPluc}
//         Mines={funcMines}
//         InputValu={number}
//         Res={funcRes}
//         focus={inputRef}
//         focus2={inputTowRef}
//         focusClick={FocusOne}
//       /> */}
//     </React.Fragment>
//   );
// }

// export default Counter;
// import React from "react";
// import { View } from "./View";
// import { getData } from "../Utilities/ApiTest";
// import PersistentDrawerRight from "./Sidebar";
// import Login from "./Login";
// import {
//   BrowserRouter as Router,
//   Route,
//   Redirect,
//   Switch,
//   Link,
// } from "react-router-dom";
// import { useHistory } from "react-router-dom";

// interface Iitem {
//   name: string;
//   color: string;
//   route?: string;
// }

// const showAnswer = (number: number): string => {
//   const dif = `answer is ${number}`;
//   return dif;
// };
// const showAnswerTow = (text: string): string => {
//   const dif = `my ${text}`;
//   return dif;
// };
// const sumNumbers = (arr: number[]): number => {
//   let foo = 0;
//   arr.forEach((num) => {
//     foo += num;
//   });
//   return foo;
// };
// const HandelerOdds = (arr: number[]): number[] => {
//   const bar: Array<number> = [];
//   arr.forEach((odd: number) => {
//     if (odd % 2 !== 0) {
//       bar.push(odd);
//     }
//   });
//   return bar;
// };
// const FiveOfNumbers = (arr: number[]): number[] => {
//   const numFive: number[] = [];
//   const num = 5;
//   arr.forEach((five) => {
//     if (five === num) {
//       numFive.push(five);
//     }
//   });
//   return numFive;
// };
// const sortNumbers = (arr: number[]): number[] => {
//   const number: number[] = [];
//   arr.forEach((s) => {
//     number.push(s);
//   });
//   const barz = number.sort();
//   barz.reverse();
//   return barz;
// };
// const ConvertNumber = (arr: number[]): string[] => {
//   const conver: string[] = [];
//   arr.forEach((a) => {
//     conver.push(`vida${a}`);
//   });
//   return conver;
// };
// const HandelerduplicateNumbers = (arr: number[]): boolean => {
//   let hasDuplicat = false;
//   arr.forEach((a) => {
//     let numberInArry = 0;
//     arr.forEach((b) => {
//       if (a == b) {
//         numberInArry++;
//       }
//     });
//     if (numberInArry > 1) {
//       hasDuplicat = true;
//     }
//   });
//   return hasDuplicat;
// };
// export interface Iobj {
//   sumNumbers: string;
//   HandelerOdds: number[];
//   FiveOfNumbers: number[];
//   sortNumbers: number[];
//   ConvertNumber: string[];
//   HandelerduplicateNumbers: boolean;
// }

// const Func = () => {
//   const calculate = () => {
//     const arr: number[] = [2, 4, 8, 5, 3, 2];
//     const obj: Iobj = {
//       sumNumbers: "",
//       HandelerOdds: [],
//       FiveOfNumbers: [],
//       sortNumbers: [],
//       ConvertNumber: [],
//       HandelerduplicateNumbers: true,
//     };

//     const answerSum = sumNumbers(arr);
//     obj.sumNumbers = showAnswerTow(showAnswer(answerSum));

//     const answerOdds = HandelerOdds(arr);
//     obj.HandelerOdds = answerOdds;

//     const answerNumF = FiveOfNumbers(arr);
//     obj.FiveOfNumbers = answerNumF;

//     const answersort = sortNumbers(arr);
//     obj.sortNumbers = answersort;

//     const answerConver = ConvertNumber(arr);
//     obj.ConvertNumber = answerConver;

//     const answerduplicate = HandelerduplicateNumbers(arr);
//     obj.HandelerduplicateNumbers = answerduplicate;
//     console.log(obj);
//   };

//   const apiHandeler = () => {
//     getData("https://jsonplaceholder.typicode.com/todos/1")
//       .then((respons) => {
//         console.log(respons);
//       })
//       .catch((err) => {
//         console.log(err);
//       })
//       .finally(() => {
//         console.log("done");
//       });
//   };
//   const items: Iitem[] = [
//     {
//       name: "product",
//       color: "#000",
//       route: "/page-2",
//     },
//     {
//       name: "product",
//       color: "#000",
//       route: "/page-2",
//     },
//   ];

//   return (
//     <div>
//       {/* <button onClick={calculate} />
//       <button onClick={apiHandeler} value="api">
//         api
//       </button> */}
//       <View />
//       <PersistentDrawerRight items={items} />
//     </div>
//   );
// };
// export default Func;

// - [ ] file 1.png dar root proje bayat esmesi be 404 tahir kone va barrage ax ha bayed yek pooshe ba nam asset egad shavad///ok

// - [ ] app.js : line 3-7-9-10 import shore vale estefade nashode . hamchenin ye enter ezafe been import ha vojood dare.////ok
// - [ ] app.js line 18 esme rout ha monaseb list va be jay /page-1 masala az kalameye dashboard estefadeh konid////ok
// - [ ] app.js line 10 esme rout ha monaseb list va be jay /page-2 masala az kalameye products estefadeh konid////ok
// - [ ] login.js line 1 - 10-11-13 import bedoone estefadeh vojood darad ////ok
// - [ ]  login.js khat 15 ta 21 import shodeh estefadeh nashode////ok
// - [ ] login.js line 23 interface Ilogin tarif shore vali estefadeh nasconde////ok
// - [ ] login.js line 62 elementi ba on vane bull tarif rhode ke estefadeh nashode ///ok. hamchenin style ham barayeesh egad shoe ke oon ham estefadeh nashode///ok
// - [ ] login.js khat 64-65 use state ha typhoon moshakhas nashode . hamchenin name state peat be tanhayi moshakhas konandeye kari ke anjam miden nist va bayad be repeatjpasswort taghir peyda konad///ok
// - [ ] login.js 68 tebghe oosoole self-document name tase be “validate” taghir konad
// - [ ] safheye login bayan bad az por kardane username ba click bar roue enter be field paying focus shavad va hanchenin be paninis va pas az for kardane tekrare kalameye ooboor bayad ba zadane enter bar roe dome login click shavad 
// - [ ] login.js lin 94 niyaz be tarife moteghayere jodagane nist . az oonjayi ke tabe validar hatman true ya false bar migardanad niyazi nist ke aval an ra erra konim va native ash ra dakhele moteghayeri berzim va moteghayer ra check konim . hamchenin dar java script vaghti start tarif mikonim chezi ke dar start minevisim agar true shad short era mishavad va agar false bashed start era nemishavad . pas dar khat 97 isValidation === true yek kare izafi ast , zira isValidation khodesh true ya false hasheesh va niyazi nist dobare true ya false boodanesho check konim . yani tab indoors ham kar mikken :

// if (isValidation) {
//         history.push("/page-1");
//       }

//  hala chou tase moon khodesh boolean barmigardoone mitoonim moteghayere isValidation
//  khat 95 ro kollan pak konim va be cash intérim kolas benvisim :

//     if (validation()) {
//       history.push("/page-1");
//     }
//okk
//  intro tabe era sode va javabesh tolte share guardar migri va agar trur bood start era khahad shod.?wtf??????:///
// - [ ] dashboard.tsx line 7 rout ekhtiyari nist a nabayad ? dashte bashad///ok
// - [ ] dashbourd line 11 history tarif shade vale estefadeh nashode///ok

// - [ ] sidebar.tsx line 26 rout ekhtiyari nist a nabayad ? dashte bashad////ok
// - [ ] sidebar.tsx line 23 va 94 interface namsh Iprops dorost nist va bayad esme hamin component bash . masalana IPersistentDrawerRight///ok

// - [ ] sidebar line 100 history tarif shooed estefadeh nashoeh///ok
// - [ ] sidebar line 103 niyazi be tariff moteghayer ezafe be name my items nist va mitavanid az haman items bare set state karina stefadeh namayid ///ok
///nakardm payyni
// - [ ]  sidebar va toolbar nabayad ba ham ek component bashand amma estesnaan eshkali nadarad . amma dar line 103 yek tag typography vojood farad ke hic texti be aan kadeh nashodeh ask . in text title safe ast va agar sidebar va hedear gharar ast yeki bashad hade aghal bayan name safha dar har kolayi ke side bar farakhani shodeh be sidebar be vasileye props pass dad shavad va dar header be on vane title safe semi ke az props gerefteh shooed namayesh dade shavad dar in tase typography.
// - [ ] dar sidebar aardeon haye ezafe vojood darad ke baya hazf shavad . fagota chiz hadi baghi bemanad ke niyaz dariim??????
// - [ ] dar safheye not found.tsx khat 4-5-6-7-8 import hay vojood dara ke estefadeh nashodeh and
// - [ ] dar safheye product.tsx import line 1 -4—6-7-8-9-10-11 import ezafe///ok
// - [ ] product.tsx interface esme esteban (bayad esme component bashed)///ok
// - [ ] product.tsx ninja ham merle dashboard title safe be side bar dad nashodeh ast.//?
// - [ ] view.tsx line 1 import ezafe
// - [ ] view.tsx name view khaki bare in component monaseb nist va neshan nemidahad ke view che componenti ast . name component ra be products via taghir david.////ok
// - [ ] view.tsx line 79 type any estfadeh nakonid va dar soot lozoom barayash interface benevisid.
// - [ ] view.tsx line 85 , agar bare avalon bar rose yek computers jaded in safe bar shavad objjason undefined hasheesh va va dar in khat bar name crash mikonad sire z objjason.length estefadeh carder red . short benevisid ke gable az check kardane objjson undefined naboodanesh ro check konam ya ham meghdare default barayash begozarid
// - [ ] view line 107 the any estefadeh atoned
// - [ ] view line 134 name tase bayed be validate taghir onad
// - [ ] view kine 161 - 163 daghighan merle tozihe bala behtar ast kholase konid va az neveshtane moteghayere ezxafe kkhod dari konid.
// zira tarife har moteghayer meghdari ram az system eshgha mikonad va baser prdazeshe ezafe mishavand
// - [ ] — ba tashakkor —
