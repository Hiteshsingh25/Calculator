import React from 'react'
import './Calculator.css'
export default function Button({children,onClick,value}){
    return(
        <button className='button col-3' value={value} onClick={onClick}>
            {children}
        </button>
    )
}