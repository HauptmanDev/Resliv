import api from "../repository/api";

const GET_ACTORS = 'GET-ACTORS';
const ADD_ACTORS = 'ADD-ACTORS';
const DELETE_ACTORS = 'DELETE-ACTORS';


let initialState = {
    actors: [],
};

const actorsReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ACTORS:
            return {
                ...state, actors: [...action.actors]
            };
        case ADD_ACTORS:
            return {
                ...state, actors: [...state.actors, action.actor]
            };
        case DELETE_ACTORS:
            return {
                ...state, actors: state.actors.filter(a => {
                    return a.name != action.actor
                })
            };
        default:
            return state
    }
};
export default actorsReducer;

export const takeActors = (actors) => {
    return {
        type: GET_ACTORS,
        actors
    }
};
export const addActors = (actor) => {
    return {
        type: ADD_ACTORS,
        actor
    }
};

export const deleteActors = (actor) => {
    return {
        type: DELETE_ACTORS,
        actor
    }
};

export const getActorsTC = () => async (dispatch) => {
    await api.getActors().then(el => {
        dispatch(takeActors(el.info.results));
        // console.log(el.info.count)
    })
};