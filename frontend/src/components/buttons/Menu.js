const Menu = ({openMenu}) => {

    return (
        <div onClick = {openMenu} className = "menu-trigger">
            <div className = "first-arrow"></div>
            <div className = "second-arrow"></div>
            <div className = "third-arrow"></div>
        </div>
    )
}

export default Menu
