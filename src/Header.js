import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import HeaderOption from "./HeaderOption";
import HomeIcon from '@material-ui/icons/Home';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import ChatIcon from '@material-ui/icons/Chat';
import NotificationsIcon from '@material-ui/icons/Notifications';
import Avatar from '@material-ui/core/Avatar';


function Header() {
  return (
    <div className="header">
      <div className="header__left">
        <img
          src="https://www.flaticon.com/svg/static/icons/svg/174/174857.svg"
          alt="LinkedIn Icon"
        />
        <div className="header__search">
          <SearchIcon />
          <input type="text" name="" id="" placeholder="Search" />
        </div>
      </div>

      <div className="header__right">
        <HeaderOption Icon={HomeIcon} title="Home" />
        <HeaderOption Icon={SupervisorAccountIcon} title="My Network" />
        <HeaderOption Icon={BusinessCenterIcon} title="Jobs" />
        <HeaderOption Icon={ChatIcon} title="Messaging" />
        <HeaderOption Icon={NotificationsIcon} title="Notification" />
        <Avatar alt="Analesh" src="https://lh3.googleusercontent.com/MX-b9BJUn4-DTdASdwXjC_yHNrZmnPIrW0jZWOlpxGpdVInn6VyW4H9-pQhyE717vbLIz78xMF969bYcPGEYeuEE8j9cbNPfTAF-SgNepKpli08vAgkR0fJDIrJVyBCf_pdnkGXvIPHzKCaJEitz7e0Yg5-n-Z0DIdWe-A-NhMOlcxcVndUjsSybe4nQDJfpFeqm72RJbdH8WWYsitLSS0bNrASm75w96Y6Z9y18wagkZVdz1rvx33JkW2nKYYv1Vs36g7mxUt0njh3mxZRgB_KEhISVyPDcpFee88jWQtlCLhTXzXv6hdu-diKtjfCTr0VC0i6NOVflhocFQKX1_Yqd-LeZ_0R_DzwgMQkm779hJTtBubAetXKkHjFwl_jAyyxt4qCntYeYmExb7J2xVScMIZj-sDS5RXuuTFgQdnVYxFpUhu0Hfb5jpJtLBSBnSfQ-DsSC3ZaEkq59-on7vv9AUDaFJ9TVzHtuff6qGQcqnJoSZVbeLDC4RLxXXsdBMqDtT0HswRE0bp_IzD7J2O5vRQeG84_OqURMJfn-dmZh3c31hMz8OPTeJTnCRQya3bRIkkOx0GmRjTbs9onJXasoy_cyPNRvYOaZSte-I6XOQorCXlPwANjE9B_kTB0MTPcJy4Un_jSkPreAWf8AiLOtBeXR3t7Bwrs2fMzuI6i6AOyh0MsfcR8uxLOkcUdqaqZHcUIfIAIMas-JB_cusxg=w900-h870-no?authuser=1" />
          

      </div>
    </div>
  );
}

export default Header;
