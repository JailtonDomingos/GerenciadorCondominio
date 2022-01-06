import React from 'react'
import '../components-css/GenericButton.css'

function GenericButton( props ) { // Component button with standart system appearance  
    return (
        <button className={props.className} onClick={ props.event }> { props.message } </button>
    )
}

export default GenericButton

