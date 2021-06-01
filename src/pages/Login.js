import React, { useEffect, useState } from 'react'
import firebase, { db } from '../utilits/firebase'

const Login = (props) => {
    const [name, setName] = useState('')
    const [data, setData] = useState()
    useEffect(()=>{
        login('host')
    },[])
    async function login(role) {
        
        try {
            const messaging = firebase.messaging();
            messaging.requestPermission()
                .then(() => {
                    return messaging.getToken()
                })
                .then(async (token) => {
                    console.log("Token ", token);
                    // setName(token)
                    setData(token)
                    db.collection('token').add({
                        Token: token
                    }).then(() => { 
                        // alert("Message has been submitted 👍 and your token is " + token)
                     })
                        .catch(err => { alert(err.message) })
                    const body =
                    {
                        token,
                        user: role,
                        name
                    }

                    // const response = await fetch("https://localhost:3000/Login", 
                    // {
                    //     method: "POST",
                    //     body: JSON.stringify(body),
                    //     headers: 
                    //     {
                    //         'Content Type': 'application/json'
                    //     }
                    // })

                    // const res = await response.json()
                    // console.log("res", res);
                })
                .catch(error => {
                    console.log("Error from first error ", error);
                })
        }
        catch { }
    }
    return (
        <div>
            <input value={name} placeholder={name} onChange={(e) => { setName(e.target.value) }} />
            <br></br>
            <br></br>
            <button title="Login as Host" onClick={() => { login('host') }}>Login as Host</button>
            <br></br>
            <br></br>
            <div className="token">
                <p>{data}</p>
            </div>
            {/* <button title="Login as Audience" onClick={() => { login("Audience") }} >Login as Audience</button> */}
        </div>
    )
}

export default Login
