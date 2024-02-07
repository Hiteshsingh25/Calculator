import React from 'react'

export default function OpertionButton({children,onClick}){
    return(
        <>
        <button className='opbutton col-3' onClick={onClick}>
            {children}
        </button>
        </>
    )
}