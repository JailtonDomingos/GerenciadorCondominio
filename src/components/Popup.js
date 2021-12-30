import React from 'react'
import './Popup.css'
import GenericButton from './GenericButton'

function Popup( props ) {
    //setError, buttonPopup, setButtonPopup, message, error
    //Clean error
    const PopupClose = () => {
        props.setButtonPopup(false)
    }

    return ( props.buttonPopup ) ? (
        <div className='popup'>
            <div className="popup-inner">
                <h3> {props.message} </h3>
                <GenericButton className='close-btn' event={ PopupClose } message={'Fechar'}/>
                
            </div>
        </div>
    ) : ""
}

export default Popup
//{ props.children }
//<button className="close-btn" onClick={() => props.setTrigger(false)} >Button</button>