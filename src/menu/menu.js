import React from 'react';
import { slide as Menu } from 'react-burger-menu';

import { GiMushroomHouse } from "react-icons/gi";
import { IoMdCreate } from "react-icons/io";
import { AiOutlinePaperClip } from "react-icons/ai";
import { IoIosPaperPlane } from "react-icons/io";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaCodepen } from "react-icons/fa";

import './menu.css';

export default props => {
    return (
        <Menu className="menu" width={'200px'} >            
            <a className="menu-item" href="/" >
                <GiMushroomHouse/> Home
            </a>

            <a className="menu-item" href="/projects">
                <IoMdCreate/> Projects
            </a>

            <a className="menu-item" href="/">
                <AiOutlinePaperClip/> Resume
            </a>

            <a className="menu-item" href="/contact">
                <IoIosPaperPlane/> Contact
            </a>

            <a className="menu-item-static">
                Social
            </a>

            <a className="menu-item">
                <a className="menu-list" href="http://github.com/leahtbriggs">
                    <FaGithub/>
                </a>

                <a className="menu-list" href="https://www.linkedin.com/in/leahbriggs/">
                    <FaLinkedin/>
                </a>

                <a className="menu-list" href="https://codepen.io/leahmakesstuff">
                    <FaCodepen/>
                </a>
            </a>
        </Menu>
    );
};