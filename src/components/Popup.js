import React from 'react'
import 'Popup.css'

function Popup({props, error}) {
    return ( props.trigger ) ? (
        <div className='popup'>
            <div className="popup-inner">
                {console.log(error.children)}
                <button className="close-btn">Close</button>
                { props.children }
                
            </div>
        </div>
    ) : ""
}

export default Popup
