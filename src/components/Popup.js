import React from 'react'
import '../components-css/Popup.css'
import GenericButton from '../pages/GenericButton'

function Popup( props ) {
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