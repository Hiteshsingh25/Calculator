import {
  ADD_NUM,
  CLEAR,
  CLEAR_ALL,
  DIVIDE_NUM,
  EQUATE_NUM,
  MULTIPLY_NUM,
  SIGN,
  SUBTRACT_NUM,
} from "../Actions/Action";

const initialCal = {
  num1: "",
  num2: "",
  sign: "",
};
export function Calculation(state = initialCal, action) {
  switch (action.type) {
    case EQUATE_NUM:
        if (state.num1.includes(".")) {
            console.log('running')
            console.log(state)
            return state;
          }else if (state.num2.includes(".")) {
            console.log('not running')
            return state
          }
          
          if (state.num1 !== "" && state.sign !== "") {
        return { ...state, num2: state.num2 + action.payload };
      } else {
        return {
          ...state,
          num1: state.num1 + action.payload,
        };
      }
     
    case SIGN:
      if (state.sign !== "") {
        return { ...state, sign: state.sign };
      }
      return {
        ...state,
        sign: state.sign + action.payload,
      };
    case ADD_NUM:
      return {
        ...state,
        num1: Number(state.num1) + Number(state.num2),
        num2: "",
        sign: "",
      };

    case SUBTRACT_NUM:
      return {
        ...state,
        num1: Number(state.num1) - Number(state.num2),
        num2: "",
        sign: "",
      };

    case MULTIPLY_NUM:
      return {
        ...state,
        num1: Number(state.num1) * Number(state.num2),
        num2: "",
        sign: "",
      };

    case DIVIDE_NUM:
      return {
        ...state,
        num1: Number(state.num1) / Number(state.num2),
        num2: "",
        sign: "",
      };

    case CLEAR_ALL:
      return {
        ...state,
        num1: "",
        num2: "",
        sign: "",
      };

    case CLEAR:
      //    if(state.num2 === '' && state.sign === ''){
      //     const pre = [...state.num1]
      //     pre.splice(pre.length - 1, 1)

      //     console.log({pre})
      //     return {
      //         ...state,
      //         num1: pre,
      //     }
      //    }else if(state.num2){
      //     const preNum = [...state.num2]
      //     preNum.splice(preNum.length - 1, 1)
      //     console.log({preNum})
      //     return{
      //         ...state,
      //         num2: preNum
      //     }
      //    }else if(state.num2 ==='' && state.num1 !== ''){
      //     const preSign = [...state.sign]
      //     preSign.splice(preSign.length - 1, 1)
      //     console.log({preSign})
      //     return {
      //         ...state,
      //         sign: preSign
      //     }
      //    }
      if (state.num2) {
          console.log("state.num2",state.num2);
        const preNum = [...state.num2];
        preNum.splice(preNum.length - 1, 1);
        return {
          ...state,
          num2: preNum[0],
        };
      } else if (state.sign) {
        console.log("state.sign",state.sign);

        const preNum = [...state.sign];
        preNum.splice(preNum.length - 1, 1);
        console.log({preNum})
        return {
          ...state,
          sign: preNum[0],
        };
      } else if (state.num1) {
        console.log("state.num1",state.num1);

        const preNum = [...state.num1];
        preNum.splice(preNum.length - 1, 1);
        return {
          ...state,
          num1: preNum[0],
        };
      }
    default:
      return state;
  }
}
