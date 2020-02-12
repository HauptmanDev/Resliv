import React from 'react';
import s from './Header.module.css'
import {NavLink} from "react-router-dom";

const Header = () => {
    return (
        <div className={s.header}>
            <div className={s.element}>
                <NavLink className={s.link} to='/ '>Главная</ NavLink>
            </div>
            <div className={s.element}>
                <NavLink className={s.link} to='/actors'>Актеры</ NavLink>
            </div>
        </div>
    )
};


export default Header;