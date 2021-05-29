import React, {useState} from 'react';
import {BrowserRouter as router, Link} from 'react-router-dom';
import Menu from '../buttons/Menu';

const Header = () => {

    const theMenu = () =>{
        return (
            <div className = 'dark-bkg'>
                <div className = "close-menu" onClick = {()=> (setMenu(null))}>X</div>
                <a href = "/" className = "menu-item menu-item-first" >HOME</a>
                <a href = "/About" className =  "menu-item menu-item-second" >ABOUT</a>
                <a href = "/store" className =  "menu-item menu-item-third" >STORE</a>
                <a href = "/portfolio" className =  "menu-item menu-item-fourth" >PORTFOLIO</a>
            </div>
            )
    }

    const [menu, setMenu] = useState(null)

    const openMenu = ()=>{
        setMenu(theMenu)
    }

    return (
        <div className = "header">
            {menu}
            <Menu openMenu = {openMenu}/>
        </div>
    )
}

export default Header
