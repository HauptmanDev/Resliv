import React from 'react';
import style from './Main.module.css'

const Main = (props) => {
    return (
        <div className={style.hello}>
            <div className={style.title}>
                <span>Hello!</span>
            </div>
        </div>
    )
};

export default Main;