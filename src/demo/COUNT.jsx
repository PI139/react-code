import React,{ useState } from 'react';

const COUNT = () => {

       var [count ,setcount] = useState(0)

       const handleclick = () => {
        setcount(count+1)
       }

       

    return(
        <>
        <h1>{count}</h1>
        <button onClick={handleclick}>COUNT</button>
        </>
    );
}
export default COUNT