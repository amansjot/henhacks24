import React from "react";
import "./Homescreen.css";
import {Link} from 'react-scroll';
export function Homescreen(): JSX.Element {

    return (
        <nav className="navbar">
            <div className = "desktopMenu">
                <Link activeClass = "active" to="intro" spy={true} smooth={true} offset={-50} duration={500} className="destopMenuListItem">Home</Link>
                <Link activeClass = "active" to="" spy={true} smooth={true} offset={-50} duration={500} className="destopMenuListItem">Pre-K/Kindergarten</Link>
                <Link activeClass = "active" to="works" spy={true} smooth={true} offset={-50} duration={500} className="destopMenuListItem">Elementary</Link>
                <Link activeClass = "active" to="" spy={true} smooth={true} offset={-50} duration={500} className="destopMenuListItem">Highschool</Link>
            </div>
        </nav>
    );



}

