import React from 'react'
import '../App.css'

const InputAddBtn = ({ showInputFields }) => {
    return (
        <div>
            <button className='add-button' onClick={showInputFields}>
                InputAdd
            </button>
        </div>
    )
}

export default InputAddBtn