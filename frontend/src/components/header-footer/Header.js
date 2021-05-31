import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import Menu from '../buttons/Menu';

const Header = () => {

    const theMenu = () =>{
        return (
            <div className = 'dark-bkg'>
                <div className = "close-menu" onClick = {()=> (setMenu(null))}>X</div>
                <Link to= "/" className = "menu-item menu-item-first" onClick = {()=> (setMenu(null))} >HOME</Link>
                <Link to="/about" className =  "menu-item menu-item-second" onClick = {()=> (setMenu(null))} >ABOUT</Link>
                <Link to="/store" className =  "menu-item menu-item-third" onClick = {()=> (setMenu(null))} >STORE</Link>
                <Link to="/portfolio" className =  "menu-item menu-item-fourth" onClick = {()=> (setMenu(null))} >PORTFOLIO</Link>
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
