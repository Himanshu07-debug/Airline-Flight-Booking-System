const express = require('express');
const morgan = require('morgan');
const { createProxyMiddleware } = require('http-proxy-middleware');
const axios = require('axios');

require('dotenv').config();

const app = express();

const PORT = process.env.PORT;

app.use(morgan('combined'));


app.use('/bookingservice', async (req, res, next) => {

    try{
        const response = await axios.get(`${process.env.AUTH_SERVICE}/api/v1/isauthenticated`,{
            headers: {
                'x-access-token' : req.headers['x-access-token']
            }
        })
        
        if(response.data.success){
            next();
        }
        else{
            return res.status(401).json({
                message: "Unauthorized"
            })
        }
    }
    catch(err){
        return res.status(401).json({
            message: "Unauthorized"
        })
    }

})

  
app.use("/bookingservice", createProxyMiddleware({target : process.env.BOOKING_SERVICE, changeOrigin: true}));


app.get('/home', (req, res) => {
    return res.json({message : 'ok'});
})

app.listen(PORT, () => {
    console.log(`Server started at port ${PORT}`);
})
