import React,{useState,useMemo } from 'react';

const MEMO = () => {

       var [count ,setcount] = useState(0)
       const handleclick = () => {
        setcount(count+1)
       }


       var [item ,setitem] = useState(1)
       const handleitem = () => {
        setitem(item+1)
       }


      var dmemo = useMemo(
        function demo() {

         console.log("hello");
    },[item]
)


    return(
        <>
        {/* {demo()} */}
         {dmemo} 
        <h1> COUNT : {count} </h1>
        <button onClick={handleclick}>COUNT</button>


        <h2> ITEM : {item}</h2>
        <button onClick={handleitem}>ITEM</button>
        </>
    );
}
export default MEMO