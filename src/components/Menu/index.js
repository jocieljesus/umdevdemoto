import React from 'react';
import Logo from   '../../assets/img/logo.png';
import './Menu.css';
import Button from '../Button';


function Menu(){
    return (
        <nav className='Menu'> 
            <a href="/">
                <img className="Logo" src={Logo} alt="Um dev de moto logo" />
            </a>

            <Button as="a" href="/">
                Novo Video   
            </Button>
        </nav>
        
    );
}

export default Menu;