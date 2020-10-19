import React, {useState} from 'react'

export default function useToggleState(initVal=false) {
    const [state,toggleState]=useState(false)
    return [state, toggleState];
}
