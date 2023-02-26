const port = 5000
const express = require('express')
require('dotenv').config()
const cors = require('cors')
const axios = require('axios')

const app = express()
app.use(cors())
app.listen(5000, ()=> console.log(`Server is running on ${port}` ))

app.get('/country', (req,res)=>{    
  
    const options = {
        method: 'GET',
        url: 'https://wft-geo-db.p.rapidapi.com/v1/geo/adminDivisions',
        headers: {
            'X-RapidAPI-Key':process.env.REACT_APP_API_KEY,
            'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com'
        }
      };
    
    axios.request(options).then(function (response) {
        res.json(response.data);
    }).catch(function (error) {
        console.error(error);
    });
})
