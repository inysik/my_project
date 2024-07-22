// import React from "react"

export default function Button({ disabled, onClick, text, isActive,...props }){



    return(

        <button 
        style={{
            cursor: isActive ? 'pointer' : 'not-allowed',
            opacity: disabled ? 0.5 : 1,}
        }
         onClick={onClick}
         disabled={disabled}
         className={props.className}
        >{text}</button>
    )
}