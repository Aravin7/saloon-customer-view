import React from 'react'
import './Button.css'

export const Button = (props) => {
    console.log(props);
    return (
        <>  
            <button className={props.className}
                style={{
                    background:props.bcolor,
                    color:props.fcolor}} 
                >{props.text}
            </button>
        </>
    )
}
