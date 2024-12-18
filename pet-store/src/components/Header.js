import React from "react";
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header>
         <nav>
            <ul>
                <li><Link to="/">Главная</Link></li>
                <li><Link to="/products">Продукты</Link></li>
                <li><Link to="/cart">Оплата</Link></li>
                <li><Link to="/contacts">Контакты</Link></li>
            </ul>
         </nav>
        </header>
    );
};

export default Header;


