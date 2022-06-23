import React, {} from "react";
// import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import Logo from '../../img/BFILX.png';
import { AiOutlineClose } from "react-icons/ai";
import { AiOutlineSearch } from "react-icons/ai";
import { AiOutlineMenu } from "react-icons/ai";



function Header(){
    return(
    <div className='header'>
        <div className="header_left">
            <h1 className='logo'><Link to="/"><img src={Logo} alt="logo"/></Link></h1>
            <div className="gnb">
                {/* <AiOutlineMenu/> */}
                <ul className="gnb_list">
                    <li className="gnb_item">한국영화</li>
                    <li className="gnb_item">외국영화</li>
                    <li className="gnb_item">코미디</li>
                    <li className="gnb_item">멜로</li>
                    <li className="gnb_item">액션</li>
                </ul>
            </div>
        </div>
        <div className="header_right">
            <div className="search">
                <div className="search_box">
                    <input className="search_input" type="text" placeholder="Search..."/>
                    <AiOutlineSearch className="search_icon"/>
                </div>
            </div>
            <div className="mobileGnb">
                <AiOutlineMenu className="mobileGnb_icon"/>
                <div className="mobileGnb_wrap">
                    <AiOutlineClose className="close"/>
                    <ul className="mobileGnb_list">
                        <li className="mobileGnb_item">한국영화</li>
                        <li className="mobileGnb_item">외국영화</li>
                        <li className="mobileGnb_item">코미디</li>
                        <li className="mobileGnb_item">멜로</li>
                        <li className="mobileGnb_item">액션</li>
                    </ul>
                </div>
            </div>
        </div>
    </div> 
  );
}


export default Header;