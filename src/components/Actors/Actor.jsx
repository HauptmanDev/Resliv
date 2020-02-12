import React from 'react';
import s from './Actors.module.css'
import {Icon} from "antd";


let Actor=(props)=> {

    let onDeleteClick = () => {
        props.deleteActor(props.info.name)
    };

    return (
        <div>
            <div className={s.name}>
                <span>{props.info.name}</span><Icon onClick={onDeleteClick} type="close-circle" theme="twoTone"/>
            </div>
        </div>
    )
};

export default Actor;