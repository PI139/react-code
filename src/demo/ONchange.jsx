import React,{ useState } from 'react';

const ONchange = () => {
    var [data , setdata] = useState('name')

    const handleclick = (demo) => {
        setdata(demo.target.value);
    }

    // =======OBJECT======

    // const handleclick = (demo) => {
        // console.log(demo);
    // }


    return (
        <>
        <h1>{data}</h1>
        <input type="text" onChange={handleclick} />
        </>
    )
}

export default ONchange