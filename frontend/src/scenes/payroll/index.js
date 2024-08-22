import React, { useState } from 'react';
import "../payroll/payroll.css";
import LineChart from "../../components/LineChart";
import { Box, Button, Menu, MenuItem } from '@mui/material';
import { Link } from 'react-router-dom';

const Index = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
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
                {/* <MenuItem onClick={handleClose}></MenuItem> */}
                <MenuItem onClick={handleClose}><Link to="/edit-Payroll" className='edit'>Report Payroll</Link> </MenuItem>
                <MenuItem onClick={handleClose}><Link to="/payroll-report" className='payroll-report'>Manage Payroll</Link></MenuItem>
            </Menu>

            <div className='date'>
                <h3 className='date-n'>Date</h3>
                <input type="date" min="2024-07-19" max="2024-08-19" className='date-input'  />
                {/* <Button className='d-btn'>Download</Button> */}
                <button className='d-btn'>Download</button>
                <button className='a-btn'>Apply</button>
            </div>

            <div className='snap'>
                <h1 className='sales-n'>Sales Snapshot</h1>
                <p className='sales-p'>taken at 8/8/2024, 11:23:12 am IST</p>
            </div>

            <div className='total-order-item'>
                <p className='total-n'>Total order items</p>
                <h1 className='total-0'>0</h1>
                <p className='unit-n'>Units ordered</p>
                <h1 className='unit-0'>0</h1>
                <p className='order-n'>Ordered product sales</p>
                <h1 className='order-0'>0</h1>
                <p className='avg-n'>Avg. units/order item</p>
                <h1 className='avg-0'>0</h1>
            </div>

            <div className='compare'>
                <h1 className='cmps-n'>Compare Sales</h1>
                <Button className='g-btn'>Graph View</Button>
                <Button className='t-btn'>Table View</Button>

                
          <Box height="250px" m="-20px 0 0 0">
            <LineChart isDashboard={true} />
          </Box>
        
            </div>
        </div>
    );
}

export default Index;
