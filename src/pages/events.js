import React, { useEffect } from 'react'
import firebase from '../utilits/firebase'

const Events = (props) => { 
    
    useEffect(()=>{
        All()
    },[])

    const All=()=>{
        const messaging=firebase.messaging();
        messaging.onMessage((payload)=>{
            console.log("Payload",payload);
        })
    }
    return (
        <div>
            
        </div>
    )
}

export default Events
