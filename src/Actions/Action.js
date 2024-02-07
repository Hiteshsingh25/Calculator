export const EQUATE_NUM = 'EQUATE_NUM'; 
export const SIGN = 'SIGN';
export const ADD_NUM = 'ADD_NUM';
export const SUBTRACT_NUM = 'SUBSTRACT_NUM';
export const MULTIPLY_NUM = 'MULTIPLY_NUM';
export const DIVIDE_NUM = 'DIVIDE_NUM';
export const CLEAR = 'CLEAR';
export const CLEAR_ALL = 'CLEAR_ALL';
export const DECIMAL= 'DECIMAL';

export function equateNum(payload){
    return{
     type: EQUATE_NUM,
     payload:payload
    }
 }


 export function sign(payload){
    return{
     type: SIGN,
     payload:payload
    }
 }


export function addNum(payload){
   return{
    type: ADD_NUM,
    payload:payload
   }
}

export  function subtract(payload){
    return{
        type:SUBTRACT_NUM,
        payload:payload
    }
}

export  function multiply(payload){
    return{
        type:MULTIPLY_NUM,
        payload:payload
    }
}

export  function divide(payload){
    return{
        type:DIVIDE_NUM,
        payload:payload
    }
}

export  function clear(payload){
    return{
        type:CLEAR,
        payload:payload
    }
}

export  function allclear(payload){
    return{
        type:CLEAR_ALL,
        payload:payload
    }
}

export function decimal(){
   return{
     type:DECIMAL
}}