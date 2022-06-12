import React from "react";
import Button from "@mui/material/Button";
import DensityMediumIcon from "@mui/icons-material/DensityMedium";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import logo from "../static/images/company-logo.png";
import "./header.css";

function Header() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className="header-wrapper">
      <div className="left">
        <div className="logo">
          <img src={logo} alt="company"></img>
        </div>
        <div className="name">
          <p>Impact Cables</p>
        </div>
      </div>
      <div className="right">
        <div className="link">
          <a style={{ textDecoration: "none" }} href="#home">
            <p>Home</p>
          </a>
        </div>
        <div className="link">
          <a style={{ textDecoration: "none" }} href="#products">
            <p>Products</p>
          </a>
        </div>
        {/* <div className="link">
          <p>About</p>
        </div> */}
        <div className="link">
          <a style={{ textDecoration: "none" }} href="#contact">
            <p>Contact</p>
          </a>
        </div>
        <div className="link">
          <a style={{ textDecoration: "none" }} href="#desk">
            <p>Desk</p>
          </a>
        </div>
      </div>
      <div className="dropdown">
        <Button
          id="basic-button"
          aria-controls={open ? "basic-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
        >
          <DensityMediumIcon style={{ color: "black" }} />
        </Button>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
        >
          <a style={{ textDecoration: "none", color: "black" }} href="#home">
            <MenuItem onClick={handleClose}>Home</MenuItem>
          </a>
          <a
            style={{ textDecoration: "none", color: "black" }}
            href="#products"
          >
            <MenuItem onClick={handleClose}>Products</MenuItem>
          </a>
          <a style={{ textDecoration: "none", color: "black" }} href="#contact">
            <MenuItem onClick={handleClose}>Contact</MenuItem>
          </a>
          <a style={{ textDecoration: "none", color: "black" }} href="#desk">
            <MenuItem onClick={handleClose}>Desk</MenuItem>
          </a>
        </Menu>
      </div>
    </div>
  );
}

export default Header;
