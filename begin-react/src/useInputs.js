import { useReducer, useCallback } from "react";

function reducer(form, action) {
    switch(action.type) {
        case "CHANGE":
            return {
                ...form,
                [action.name]: action.value
            }
        case "RESET":
            return action.initialForm;
        default:
            throw new Error("Unhandled action");
    }
}

function useInputs(initialForm) {

    const [form,dispatch] = useReducer(reducer, initialForm);

    const onChange = useCallback(e => {
        const {name, value} = e.target;
        dispatch({
            type: "CHANGE",
            name,
            value
        });
    }, []);

    const reset = useCallback(e => {
        dispatch({
            type: "RESET",
            initialForm
        })
    }, [initialForm])
    
    return [form,onChange,reset];
}

export default useInputs;