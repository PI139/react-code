import React from "react"
import Component2 from "./Component2";
import context from "./CREATCOMPONENT";


const Component1 = () => {

    var str = "HELLO hello";
    return (
        // <>
        //     <h2>COMPONENT = 1{str}</h2>
        //     <Component2 p={str} />
        // </>

        <>
            <context.Provider value={str}>

                <h2>COMPONENT = 1</h2>
                <Component2 p={str} />

            </context.Provider>
        </>
    );
};
export default Component1;
