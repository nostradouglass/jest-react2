import React from 'react'
import './styles.scss'
import Logo from '../../assets/graphics/logo.jpg'

const Header = (props) => {
    return (
        // A custom datatype "data-test='headerComponent'". 
        // Can be used instead of class to keep from breaking test if class names changes or is removed. 
        <header data-test="headerComponent"> 
            <div className="wrap">
                <div className="logo">
                    <img className="logoIMG" src={Logo} alt="logo"></img>
                </div>
            </div>
        </header>
    )
}

export default Header;