import React, {useState} from 'react'
import Menu from '../buttons/Menu';

const Header = () => {

    const theMenu = () =>{
        return (
            <div className = 'dark-bkg'>
                <div className = "close-menu" onClick = {()=> (setMenu(null))}>X</div>
                <a href = "/about" className = "menu-item menu-item-first" >ABOUT</a>
                <a href = "/reviews" className =  "menu-item menu-item-second" >REVIEWS</a>
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
