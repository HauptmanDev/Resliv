import React, {useEffect, useState} from 'react';
import {connect, useDispatch} from "react-redux";
import s from './Actors.module.css'
import {addActors, deleteActors, getActorsTC} from "../../redux/actors-reducer";
import Actor from "./Actor";
import {Button, Input} from 'antd';

export function Actors(props) {

    const dispatch = useDispatch();

    const [name, setName] = useState('');

    useEffect(() => {
        dispatch(getActorsTC());
    }, []);

    useEffect(() => {
    }, [props.actors]);


    const inputNewActor = (e) => {
        let newName = e.currentTarget.value;
        setName(newName)
    };

    const addNewActor = () => {
        dispatch(addActors({name: name}));
        setName('')
    };
    const deleteActor = (actor) => {
        dispatch(deleteActors(actor));
        setName('')
    };

    return (
        <div className={s.pageActors}>
            <div className={s.title}>
                <span>Actors</span>
            </div>
            <div className={s.infoPage}>
                <div className={s.actors}>
                    {props.actors.map(p => {
                        return <Actor info={p} deleteActor={deleteActor}/>
                    })}
                </div>
            </div>
            <div style={{
                display: "flex",
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: "center",
                height: '20vh'
            }}>
                <Input onChange={inputNewActor} placeholder="Name actor" height='20px' value={name}/>
                <Button onClick={addNewActor}>Add new actor</Button>
            </div>
        </div>
    )
}


const mapStateToProps = (state) => ({
    actors: state.actor.actors
});

export default connect(mapStateToProps, {getActorsTC})(Actors);