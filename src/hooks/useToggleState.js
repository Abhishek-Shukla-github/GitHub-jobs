import React, {useState} from 'react'

export default function useToggleState(initVal) {
    const [state, setState] = useState(initVal);
    const toggle = () => setState(!state);
    console.log(state);
    return [state, toggle];
}
