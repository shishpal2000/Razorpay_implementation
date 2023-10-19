import express, { urlencoded } from 'express'
import {config} from 'dotenv'
import paymentRoutes from './routes/paymentRoutes.js'
import Razorpay from 'razorpay'
import cors from 'cors'

config({path:"./dotenv.env"});
const PORT=process.env.PORT;
const app=express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:"true"}))

export const instance = new Razorpay({
    key_id: process.env.razorpay_key,
    key_secret: process.env.razorpay_secret_key,
  });



app.use('/api',paymentRoutes);


app.listen(PORT,()=>{
    console.log("server run port number 50000");
});