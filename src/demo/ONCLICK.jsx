import React,{ useRef, useState } from 'react';

const ONCLICK = () => {

    var textname = useRef()

    const handleclick = () => {
        console.log(textname.current.value);
    }


    return (
        <>
        <input type="text" ref={textname} />
        <button onClick={handleclick}>CLICK</button>
        </>
    )
}

export default ONCLICK