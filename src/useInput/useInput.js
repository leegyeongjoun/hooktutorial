import { useReducer } from 'react';

function reducer(state, action){
    return {
        ...state,
        [action.name]: action.value
    };
}
export default function useInput(initalForm) {
    const [state, dispatch] = useReducer(reducer, initalForm);
    const onChnage = e => {
        dispatch(e.target);
    };
    return [state, onChnage];
}
