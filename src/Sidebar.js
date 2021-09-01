import React from "react";
import "./Sidebar.css";
import { Avatar } from "@material-ui/core";

function Sidebar() {

const recentItem = (topic) => (
    <div className="sidebar__recentItem">
        <span className="sidebar__hash">#</span>
        <p>{topic}</p>
    </div>
)

  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <img src="https://images.unsplash.com/photo-1608408843596-b3119736057c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1495&q=80" alt="" />
        <Avatar src="https://lh3.googleusercontent.com/MX-b9BJUn4-DTdASdwXjC_yHNrZmnPIrW0jZWOlpxGpdVInn6VyW4H9-pQhyE717vbLIz78xMF969bYcPGEYeuEE8j9cbNPfTAF-SgNepKpli08vAgkR0fJDIrJVyBCf_pdnkGXvIPHzKCaJEitz7e0Yg5-n-Z0DIdWe-A-NhMOlcxcVndUjsSybe4nQDJfpFeqm72RJbdH8WWYsitLSS0bNrASm75w96Y6Z9y18wagkZVdz1rvx33JkW2nKYYv1Vs36g7mxUt0njh3mxZRgB_KEhISVyPDcpFee88jWQtlCLhTXzXv6hdu-diKtjfCTr0VC0i6NOVflhocFQKX1_Yqd-LeZ_0R_DzwgMQkm779hJTtBubAetXKkHjFwl_jAyyxt4qCntYeYmExb7J2xVScMIZj-sDS5RXuuTFgQdnVYxFpUhu0Hfb5jpJtLBSBnSfQ-DsSC3ZaEkq59-on7vv9AUDaFJ9TVzHtuff6qGQcqnJoSZVbeLDC4RLxXXsdBMqDtT0HswRE0bp_IzD7J2O5vRQeG84_OqURMJfn-dmZh3c31hMz8OPTeJTnCRQya3bRIkkOx0GmRjTbs9onJXasoy_cyPNRvYOaZSte-I6XOQorCXlPwANjE9B_kTB0MTPcJy4Un_jSkPreAWf8AiLOtBeXR3t7Bwrs2fMzuI6i6AOyh0MsfcR8uxLOkcUdqaqZHcUIfIAIMas-JB_cusxg=w900-h870-no?authuser=1" className="sidebar__avatar" />
        <h2>Analesh Jaiswal</h2>
        <h4>analeshjswl@gmail.com</h4>
      </div>
      <div className="sidebar__stats">
        <div className="sidebar__stat">
            <p>Who Viewed you</p>
          <p className="sidebar__statnumber">2,589</p>
        </div>
        <div className="sidebar__stat">
        <p>View on post</p>
          <p className="sidebar__statnumber">2,989</p>
        </div>
      </div>

      <div className="sidebar__bottom">
          <p>Recent</p>
          {recentItem('reactjs')}
          {recentItem('linkedInClone')}
          {recentItem('reactPoject')}
          {recentItem('portfolio')}
          {recentItem('front-end')}
      </div>
    </div>
  );
}

export default Sidebar;
