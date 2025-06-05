import axios from 'axios';
import React, { useEffect, useRef } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

// ======= UPDATE API =======//

const UPDATE = () => {

    var txtname = useRef();
    var txtemail = useRef();
    var txtpassword = useRef();
    var navigate = useNavigate();
    
    var { id } = useParams()
    useEffect(() => {
        var a = new FormData
        a.set('id', id)
        axios.post('https://geton.skmbpk1z.a2hosted.com/single-data.php', a).then(function (response) {
            txtname.current.value = response.data.name
            txtemail.current.value =  response.data.email
            txtpassword.current.value = response.data.password
        })
    },[])


    const handleSubmit = (e) => {
        e.preventDefault();

        var name = txtname.current.value;
        var email = txtemail.current.value;
        var password = txtpassword.current.value;

        var a = new FormData()
        a.set('id',id)
        a.set('name', name)
        a.set('email', email)
        a.set('password', password)

        axios.post('https://geton.skmbpk1z.a2hosted.com/edit-data.php', a).then(function (response) {
            if (response.data.status == true) {
                navigate('./DELETE')
            } else {
                alert('wrong details')
            }
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
                        <td> <input type="text" ref={txtemail}></input></td>

                    </tr>
                    <tr>
                        <td>PASSWORD :</td>
                        <td> <input type="text" ref={txtpassword}></input></td>
                    </tr>
                    <tr>
                        <input type="submit" value={'SUBMIT'} />
                    </tr>

                </table>
            </form>
        </>
    )
}



export default UPDATE


