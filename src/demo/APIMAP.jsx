import axios from 'axios';
import React, { useEffect, useState } from 'react';

// ======= READ API =======//

const APIMAP = () => {

        var [data, setdata] = useState([]);

        useEffect(() => {
            axios.get('https://geton.yarainfotech.com/get-data.php').then(function (read) {
                setdata(read.data)
            })
        })

        return (
            <>
                <table border={1} cellPadding={8} cellSpacing={0}>
                    <tr>
                        <th>ID</th>
                        <th>NAME</th>
                        <th>EMAIL</th>
                        <th>PASSWORD</th>
                    </tr>
                    {
                        data.map((r) => {
                            return (
                                <>
                                <tr>
                                    <th>{r.id}</th>
                                    <th>{r.name}</th>
                                    <th>{r.email}</th>
                                    <th>{r.password}</th>
                                </tr>
                                </>
                            )
                        })
                    }
                </table>
            </>
        )
}
export default APIMAP


