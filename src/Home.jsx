import React from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import React, { useEffect, useState } from 'react';
// import axios from 'axios';


import Body from './Body';




const Home = () => {
    
            // var [data, setdata] = useState([]);
    
            // useEffect(() => {
            //    fetchdata()
            // },[])
    
            // function fetchdata() {
            //     axios.get('https://geton.skmbpk1z.a2hosted.com/get-data.php').then(function (read) {
            //         setdata(read.data)
            //     })
            // }
    
            // const handleDelete = (r) => {
            //     var id = r.target.getAttribute('data');
    
            //     // object start
    
            //     var a = new FormData();
    
            //     a.set('id',id)
    
            //     axios.post('https://geton.skmbpk1z.a2hosted.com/delete-data.php',a).then(function(read){
            //         if(read.data.status == "true"){
            //             fetchdata()
            //         }
            //     })
            // }
                //   object end
    
    //         return (
    //             <>
    //                 <table border={1} cellPadding={8} cellSpacing={0}>
    //                     <tr>
    //                         <th>ID</th>
    //                         <th>NAME</th>
    //                         <th>EMAIL</th>
    //                         <th>PASSWORD</th>
    //                         <th>Action</th>
    //                     </tr>
    //                     {
    //                         data.map((r) => {
    //                             return (
    //                                 <>
    //                                 <tr>
    //                                     <td>{r.id}</td>
    //                                     <td>{r.name}</td>
    //                                     <td>{r.email}</td>
    //                                     <td>{r.password}</td>
    //                                     <td><button onClick={handleDelete} data={r.id}>Delete</button></td>
    //                                 </tr>
    //                                 </>
    //                             )
    //                         })
    //                     }
    //                 </table>
    //             </>
    //         )
    // }
// =================================================

    //     var message = useSelector((state)=>state.message)

    //     var dispatch = useDispatch()

    // const handleclick = () => {
    //     dispatch({
    //         type: "msg"
    //     })
    // }
// ===========================================================

    return (
        <>
            {/* <Body /> */}
            {/* {message} */}
            {/* <button onClick={handleclick}>CLICK</button> */}
        </>
    )
}
export default Home