// import React, { useState, useEffect } from 'react';
// import "../payroll/payroll.css";
// import LineChart from "../../components/LineChart";
// import { Box, Button, Menu, MenuItem } from '@mui/material';
// import { Link } from 'react-router-dom';

// const Index = () => {
//     const [anchorEl, setAnchorEl] = useState(null);
//     const [startDate, setStartDate] = useState('');
//     const [endDate, setEndDate] = useState('');
//     const [selectedDates, setSelectedDates] = useState('');
//     const [totalOrders, setTotalOrders] = useState(0);
//     const [avgUnits, setAvgUnits] = useState(0);
//     const [unitsOrdered, setUnitsOrdered] = useState(0);
//     const [orderSales, setOrderSales] = useState(0);

//     const open = Boolean(anchorEl);

//     const handleClick = (event) => {
//         setAnchorEl(event.currentTarget);
//     };

//     const handleClose = () => {
//         setAnchorEl(null);
//     };

//     const handleApply = () => {
//         if (startDate && endDate) {
//             setSelectedDates(`Selected Date Range: ${startDate} to ${endDate}`);
//         } else {
//             setSelectedDates('Please select both start and end dates.');
//         }
//     };

//     // Generating random numbers when dates are updated
//     useEffect(() => {
//         if (startDate && endDate) {
//             setTotalOrders(Math.floor(Math.random() * 1000));
//             setAvgUnits((Math.random() * 10).toFixed(2));
//             setUnitsOrdered(Math.floor(Math.random() * 100));
//             setOrderSales(Math.floor(Math.random() * 10000));
//         }
//     }, [startDate, endDate]);

//     return (
//         <div className="dashboard">
//             <h1 className='ds-n'>Payroll Dashboard</h1>

//             <button
//                 aria-controls={open ? 'basic-menu' : undefined}
//                 aria-haspopup="true"
//                 aria-expanded={open ? 'true' : undefined}
//                 onClick={handleClick}
//                 className='d-btn'
//             >
//                 Payroll Options
//             </button>
//             <Menu
//                 id="basic-menu"
//                 anchorEl={anchorEl}
//                 open={open}
//                 onClose={handleClose}
//                 MenuListProps={{
//                     'aria-labelledby': 'basic-button',
//                 }}
//             >
//                 <MenuItem onClick={handleClose}><Link to="/edit-Payroll" className='edit'>Report Payroll</Link> </MenuItem>
//                 <MenuItem onClick={handleClose}><Link to="/payroll-report" className='payroll-report'>Manage Payroll</Link></MenuItem>
//             </Menu>

//             <div className='date'>
//                 <h3 className='date-n'>Date</h3>
//                 <input 
//                     type="date" 
//                     min="2024-07-19" 
//                     max="2024-08-19" 
//                     className='date-input' 
//                     value={startDate}
//                     onChange={(e) => setStartDate(e.target.value)}
//                 />
//                 <label className='to'>To</label>
//                 <input 
//                     type="date" 
//                     min="2024-07-19" 
//                     max="2024-08-19" 
//                     className='date-input' 
//                     value={endDate}
//                     onChange={(e) => setEndDate(e.target.value)}
//                 />
//                 <button className='d-btn'>Download</button>
//                 <button className='a-btn' onClick={handleApply}>Apply</button>
//             </div>

//             <div className='snap'>
//                 <h1 className='sales-n'>Sales Snapshot</h1>
//                 <p className='sales-p'>{selectedDates}</p>
//             </div>

//             <div className='total-order-item'>
//                 <p className='total-n'>Total order items</p>
//                 <h1 className='total-0'>{totalOrders}</h1>
//                 <p className='unit-n'>Units ordered</p>
//                 <h1 className='unit-0'>{unitsOrdered}</h1>
//                 <p className='order-n'>Ordered product sales</p>
//                 <h1 className='order-0'>{orderSales}</h1>
//                 <p className='avg-n'>Avg. units/order item</p>
//                 <h1 className='avg-0'>{avgUnits}</h1>
//             </div>

//             <div className='compare'>
//                 <h1 className='cmps-n'>Compare Sales</h1>
//                 <button className='g-btn'>Graph View</button>
//                 <button className='t-btn'>Table View</button>

//                 <Box height="250px" m="-20px 0 0 0">
//                     <LineChart isDashboard={true} />
//                 </Box>
//             </div>
//         </div>
//     );
// }

// export default Index;


import React, { useState, useEffect } from 'react';
import "../payroll/payroll.css";
// import LineChart from "../../components/BarChart";
import BarChart from "../../components/BarChart";
import { Box, Button, Menu, MenuItem } from '@mui/material';
import { Link } from 'react-router-dom';

const Index = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [selectedDates, setSelectedDates] = useState('');
    const [totalOrders, setTotalOrders] = useState(0);
    const [avgUnits, setAvgUnits] = useState(0);
    const [unitsOrdered, setUnitsOrdered] = useState(0);
    const [orderSales, setOrderSales] = useState(0);
    const [showGraph, setShowGraph] = useState(false); // State to control graph visibility

    const open = Boolean(anchorEl);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleApply = () => {
        if (startDate && endDate) {
            setSelectedDates(`Selected Date Range: ${startDate} to ${endDate}`);
        } else {
            setSelectedDates('Please select both start and end dates.');
        }
    };

    // Generating random numbers when dates are updated
    useEffect(() => {
        if (startDate && endDate) {
            setTotalOrders(Math.floor(Math.random() * 1000));
            setAvgUnits((Math.random() * 10).toFixed(2));
            setUnitsOrdered(Math.floor(Math.random() * 100));
            setOrderSales(Math.floor(Math.random() * 10000));
            setShowGraph(false); // Hide graph when dates are updated
        }
    }, [startDate, endDate]);

    const handleGraphView = () => {
        setShowGraph(true); // Show graph when button is clicked
    };

    return (
        <div className="dashboard">
            <h1 className='ds-n'>Payroll Dashboard</h1>

            <button
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
                className='d-btn'
            >
                Payroll Options
            </button>
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}
            >
                <MenuItem onClick={handleClose}><Link to="/edit-Payroll" className='edit-report'>Report Payroll</Link> </MenuItem>
                <MenuItem onClick={handleClose}><Link to="/payroll-report" className='payroll-report'>Manage Payroll</Link></MenuItem>
            </Menu>

            <div className='date'>
                <h3 className='date-n'>Date</h3>
                <input 
                    type="date" 
                    min="2024-07-19" 
                    max="2024-08-19" 
                    className='date-input' 
                    value={startDate}
                    onChange={(e) => setStartDate(e.target.value)}
                />
                <label className='to'>To</label>
                <input 
                    type="date" 
                    min="2024-07-19" 
                    max="2024-08-19" 
                    className='date-input' 
                    value={endDate}
                    onChange={(e) => setEndDate(e.target.value)}
                />
                <button className='d-btn'>Download</button>
                <button className='a-btn' onClick={handleApply}>Apply</button>
            </div>

            <div className='snap'>
                <h1 className='sales-n'>Sales Snapshot</h1>
                <p className='sales-p'>{selectedDates}</p>
            </div>

            <div className='total-order-item'>
                <p className='total-n'>Total order items</p>
                <h1 className='total-0'>{totalOrders}</h1>
                <p className='unit-n'>Units ordered</p>
                <h1 className='unit-0'>{unitsOrdered}</h1>
                <p className='order-n'>Ordered product sales</p>
                <h1 className='order-0'>{orderSales}</h1>
                <p className='avg-n'>Avg. units/order item</p>
                <h1 className='avg-0'>{avgUnits}</h1>
            </div>

            <div className='compare'>
                <h1 className='cmps-n'>Compare Sales</h1>
                <button className='g-btn' onClick={handleGraphView}>Graph View</button>
                <button className='t-btn'>Table View</button>

                <Box height="570px" m="-20px 0 0 0">
                    {showGraph && (
                        <BarChart 
                            totalOrders={totalOrders} 
                            avgUnits={avgUnits} 
                            unitsOrdered={unitsOrdered} 
                            orderSales={orderSales} 
                        />
                    )}
                </Box>
            </div>
        </div>
    );
}

export default Index;
