import { Box, Button, IconButton, Typography, Menu, MenuItem } from "@mui/material";
import { mockTransactions } from "../../data/mockData";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import EmailIcon from "@mui/icons-material/Email";
import PointOfSaleIcon from "@mui/icons-material/PointOfSale";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import TrafficIcon from "@mui/icons-material/Traffic";
import Header from "../../components/Header";
import LineChart from "../../components/BarChart";
import StatBox from "../../components/StatBox";
// import { Box, Button, IconButton, Typography, Menu, MenuItem } from "@mui/material";
import { useState } from "react";





const Dashboard = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box m="20px" sx={{ backgroundColor: "#2a221c", color: "orange" }}>
      {/* HEADER */}
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="DASHBOARD" subtitle="Welcome to your dashboard" />

        <Box>
          {/* Payroll Dropdown */}
          <Button
            id="payroll-button"
            aria-controls={open ? "payroll-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
            sx={{
              backgroundColor: "#fe6c00",
              color: "#ffffff",
              fontSize: "14px",
              fontWeight: "bold",
              padding: "10px 20px",
              marginRight: "10px"
            }}
          >
            
            <DownloadOutlinedIcon sx={{ mr: "10px" }} />
            Download Reports
          </Button>
        </Box>
      </Box>

      {/* GRID & CHARTS */}
      <Box
        display="grid"
        gridTemplateColumns="repeat(12, 1fr)"
        gridAutoRows="140px"
        gap="20px"
        boxShadow="0 0 5px orangered, 0 0 10px orangered, 0 0 15px orangered, 0 0 20px orangered"
      >
        {/* ROW 1 */}
        <Box
          gridColumn="span 3"
          backgroundColor="#ffc397"
          marginTop="8px"
          marginLeft="5px"
          display="flex"
          alignItems="center"
          justifyContent="center"
          sx={{ borderRadius: "8px" }}
        >
          <StatBox
            title="12,361"
            subtitle="Emails Sent"
            progress="0.75"
            increase="+14%"
            icon={<EmailIcon sx={{ color: "orangered", fontSize: "26px" }} />}
          />
        </Box>
        <Box
          gridColumn="span 3"
          backgroundColor="#ffc397"
          display="flex"
          marginTop="8px"
          // marginLeft="5px"
          alignItems="center"
          justifyContent="center"
          sx={{ borderRadius: "8px" }}
        >
          <StatBox
            title="431,225"
            subtitle="Sales Obtained"
            progress="0.50"
            increase="+21%"
            icon={<PointOfSaleIcon sx={{ color: "orangered", fontSize: "26px" }} />}
          />
        </Box>
        <Box
          gridColumn="span 3"
          backgroundColor="#ffc397"
          display="flex"
          marginTop="8px"
          // marginLeft="5px"
          alignItems="center"
          justifyContent="center"
          sx={{ borderRadius: "8px" }}
        >
          <StatBox
            title="32,441"
            subtitle="New Clients"
            progress="0.30"
            increase="+5%"
            icon={<PersonAddIcon sx={{ color: "orangered", fontSize: "26px" }} />}
          />
        </Box>
        <Box
          gridColumn="span 3"
          backgroundColor="#ffc397"
          display="flex"
          marginTop="8px"
          marginRight="5px"
          alignItems="center"
          justifyContent="center"
          sx={{ borderRadius: "8px" }}
        >
          <StatBox
            title="1,325,134"
            subtitle="Traffic Received"
            progress="0.80"
            increase="+43%"
            sx={{ color: "#fff" }}
            icon={<TrafficIcon sx={{ color: "orangered", fontSize: "26px" }} />}
          />
        </Box>

        {/* ROW 2 */}
        <Box
          gridColumn="span 8"
          gridRow="span 2"
          backgroundColor="#473b33"
          sx={{ borderRadius: "8px" }}
        >
          <Box
            mt="25px"
            p="0 30px"
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <Box>
              <Typography variant="h5" fontWeight="600" color="#ff5722">
                Revenue Generated
              </Typography>
              <Typography variant="h3" fontWeight="bold" color="#ff7043">
                ₹59,342.32
              </Typography>
            </Box>
            <Box>
              <IconButton>
                <DownloadOutlinedIcon sx={{ fontSize: "26px", color: "#ff5722" }} />
              </IconButton>
            </Box>
          </Box>
          <Box height="250px" m="-20px 0 0 0">
            <LineChart isDashboard={true} />
          </Box>
        </Box>
        <Box
          gridColumn="span 4"
          gridRow="span 2"
          backgroundColor="#fe6c00"
          overflow="auto"
          sx={{ borderRadius: "8px" }}
        >
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            boxShadow="0 0 5px #fff"
            p="15px"
          >
            <Typography color="#fff" variant="h5" fontWeight="600">
              Recent Transactions
            </Typography>
          </Box>
          {mockTransactions.map((transaction, i) => (
            <Box
              key={`${transaction.txId}-${i}`}
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              backgroundColor="#473b33"
              boxShadow="0 0 4px orange, 0 0 8px orange"
              p="15px"
            >
              <Box>
                <Typography color="#fff" variant="h5" fontWeight="600">
                  {transaction.txId}
                </Typography>
                <Typography color="#ff7043">{transaction.user}</Typography>
              </Box>
              <Box color="#ff7043">{transaction.date}</Box>
              <Box
                backgroundColor="#473b33"
                color="#ffffff"
                p="5px 10px"
                borderRadius="4px"
                border="1px solid #fff"
              >
                ₹{transaction.cost}
              </Box>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default Dashboard;
