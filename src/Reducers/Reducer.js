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
  flag:false
};
export function Calculation(state = initialCal, action) {
  switch (action.type) {
    case EQUATE_NUM:
      console.log(state)
      
      if(state.num1 === 'Infinity'){
        return {
          ...state,
          num2: '',
          sign: ''
        }
      }else if(state.num1 === 'Result is undefined'){
        return  {
          ...state,
          num2: '',
          sign: ''
        }
      }
      if (String(state.num2).includes(".") && action.payload === '.') {
        console.log('num2 ka .')
        console.log(state)
        return state
      } else if (state.sign !== '') {
        return { ...state, num2: state.num2 + action.payload };
      }

      if (String(state.num1).includes(".") && action.payload === '.') {
        console.log('num1 ka .')
        console.log(state)
        return state
      } else {
        console.log(state.num1)
        if(state.flag){
          return {
            ...state,
            num1: action.payload,
            flag:false
          };
        }
        return {
          ...state,
          num1: state.num1 + action.payload,
        };
      }
        
    case SIGN:
      if(state.num1 === '.'){
        return{
          ...state,
          sign: ''
        }
      }
      // if (state.sign !== "") {
      //   return state
      // }
      if(state.num1 === '' && action.payload !== '-'){
        return state
      }else{
        return {
          ...state,
          sign: action.payload,
        };
      }
      
      

    case ADD_NUM:
      return {
        ...state,
        num1: Number(state.num1) + Number(state.num2),
        num2: "",
        sign: "",
        flag:true
      };

    case SUBTRACT_NUM:
      return {
        ...state,
        num1: Number(state.num1) - Number(state.num2),
        num2: "",
        sign: "",
        flag:true
      };

    case MULTIPLY_NUM:
      return {
        ...state,
        num1: Number(state.num1) * Number(state.num2),
        num2: "",
        sign: "",
        flag:true
      };

    case DIVIDE_NUM:
      return {
        ...state,
        num1: (Number(state.num1) / Number(state.num2)) || 'Result is undefined',
        num2: "",
        sign: "",
        flag:true
      };
      
    case CLEAR_ALL:
      return {
        ...state,
        num1: "",
        num2: "",
        sign: "",
      };

    case CLEAR:

      if(state.num1 === ''){
        return state
      }
      if (state.num2) {
        const preNum = state?.num2;
        const sts =preNum.slice(0,-1);
        console.log('num2',{sts})
        return {
          ...state,
          num2: sts,
        };
      } else if (state?.sign && !state.num2) {
        console.log("state.sign",state.sign);

        const preNum = state.sign;
        const signsts = preNum.slice(0,-1);
        console.log({signsts});
        console.log({...state})
        return {
          ...state,
          sign: signsts,
        };
      }else if (state.num1) {
        console.log("state.num1",state.num1);

        const preNum = String(state?.num1);
        console.log({preNum})
        const numsts  = preNum?.slice(0, -1);
        console.log('num1',{numsts},{preNum})
        return {
          ...state,
          num1:numsts,
        };
      }
      break;
    default:
      return state;
  }
}
