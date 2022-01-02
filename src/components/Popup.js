import React from 'react'
import './Popup.css'
import GenericButton from './GenericButton'

function Popup( props ) {
    const PopupClose = () => {
        props.setButtonPopup(false)
    }

    // Arrow function to hook verify - Setpopupbutton(True/false)
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
