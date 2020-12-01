import React, {useState, useEffect} from 'react';
import { SITEKEY } from '../web-socket/socket'
const axios = require('axios');

const Header = () => {

    const [siteName, setName]= useState('')
    const fetchData = () => {
        axios.get(`https://api.mountkelvin.com/v1/site/${SITEKEY}`)
            .then(res => {setName(res.data.name)})
            .catch(e => console.log(e))
    }

    useEffect(()=>{
        fetchData()
    })

    return (
        <div>
            <div className="h1">
                {siteName}
            </div>
        </div>
    )
}


export default Header