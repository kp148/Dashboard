import React, { useState } from 'react';
import "./edit.css"
// import React from 'react'

function Editpayroll() {
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        <>
            <div className='edit-cont'>
            <h1 className='edit-name'>Edit Payroll</h1>
                <div className='entry'></div>
                <div className='entry1'></div>
                <div className='entry3'></div>
                <div className='entry2'></div>
                <div className='entry4'></div>
            </div>
            
        </>
    )
}

export default Editpayroll
