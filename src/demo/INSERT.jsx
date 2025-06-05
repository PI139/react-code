import axios from 'axios';
import React, { useRef } from 'react';

// ======= POST API =======//

const INSERT = () => {
        
        var txtname = useRef();
        var txtemail = useRef();
        var txtpassword = useRef();


    const handleSubmit = (e) => {
        e.preventDefault();

        var name = txtname.current.value;
        var email = txtemail.current.value;
        var password = txtpassword.current.value;

        var a = new FormData()

        a.set('name',name)
        a.set('email',email)
        a.set('password',password)

        axios.post('https://geton.skmbpk1z.a2hosted.com/insert-data.php',a).then(function(){
        })
    }

    return (
        <>
            <form method="post" onSubmit={handleSubmit}>
                <table >
                    <tr>
                        <td>NAME :</td>
                        <td> <input type="name" ref={txtname} ></input></td>
                    </tr>
                    <tr>
                        <td> EMAIL ID :</td>
                        <td> <input type="text"  ref={txtemail}></input></td>

                    </tr>
                    <tr>
                        <td>PASSWORD :</td>
                        <td> <input type="text"  ref={txtpassword}></input></td>
                    </tr>
                    <tr>
                        <input type="submit"  value={'SUBMIT'}/>
                    </tr>

                </table>
            </form>
        </>
    )
}



export default INSERT


