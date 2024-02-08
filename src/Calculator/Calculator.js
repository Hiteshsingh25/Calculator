import React from 'react'
import './Calculator.css'
import {useSelector,useDispatch} from  'react-redux'
import Button from './Button'
import OpertionButton from './OperationButton'
import { sign, equateNum, addNum, subtract, multiply, divide, allclear, clear} from '../Actions/Action'



export default function Calculator(){

    const num = useSelector(state => state.num1)
    const num2 = useSelector(state => state.num2)
    const  signs = useSelector(state => state.sign)
    const dispatch = useDispatch()
    // console.log(num2)
    // console.log(signs)


    const handleResult=()=>{
        if(num2 === '' || num2 === '.'){
            return null
        }
        if(signs === '+'){
            dispatch(addNum())
        }else if(signs === '-'){
            dispatch(subtract())
        }else if(signs === '*'){
            dispatch(multiply())
        }else if(signs === '÷'){
            dispatch(divide())
        }
    }

    return(
        <>
        <div className='cal'>
            <div className='screen'>
                <div className='nums'>{num}{signs}{num2}</div>
            </div>
            <div className='col-12'>
            <button className='clsbutton col-5' onClick={()=>dispatch(allclear())}>AC</button>
            <button 
            className='clsbutton col-4' 
            onClick={()=>{
                if(num === 'Result is undefined'){
                    dispatch(allclear())
                }else if(num === Number(Infinity)){
                    dispatch(allclear())
                }else{ dispatch(clear())}
                }}>C</button>
            {/* onClick={()=>dispatch(clear())} */}
            <OpertionButton 
            value='÷' 
            onClick={()=>{
                dispatch(sign('÷'),handleResult())
                // handleResult()
                }}>÷</OpertionButton>
            <Button value='1' onClick={()=>dispatch(equateNum('1'))}>1</Button>
            <Button value='2' onClick={()=>dispatch(equateNum('2'))}>2</Button>
            <Button value='3' onClick={()=>dispatch(equateNum('3'))}>3</Button>
            <OpertionButton 
            value='+' 
            onClick={()=>{
                dispatch(sign('+'),handleResult())
                // handleResult()
                }}>+</OpertionButton>
            <Button value='4' onClick={()=>dispatch(equateNum('4'))}>4</Button>
            <Button value='5' onClick={()=>dispatch(equateNum('5'))}>5</Button>
            <Button value='6' onClick={()=>dispatch(equateNum('6'))}>6</Button>
            <OpertionButton 
            value='-' 
            onClick={()=>{
                dispatch(sign('-'),handleResult())
                // handleResult()
                }}>-</OpertionButton>
            <Button value='7' onClick={()=>dispatch(equateNum('7'))}>7</Button>
            <Button value='8' onClick={()=>dispatch(equateNum('8'))}>8</Button>
            <Button value='9' onClick={()=>dispatch(equateNum('9'))}>9</Button>
            <OpertionButton 
            value='*' 
            onClick={()=>{
                dispatch(sign('*'),handleResult())
                // handleResult()
                }}>*</OpertionButton>
            <Button value='00' onClick={()=>dispatch(equateNum('00'))}>00</Button>
            <Button value='0' onClick={()=>dispatch(equateNum('0'))}>0</Button>
            <Button value='.' 
            onClick={()=>{
                if(num === ''){
                    dispatch(equateNum('0.')) 
                }else if(signs !== '' && num2 === ''){
                    dispatch(equateNum('0.')) 
                }else{
                dispatch(equateNum('.'))            
                }}}>.</Button>
            <OpertionButton value='=' onClick={()=>handleResult()}>=</OpertionButton>

            </div>
           <div>
            </div>
        </div>
        </>
    )
}