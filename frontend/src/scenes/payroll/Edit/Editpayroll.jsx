// import React, { useState } from 'react';
// import "./edit.css"
// // import React from 'react'

// function Editpayroll() {
//     const [anchorEl, setAnchorEl] = useState(null);
//     const open = Boolean(anchorEl);

//     const handleClick = (event) => {
//         setAnchorEl(event.currentTarget);
//     };

//     const handleClose = () => {
//         setAnchorEl(null);
//     };
//     return (
//         <>
//             <div className='edit-cont'>
//                 <h1 className='edit-name'>Edit Payroll</h1>
//                 <div className='entry'>
//                     <input className='input' type="text" />
//                     <button className='edit'>Edit</button>
//                 </div>
//                 <div className='entry1'>
//                     <button className='edit1'>Edit</button>
//                 </div>
//                 <div className='entry3'>
//                     <button className='edit3'>Edit</button>
//                 </div>
//                 <div className='entry2'>
//                     <button className='edit2'>Edit</button>
//                 </div>
//                 <div className='entry4'>
//                     <button className='edit4'>Edit</button>
//                 </div>
//             </div>

//         </>
//     )
// }

// export default Editpayroll



import React, { useState, useEffect } from 'react';
import "./edit.css";

function Editpayroll() {
    const [isEditing, setIsEditing] = useState(false);
    const [inputValue, setInputValue] = useState('');

    useEffect(() => {
        // डेटा को localStorage से लोड करना
        const savedValue = localStorage.getItem('inputValue');
        if (savedValue) {
            setInputValue(savedValue);
        }

        const handleBeforeUnload = (event) => {
            if (isEditing) {
                event.preventDefault(); // कुछ ब्राउज़र में यह ज़रूरी हो सकता है
                event.returnValue = ''; // कुछ ब्राउज़र पर डायलॉग दिखाने के लिए यह जरूरी है
            }
        };

        window.addEventListener('beforeunload', handleBeforeUnload);

        return () => {
            window.removeEventListener('beforeunload', handleBeforeUnload);
        };
    }, [isEditing]);

    const handleEditClick = () => {
        setIsEditing(true);
    };

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

    const handleSaveClick = () => {
        setIsEditing(false);
        localStorage.setItem('inputValue', inputValue);
    };

    return (
        <>
            <div className='edit-cont'>
                <h1 className='edit-name'>Edit Payroll</h1>
                <div className='entry'>
                    <input
                        className='input'
                        type="text"
                        value={inputValue}
                        onChange={handleInputChange}
                        disabled={!isEditing}  // इनपुट को एडिट मोड में ही सक्षम किया जाता है।
                    />
                    <button className='edit' onClick={handleEditClick}>
                        Edit
                    </button>

                    {isEditing && (
                        <button className='save-btn' onClick={handleSaveClick}>
                            Save
                        </button>
                    )}
                </div>
                <div className='entry1'>
                <input
                        className='input'
                        type="text"
                        value={inputValue}
                        onChange={handleInputChange}
                        disabled={!isEditing}  // इनपुट को एडिट मोड में ही सक्षम किया जाता है।
                    />
                    <button className='edit' onClick={handleEditClick}>
                        Edit
                    </button>
                </div>
            </div>
        </>
    );
}

export default Editpayroll;




