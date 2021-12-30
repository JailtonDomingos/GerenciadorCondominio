import React from 'react'
import './GenericButton.css'

function GenericButton( props ) {
    return (
        <button className={props.className} onClick={ props.event }> { props.message } </button>
    )
}

export default GenericButton

