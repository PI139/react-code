import React,{ useState } from 'react';


const HOOKS = () => {
    var [str , setstr] = useState('')

    const handleclick = () => {
        setstr("HELLO ALLL >>>>.....")
    }
    return (
        <>
            <h1>{str}</h1>
            <button onClick={handleclick}>click</button>
        </>
    )
}
export default HOOKS
