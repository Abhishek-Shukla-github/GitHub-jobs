import React, {useState} from 'react'

export default function useToggleState(initVal=false) {
    const [state, toggleState] = useState(initVal);
    const toggle = () => toggleState(!initVal);
    return [state, toggle];
}
